const express = require("express");
const Upload = require("../models/uploadModel");

const like = express.Router();
like.post("/like/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    console.log("LIKING POST ID:", postId);
    const post = await Upload.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.likeCount += 1;  // increase by 1
    await post.save();

    return res.json({
      success: true,
      message: "Like added",
      likeCount: post.likeCount
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = like;