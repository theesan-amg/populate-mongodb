const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstname: String,
    surname: String,
    address: {
        type: mongoose.Types.ObjectId,
        ref: "address"
    }
});

module.exports = mongoose.model("students" , studentSchema)