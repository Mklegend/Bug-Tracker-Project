const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        designation: {
            type: String, 
            required: true,
        },
        picture: {
            type: String, 
            required: true,
            unique: true,
        },
        assigned:{
            type:Boolean,
            required: true
        }
        // TODO
        // If assigned is false only then show the employee in the To be Assigned Devs List
    },
    { timestamps: true }
);

module.exports = mongoose.model("employee",employeeSchema);

