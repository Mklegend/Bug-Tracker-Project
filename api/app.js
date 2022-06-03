var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
// const mongoose = require("mongoose");
var projectRouter = require('./routes/project');
var pticketRouter = require('./routes/pticket');
var commentRouter =  require('./routes/comment');
var gTicketsRouter = require('./routes/gtickets');
var organizationRouter = require('./routes/organization');
const cors = require('cors');



// Google Stuff 
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var findOrCreate = require('mongoose-findorcreate')
var passport = require('passport')
var session = require('express-session')
// var passportLocalMongoose = require('passport-local-mongoose')
var mongoose = require('mongoose');
const User = require('./models/User');

require('dotenv').config()



var app = express();

app.use(cors());

app.use(session({
  secret:'My super secret',
  resave:false,
  saveUninitialized:false
}))


// Start using passport for authentiction
app.use(passport.initialize())
app.use(passport.session())


passport.use(User.createStrategy())


passport.serializeUser((user,done)=>{
  done(null,user.id)
})

passport.deserializeUser((user,done)=>{
  User.findById(user.id,(err,res)=>{
    done(err,user)
  })
})




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

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth',  authRouter);
app.use('/project', projectRouter);
app.use('/pticket', pticketRouter);
app.use('/comment', commentRouter);
app.use('/gtickets', gTicketsRouter);
app.use('/organization', organizationRouter);


passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/dashboard",
  userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo"
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));


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