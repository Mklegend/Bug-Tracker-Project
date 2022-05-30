const mongoose = require("mongoose");
const PticketsSchema = new mongoose.Schema(
    {
        projectId: {
            type: String,
            required: true,
            unique: true,
        },
        ticketTitle: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        ticketAuthor:{
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Ptickets",PticketsSchema);

