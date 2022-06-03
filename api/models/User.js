const mongoose = require("mongoose");
var passportLocalMongoose = require('passport-local-mongoose')
var findOrCreate = require('mongoose-findorcreate')
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        googleId:String
        // profilePic: {
        //     type: String,
        //     default: "",
        // },
    },
    { timestamps: true }
);


UserSchema.plugin(passportLocalMongoose)
UserSchema.plugin(findOrCreate)

module.exports = mongoose.model("User", UserSchema);