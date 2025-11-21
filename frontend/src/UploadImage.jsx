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
  let navi = useNavigate();

  function handleFile(e) {
    const file = e.target.files[0];
    setImg(file);
    setPreview(URL.createObjectURL(file));
  }

  async function save() {

    // 🔒 NEW: Block upload if user is not logged in
    if (!localStorage.getItem("authToken")) {
      setMsg("❌ Please login to upload images!");
      return;
    }

    if (!img) {
      setMsg("⚠️ Please select an image first!");
      return;
    }

    try {
      const fileName = `${Date.now()}-${img.name}`;
      const bucket = "post_images"; // 🔥 CORRECT BUCKET NAME

      // First → Save link + username in your MongoDB backend
      await axios.post(
        "http://localhost:3000/api/upload",
        {
          imageUrl: `${supabaseUrl}/storage/v1/object/public/${bucket}/insta_images/${fileName}`,
          username: JSON.parse(localStorage.getItem("userData")).userName
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
        }
      );

      // Second → upload actual file to Supabase storage
      const { error } = await supabase.storage
        .from(bucket)
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

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">

      <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-6">
        Upload Image
      </h2>

      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm text-center">

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-auto rounded-xl mb-4 border border-gray-300"
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="w-full p-3 border-2 border-dashed border-gray-400 rounded-xl cursor-pointer bg-gray-50 mb-4 text-sm"
        />

        <button
          onClick={save}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-all duration-200"
        >
          Upload
        </button>

        {msg && (
          <p className="mt-3 text-sm font-medium text-gray-700">
            {msg}
          </p>
        )}
      </div>

    </div>
  );
};

export default UploadImage;

