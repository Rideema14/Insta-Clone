const express = require("express");
const Post = require("../models/uploadModel"); // your image post model
const router = express.Router();

// ADD COMMENT
router.post("/comment/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    const { text, user } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Comment text is required" });
    }

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    const newComment = {
      user: user,
      text: text,
      createdAt: new Date()
    };

    post.comments.push(newComment);
    await post.save();

    res.json(post.comments);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
