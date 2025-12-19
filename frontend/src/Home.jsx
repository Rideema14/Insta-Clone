import Logo from "./assets/logo.png";
import Me from "./assets/me.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LogoutIcon from "@mui/icons-material/Logout";
import SendIcon from '@mui/icons-material/Send';
const Home = () => {
  const [posts, setPosts] = useState([]);
  const username = localStorage.getItem("username");
const [commentText, setCommentText] = useState("");
const [showComments, setShowComments] = useState(null); 



  useEffect(() => {
    axios
      .get("https://insta-clone-6ghn.onrender.com/api/uploaded")
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
        `https://insta-clone-6ghn.onrender.com/api/like/${id}`,
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

const addComment = async (postId) => {
  try {
    const token = localStorage.getItem("authToken");

    const res = await axios.post(
      `https://insta-clone-6ghn.onrender.com/api/comment/${postId}`,
      { text: commentText },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    // Update comments in the UI
    setPosts(prev =>
      prev.map(p =>
        p._id === postId ? { ...p, comments: res.data } : p
      )
    );

    setCommentText("");
    setShowComments(null);
    
  } catch (err) {
    console.log("Comment error:", err);
  }
};

 const [suggestedUsers, setSuggestedUsers] = useState([
  { id: "6923c525c99183f485cebea4", username: "Priyal", following: false, avatar: "/ppl1.png" },
  { id: "6923c525c99183f485cebea5", username: "Hey", following: false, avatar: "/ppl2.png" },
  { id: "6923c525c99183f485cebea6", username: "Grave", following: false, avatar: "/ppl3.png" },
]);


  const toggleFollow = async (userId) => {
  try {
    const token = localStorage.getItem("authToken");

    // Make POST request to follow/unfollow endpoint
    const res = await axios.post(
      `https://insta-clone-6ghn.onrender.com/api/follow/${userId}`,
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
               <Link to="/search">
                <p className="text-white text-xl">Search</p>
              </Link>
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
              <Link to="/profile">
                <p className="text-white text-xl">Profile</p>
              </Link>
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
      <div className=" w-[650px] border-1 ">
        <div className=" m-3 h-[100px] flex  flex-row  gap-3 overflow-x-scroll scrollbar-hide whitespace-nowrap ">
          <div className=" bg-[url('/ppl1.png')] bg-cover border-orange-600  border-3 h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>

          <div className="  bg-[url('/ppl2.png')] bg-cover  border-orange-600  border-3  h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>
          <div className="   bg-[url('/ppl4.png')] bg-cover  border-green-600  border-3  h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>
          <div className="  bg-[url('/ppl3.png')] bg-cover border-orange-600  border-3 h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>
          <div className="   bg-[url('/ppl5.png')] bg-cover  border-orange-600  border-3  h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>
          <div className="  bg-[url('/ppl6.png')] bg-cover  border-orange-600  border-3  h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>
          <div className=" bg-[url('/ppl7.png')] bg-cover  border-orange-600  border-3  h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>
          <div className=" bg-[url('/ppl8.png')] bg-cover  border-orange-600  border-3  h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>
          <div className="  bg-[url('/unknown.png')]  bg-cover  border-orange-600  border-3 h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>
          <div className=" bg-[url('/ppl9.png')] bg-cover border-orange-600  border-3 h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>
          <div className=" bg-[url('/ppl10.png')] bg-cover  border-orange-600  border-3  h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>
          <div className=" bg-[url('/ppl11.png')] bg-cover  border-gray-400  border-3 h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>
          <div className="  bg-[url('/ppl3.png')] bg-cover   border-gray-400  border-3 h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>
          <div className=" bg-[url('/ppl2.png')] bg-cover   border-gray-400  border-3 h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>
          <div className="  bg-[url('/ppl1.png')] bg-cover    border-gray-400  border-3 h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>
          <div className=" bg-[url('/ppl6.png')] bg-cover    border-gray-400  border-3 h-[60px] w-[60px] rounded-[50%] flex-shrink-0">
            <p className="text-white mt-14 flex justify-center">User</p>
          </div>
        </div>
        <div className="ml-[140px] w-[480px] h-[520px] flex flex-col gap-18 overflow-y-scroll scrollbar-hide whitespace-nowrap">
          {posts.map((item, index) => (
            <div
              key={index}
              className="relative w-[400px] h-[520px] flex-shrink-0"
            >
              {/* USERNAME DISPLAY */}

              <div className="text-white text-md font-bold absolute top-0  bg-[url('/unknown.png')]  bg-cover  h-[30px] w-[30px] rounded-[50%] ">
                <p className="ml-9 top-3">{username || "Unknown"}</p>{" "}
              </div>

              {/* <img
                className="absolute w-[400px] h-[520px] rounded-[40px]"
                src={post}
                alt="Post"
              /> */}

              <img
                className="mt-11 absolute w-[400px] h-[350px]"
                src={item?.imageUrl}
                alt="Post"
              />
              <i
                onClick={() => toggleLike(index, item._id)}
                className={`absolute bottom-22.5 left-3.5 text-2xl fa-regular fa-heart cursor-pointer transition-all duration-300" ${
                  item.isLiked ? "fa-solid fa-heart text-red-600" : "text-white"
                }`}
              ></i>
              <span className=" absolute bottom-17 left-3.5 text-l text-white ">
                {item.likeCount ?? 0} like
              </span>
            <i className="absolute text-2xl bottom-22 left-13 text-white fa-regular fa-comment"
  onClick={() => setShowComments(item._id)}
></i>
<div className="  mt-115 absolute bg-[#000000] w-full rounded-b-2xl p-3 mt-4">
  <div className="space-y-2 max-h-10 overflow-y-scroll scrollbar-hide">
    {item.comments?.length === 0 && (
      <p className="text-gray-500 text-sm">No comments yet.</p>
    )}

    {item.comments?.map((c, index) => (
      <div key={index} className="flex gap-3 items-start ">
        <div className="w-8 h-8 bg-gray-400 rounded-full flex-shrink-0" />
        <div>
          <p className="text-white text-sm">
            <span className="font-semibold">user </span>{c.text}
          </p>
          <p className="text-xs text-gray-500">
            {new Date(c.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Comment Input */}
  <div className="mt-2 flex items-center gap-2">
    <input
      type="text"
      placeholder="Add a comment..."
      value={commentText}
      onChange={(e) => setCommentText(e.target.value)}
      className="flex-1 p-2 bg-[#303030] text-white rounded-full outline-none"
    />
    <button
      onClick={() => addComment(item._id)}
      className="text-blue-400 font-semibold"
    >
      Post
    </button>
  </div>

</div>


            <SendIcon className="absolute bottom-22.5 left-22.5 text-3xl text-white 
             cursor-pointer transition-all duration-300 
             rotate-[-40deg] hover:scale-110"
/>

              <i className=" absolute bottom-22.5 right-3.5 text-2xl fa-regular fa-bookmark text-white cursor-pointer transition-all duration-300"></i>
            </div>
          ))}
        </div>
      </div>
       <div className="flex flex-col p-4 w-[300px] bg-black text-white">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img src={Me} alt="Profile" className="h-12 w-12 rounded-full" />
          <div className="flex flex-col">
            <p className="font-bold">Rideema.singh</p>
            <p className="text-gray-400 text-sm">Ri🍁</p>
          </div>
        </div>
        <p className="text-blue-500 cursor-pointer">Switch</p>
      </div>

      {/* Suggested Users */}
      <p className="text-gray-400 text-sm mb-2">Suggested for you</p>
      <div className="flex flex-col gap-3">
        
        {suggestedUsers.map((user) => (
          <div key={user.id} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.username}
                className="h-12 w-12 rounded-full"
              />
              <p className="text-white">{user.username}</p>
            </div>
            <button
              onClick={() => toggleFollow(user.id)}
              className={` ml-4 px-3 py-1 rounded text-sm ${
                user.following
                  ? "bg-gray-600 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {user.following ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
