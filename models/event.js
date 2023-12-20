const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    timefrom: {
        type: Date
    },
    timeto: {
        type: Date
    },
    status: {
        type: String,
        default: "pending"
    },
    logo: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("Request", eventSchema);