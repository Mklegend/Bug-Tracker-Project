const mongoose = require("mongoose");
const GticketsSchema = new mongoose.Schema(
    {
        projectName: {
            type: String,
            required: true,
            unique: true,
        },
        ticket: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        daysOutstanding:{
            type: Number,
            required: true,
        },
        priority:{
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Gtickets",GticketsSchema);

