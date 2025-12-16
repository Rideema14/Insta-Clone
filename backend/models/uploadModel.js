const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  likeCount: {
    type: Number,
    default: 0
  },
   likedBy: {
    type: [String],
    default: []
  },
   username: { 
    type: String, 
    required: false },
    comments: [
  {
    username: String,
    text: String,
    createdAt: { type: Date, default: Date.now }
  }
]

});

module.exports = mongoose.model("Upload", uploadSchema);

