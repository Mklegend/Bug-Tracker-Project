const mongoose = require("mongoose");
const organizationSchema = new mongoose.Schema(
    {
        employees: {
            type: employeeSchema, //TODO
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("organization",organizationSchema);

