const express = require("express");
const Upload = require("../models/uploadModel");
const verify = require("../middleware/verifyToken"); // token middleware

const like = express.Router();

like.post("/like/:id", verify, async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.id; // picked from token

    const post = await Upload.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // check if user already liked
    if (post.likedBy.includes(userId)) {
      return res.json({
        success: false,
        message: "You already liked this post",
        likeCount: post.likeCount
      });
    }

    // user is liking for the first time
    post.likeCount += 1;
    post.likedBy.push(userId);
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
