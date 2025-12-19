import { useEffect, useState } from "react";
import axios from "axios";
import me from "./assets/me.jpg";
const Profile = () => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("authToken");
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState({
    name: "Rideema Singh",
    bio: "Ri 🍁 | Developer | Dreamer",
    profilePic: "/me.jpg",
    followers: 128,
    following: 210,
  });

  useEffect(() => {
  axios
    .get("https://insta-clone-6ghn.onrender.com/api/uploaded")
    .then((res) => {
      const allPosts = res.data;

      const myPosts = allPosts.filter(
        (post) => post.username === username
      );

      setPosts(myPosts);
    })
    .catch((err) => console.log(err));
}, []);


  return (
    <div className="bg-black w-full min-h-screen text-white ">
      

      {/* ================= PROFILE HEADER ================= */}
      <div className="flex gap-10 border-b border-gray-800 pb-10">

        {/* Profile Picture */}
        <div className=" ml-5 mt-10 flex justify-center w-[200px]">
          <img
            src={me}
            alt="profile"
            className="h-40 w-40 rounded-full object-cover border border-gray-700"
          />
        </div>

        {/* Profile Info */}
        <div className="mt-12 flex flex-col gap-4">

          

          {/* Stats */}
          <div className="flex gap-10 text-sm">
            <span>
              <b>{posts.length}</b> posts
            </span>
            <span>
              <b>{profile.followers}</b> followers
            </span>
            <span>
              <b>{profile.following}</b> following
            </span>
          </div>

          {/* Bio */}
          <div className="text-sm">
            <p className="font-semibold">{profile.name}</p>
            <p className="text-gray-300">{profile.bio}</p>
          </div>
          {/* Username & Buttons */}
          <div className=" -ml-5 flex items-center gap-4">
            <h2 className="text-2xl font-light">{username}</h2>

            <button className="px-4 py-1.5 bg-gray-800 rounded-lg text-sm hover:bg-gray-700">
              Edit profile
            </button>

            <button className="px-4 py-1.5 bg-gray-800 rounded-lg text-sm hover:bg-gray-700">
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* ================= STORY HIGHLIGHTS ================= */}
      <div className="ml-10 flex gap-8 mt-8">
        {["Travel", "Code", "Life", "Mood"].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full border border-gray-600 hover:border-white transition" />
            <p className="text-xs mt-2">{item}</p>
          </div>
        ))}
      </div>

      {/* ================= POSTS GRID ================= */}
      <div className="grid grid-cols-3 gap-1 mt-12">

        {posts.map((post) => (
          <div key={post._id} className="relative group cursor-pointer">

            {/* Image */}
            <img
              src={post.imageUrl}
              alt="post"
              className="h-[280px] w-full object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-8 text-lg font-semibold">
              <span>❤️ {post.likeCount || 0}</span>
              <span>💬 {post.comments?.length || 0}</span>
            </div>
          </div>
        ))}

        {/* Empty state */}
        {posts.length === 0 && (
          <p className="text-gray-400 mt-20 col-span-3 text-center">
            No posts yet. Upload your first photo ✨
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;

