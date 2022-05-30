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
    },
    { timestamps: true }
);

module.exports = mongoose.model("employee",employeeSchema);

