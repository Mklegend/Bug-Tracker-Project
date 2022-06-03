const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const Employee = require('../models/employeeSchema');
const passport = require("passport");

//REGISTER
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        

        const newEmployee = new Employee({
            name: req.body.name,
            designation: 'Employee',
            assigned: false
        }); 

        const employee = await newEmployee.save();
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json("Wrong credentials!");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong credentials!");
        // const { password, ...others } = user._doc;
        // res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/google/',
    passport.authenticate('google',{scope:['profile']})
)

router.get('/google/dashboard',passport.authenticate('google',{failureRedirect:'login'}),(req,res)=>{
    console.log('But it came here !')
    res.redirect('http://localhost:5000/auth/dashboard')
})

router.get('/dashboard',(req,res)=>{
    if(req.isAuthenticated){
        console.log('Came here !')
        res.redirect('http://localhost:3000/dashboard')
    }else{
        res.redirect('http://localhost:3000/signup')
    }
})

module.exports = router;