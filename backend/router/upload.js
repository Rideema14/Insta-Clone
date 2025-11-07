const express = require("express");
const Upload = require("../models/uploadModel");

const upload = express.Router();

upload.post("/upload", async (req, res) => {
  try {
    const {imageUrl} = req.body;
    if (!imageUrl) {
      return res.status(400).json({ message: "Image URL is required" });
    }

    // const saved = await Upload.create({imageUrl});
// new Upload({ imageUrl });
    const uploadInstance = new Upload({ imageUrl });
    const saved = await uploadInstance.save();
    res.json({
      success: true,
      message: " Image URL stored successfully",
      data: saved
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

upload.get("/uploaded", async(req, res)=>{
  try {
      const images = await Upload.find();
      return res.json(images);  
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
  }
});


module.exports = upload;   

