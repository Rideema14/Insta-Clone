const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({

  imageUrl: { type: String, required: true }
});

module.exports = mongoose.model("Upload", uploadSchema);

