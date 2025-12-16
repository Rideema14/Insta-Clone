const express = require("express");
const User = require("../models/userModel");

const router = express.Router();

router.get("/search", async (req, res) => {
    console.log("Search query:", req.query.q);
  try {
    const query = req.query.q;

    if (!query) {
      return res.json([]);
    }

    const users = await User.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { email: { $regex: query, $options: "i" } },
      ],
    }).limit(10);

    return res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
