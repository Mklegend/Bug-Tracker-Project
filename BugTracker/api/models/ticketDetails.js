const mongoose = require("mongoose");
const employeeSchema = require("./employeeSchema");
const TicketDetailSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        author: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        priority: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        AssignedDevs: {
            type: [employeeSchema],
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("TicketDetail",TicketDetailSchema);

