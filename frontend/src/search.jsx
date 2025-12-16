import Logo from "./assets/logo.png";
import Me from "./assets/me.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LogoutIcon from "@mui/icons-material/Logout";
import SendIcon from "@mui/icons-material/Send";
const Search = () => {
  const [posts, setPosts] = useState([]);
  const username = localStorage.getItem("username");
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");
  const [commentText, setCommentText] = useState("");
  const [showComments, setShowComments] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/uploaded")
      .then((res) => {
        console.log("Fetched Images:", res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleLike = async (index, id) => {
    try {
      const authToken = localStorage.getItem("authToken");

      const res = await axios.post(
        `http://localhost:3000/api/like/${id}`,
        {},
        { headers: { Authorization: `Bearer ${authToken}` } }
      );

      setPosts((prev) =>
        prev.map((p, i) =>
          i === index
            ? { ...p, likeCount: res.data.likeCount, isLiked: res.data.isLiked }
            : p
        )
      );
    } catch (err) {
      console.log("Error toggling like:", err);
    }
  };
  const handleSearch = async (value) => {
    setSearch(value);

    if (value.trim() === "") {
      setSearchResult([]);
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:3000/api/search?q=${value}`
      );
      setSearchResult(res.data);
    } catch (err) {
      console.log("Search error:", err);
    }
  };
  const addComment = async (postId) => {
    try {
      const token = localStorage.getItem("authToken");

      const res = await axios.post(
        `http://localhost:3000/api/comment/${postId}`,
        { text: commentText },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Update comments in the UI
      setPosts((prev) =>
        prev.map((p) => (p._id === postId ? { ...p, comments: res.data } : p))
      );

      setCommentText("");
      setShowComments(null);
    } catch (err) {
      console.log("Comment error:", err);
    }
  };

  const [suggestedUsers, setSuggestedUsers] = useState([
    {
      id: "6923c525c99183f485cebea4",
      username: "Priyal",
      following: false,
      avatar: "/ppl1.png",
    },
    {
      id: "6923c525c99183f485cebea5",
      username: "Hey",
      following: false,
      avatar: "/ppl2.png",
    },
    {
      id: "6923c525c99183f485cebea6",
      username: "Grave",
      following: false,
      avatar: "/ppl3.png",
    },
  ]);

  const toggleFollow = async (userId) => {
    try {
      const token = localStorage.getItem("authToken");

      // Make POST request to follow/unfollow endpoint
      const res = await axios.post(
        `http://localhost:3000/api/follow/${userId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Update the local state for suggested users
      setSuggestedUsers((prev) =>
        prev.map((user) =>
          user.id === userId ? { ...user, following: res.data.following } : user
        )
      );
    } catch (err) {
      console.log("Follow/Unfollow error:", err);
    }
  };

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="bg-black  flex flex-row ">
      <div className="  w-94  border-1 border-gray-800">
        <img src={Logo} className=" ml-7 h-[100px]"></img>
        <div className="flex flex-col gap-5 ">
          <div className="flex gap-6">
            <i className="ml-7 text-xl fa-solid fa-house text-white "></i>
            <span>
              <p className="text-white text-xl">Home</p>
            </span>
          </div>
          <div className="flex gap-6">
            <i className=" ml-7 text-xl  text-white fa-solid fa-magnifying-glass"></i>
            <span>
              <p className="text-white text-xl">Search</p>
            </span>
          </div>
          <div className="flex gap-6">
            <i className=" ml-7 text-xl  text-white fa-regular fa-compass"></i>
            <span>
              <p className="text-white text-xl">Explore</p>
            </span>
          </div>
          <div className="flex gap-6">
            <i className=" ml-7 text-xl  text-white fa-solid fa-video"></i>
            <span>
              <p className="text-white text-xl">Reels</p>
            </span>
          </div>
          <div className="flex gap-6">
            <i className=" ml-7 text-xl  text-white fa-regular fa-heart"></i>
            <span>
              <p className="text-white text-xl">Notification</p>
            </span>
          </div>
          <div className="flex gap-6">
            <i className=" ml-7 text-xl  text-white fa-solid fa-message"></i>
            <span>
              <p className="text-white text-xl">Messages</p>
            </span>
          </div>
          <div className="flex gap-6">
            <i className=" ml-7 text-xl  text-white fa-solid fa-plus"></i>
            <span>
              <Link to="/post">
                <p className="text-white text-xl">Post</p>
              </Link>
            </span>
          </div>
          <div className="flex gap-6">
            <i className=" ml-7 text-xl  text-white fa-solid fa-user"></i>
            <span>
              <p className="text-white text-xl">Profile</p>
            </span>
          </div>
          <div className=" mt-15 flex gap-6">
            <i className=" ml-7  text-2xl  text-white fa-solid fa-bars"></i>
            <span>
              <p className="text-white text-xl">More</p>
            </span>
          </div>
          <div className=" mt-1  flex gap-6">
            <LogoutIcon
              className=" ml-7  text-2xl  text-white cursor-pointer"
              onClick={logout}
            />
            <span>
              <p className="text-white text-xl">Logout</p>
            </span>
          </div>
        </div>
      </div>
      <div className="  ml-6 w-full h-screen  border-1 ">
        {/* SEARCH BAR */}
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search users..."
            className="  w-[700px] mt-2 px-4 py-2 rounded-xl bg-gray-900 text-white focus:outline-none"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        {searchResult.length > 0 && (
          <div className="bg-gray-900 mt-2  p-3 rounded-xl w-[700px] text-white mx-auto">
            {searchResult.map((user) => (
              <div
                key={user._id}
                className="flex justify-between items-center py-2 border-b border-gray-700"
              >
                {/* LEFT: Name + Email */}
                <div className="flex flex-col">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-gray-400 text-sm">{user.email}</p>
                </div>

                {/* RIGHT: Follow Button */}
                <button
                  onClick={() => toggleFollow(user._id)}
                  className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
                    user.following
                      ? "bg-gray-700 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {user.following ? "Following" : "Follow"}
                </button>
              </div>
            ))}
          </div>
        )}
    </div>
    </div>
  );
};

export default Search;
