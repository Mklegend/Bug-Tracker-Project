var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require("dotenv");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
const mongoose = require("mongoose");
var projectRouter = require('./routes/project');
var pticketRouter = require('./routes/pticket');
var commentRouter =  require('./routes/comment');
var gTicketsRouter = require('./routes/gtickets');
var organizationRouter = require('./routes/organization');
var cors = require('cors');
dotenv.config();
var app = express();

mongoose.connect(process.env.MONGO_URL).then(console.log("connected to MONGO")).catch((err)=>{
  console.log("error");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8000/', true);
xhr.withCredentials = true;
xhr.send(null);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth',  authRouter);
app.use('/project', projectRouter);
app.use('/pticket', pticketRouter);
app.use('/comment', commentRouter);
app.use('/gtickets', gTicketsRouter);
app.use('/organization', organizationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
