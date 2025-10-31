import { useState } from "react";
import axios from "axios";

const Post = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [preview, setPreview] = useState(null);
  const [msg, setMsg] = useState("");

  // Preview Image Handler
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Upload Handler
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!image) {
      setMsg("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("photo", image);
    formData.append("caption", caption);

    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.post(
        "http://localhost:4000/upload-post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMsg("✅ Post uploaded successfully!");
      setCaption("");
      setImage(null);
      setPreview(null);
      console.log(res.data);

    } catch (error) {
      setMsg("❌ Error uploading post");
      console.log(error);
    }
  };

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="bg-gray-900 w-[350px] rounded-xl p-6 shadow-xl text-white">

        <h2 className="text-center text-xl font-semibold mb-4">
          Upload New Post
        </h2>

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-full h-48 object-cover rounded-lg mb-3 border border-gray-700"
          />
        )}

        <form onSubmit={handleUpload} className="flex flex-col gap-3">

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="bg-gray-800 border border-gray-700 text-sm p-2 rounded cursor-pointer"
          />

          <textarea
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="bg-gray-800 border border-gray-700 text-sm p-2 rounded focus:outline-none"
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 py-2 rounded-lg font-semibold"
          >
            Post
          </button>
        </form>

        {msg && <p className="text-center text-sm mt-3">{msg}</p>}
      </div>
    </div>
  );
};

export default Post;
