var express = require('express');
var router = express.Router();
var User = require("../models/User")
/* GET users listing. */
router.get('/users', function(req, res) {
  res.send('respond with a resource');
});

router.get('/searchuser', async(req, res) => {
  try{
      console.log(req.query);
      const userFind = await User.find({username: req.query.name});
      console.log(userFind);
      res.status(200).json(userFind);
  }catch(err){
      res.status(500).json(err);
      console.log(err);
  }
});

module.exports = router;
