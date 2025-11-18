import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const UploadImage = () => {
  const [img, setImg] = useState("");
  const [preview, setPreview] = useState("");
  const [msg, setMsg] = useState("");
let navi =useNavigate();
 
  function handleFile(e) {
    const file = e.target.files[0];
    setImg(file);
    setPreview(URL.createObjectURL(file));
  }

 async function save() {
  if (!img) {
    setMsg("⚠️ Please select an image first!");
    return;
  }

  try {
    const fileName = `${Date.now()}-${img.name}`;
     const bucketName = import.meta.env.VITE_SUPABASE_BUCKET;

    // 1️⃣ Send to backend with token (protected)
    await axios.post(
      "http://localhost:3000/api/upload",
      {
        imageUrl: `${supabaseUrl}/storage/v1/object/public/${bucketName}/insta_images/${fileName}`,
        username: JSON.parse(localStorage.getItem("userData")).userName
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    // 2️⃣ Upload actual file to Supabase
    const { error } = await supabase.storage
      .from("post_images")
      .upload(`insta_images/${fileName}`, img);

    if (error) {
      console.error("Upload error:", error);
      setMsg("❌ Upload failed!");
      return;
    }

    setMsg("✅ Image uploaded successfully!");
    navi("/home");

  } catch (err) {
    console.error(err);
    setMsg("❌ Something went wrong.");
  }
}

};

export default UploadImage;
