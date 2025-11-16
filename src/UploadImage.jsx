import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const supabaseUrl = "https://pytlprimxjyljibgfoqd.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5dGxwcmlteGp5bGppYmdmb3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MTk1MzUsImV4cCI6MjA3NzQ5NTUzNX0.izrf1J2v8KJ3xFMrU1lRnlpTcPfRIERWsiWR7mHEKRY";
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
    console.log("Uploading:", fileName);

    // Get username from localStorage
    const username = localStorage.getItem("username") || "Unknown";

    // First tell backend the URL + username
    axios.post("http://localhost:3000/api/upload", {
      imageUrl: `https://pytlprimxjyljibgfoqd.supabase.co/storage/v1/object/public/post_images/insta_images/${fileName}`,
      username: JSON.parse(localStorage.getItem("userData")).userName
    }).then((res)=>{
      console.log(res.data);
    })

    // Upload to Supabase
    const { error } = await supabase.storage
      .from("post_images") 
      .upload(`insta_images/${fileName}`, img);

    if (error) {
      console.error("Upload error:", error);
      setMsg("❌ Upload failed!");
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from("post_images")
      .getPublicUrl(`insta_images/${fileName}`);

    const imageUrl = publicUrlData.publicUrl;
    console.log("✅ Uploaded Image URL:", imageUrl);

    setMsg("✅ Image uploaded successfully!");
    navi("/home");
    setImg("");
    setPreview("");
  } catch (err) {
    console.error("Error:", err);
    setMsg("❌ Something went wrong.");
  }
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 rounded-xl shadow-2xl w-[350px] p-6">
        <h2 className="text-center text-xl font-semibold mb-4">
          Upload Image
        </h2>

        {/* Preview */}
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-full h-48 object-cover rounded-lg border border-gray-700 mb-4"
          />
        )}

        {/* File input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="w-full bg-gray-800 text-sm text-gray-300 border border-gray-700 rounded-lg p-2 cursor-pointer mb-3 focus:outline-none"
        />

    
        <button
          onClick={save}
          className="w-full bg-indigo-600 hover:bg-indigo-500 transition-colors py-2 rounded-lg font-semibold mb-3"
        >
          Upload
        </button>

        
        {msg && <p className="text-center text-sm mt-2">{msg}</p>}
      </div>
    </div>
  );
};

export default UploadImage;
