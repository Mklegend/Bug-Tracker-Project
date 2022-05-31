const mongoose = require("mongoose");
const employeeSchema = require("./employeeSchema");
const PcommentsSchema = new mongoose.Schema(
    {
        comment: {
            type: String,
            required: true,
        },
        // user: {
        //     type: employeeSchema, 
        //     required: true,
        // },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Pcomments",PcommentsSchema);

