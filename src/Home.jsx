import Logo from "./assets/logo.png";
import Me from "./assets/me.jpg";
import post from "./assets/post.png";
import { Link } from "react-router-dom";
const Home = () => {
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
            <i className=" ml-7  text-2xl  text-white fa-solid fa-shapes"></i>
            <span>
              <p className="text-white text-xl">Also from meta</p>
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
        <div className=" ml-[140px] w-[480px] h-[520px] flex  flex-col  gap-3 overflow-y-scroll scrollbar-hide whitespace-nowrap "> 
          <div className="relative w-[400px] h-[520px]  flex-shrink-0"> <img className=" absolute w-[400px] h-[520px] rounded-[40px] " src={post}></img>
         <img className=" mt-11 absolute w-[400px] h-[350px]" src="/profile1.png"></img></div>
          <div className="relative w-[400px] h-[520px] flex-shrink-0"> <img className=" absolute w-[400px] h-[520px] rounded-[40px]  " src={post}></img>
         <img className=" mt-11 absolute w-[400px] h-[350px]" src="/profile2.png"></img></div>
         <div className="relative w-[400px] h-[520px] flex-shrink-0"> <img className=" absolute w-[400px] h-[520px] rounded-[40px]  " src={post}></img>
         <img className=" mt-11 absolute w-[400px] h-[350px]" src="/profile3.png"></img></div>
        
        </div>
      </div>
      <div className=" w-96 ">
        <div className="flex gap-1">
          <img
            src={Me}
            className=" m-4 h-[50px] w-[50px] rounded-full flex-shrink-0 object-cover"
          />
          <div className="flex flex-col">
            <p className="mt-5 text-white">Rideema.singh</p>
            <p className=" text-white">Ri🍁</p>
          </div>
          <p className="mt-5 ml-4 text-blue-500">switch</p>
        </div>
         <div className=" ml-[20px] text-gray-300 text-sm">Suggested for you &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; See All</div>
        <div className=" ml-[10px] mt-[10px] flex flex-col gap-1.5">
          <div className="  bg-[url('/ppl1.png')] bg-cover  h-[55px] w-[55px] rounded-[50%] flex-shrink-0 flex flex-row"><p className=" ml-[80px] mt-4 text-white">priyal.patel__30</p><p className=" text-sm ml-[70px] mt-4 text-blue-500">Follow</p> </div>
          <div className="  bg-[url('/ppl2.png')] bg-cover h-[55px] w-[55px] rounded-[50%] flex-shrink-0 flex flex-row"><p className="ml-[80px] mt-4 text-white">itsme_hey</p><p className=" text-sm ml-[108px] mt-4 text-blue-500">Follow</p></div>
          <div className="   bg-[url('/ppl3.png')] bg-cover  bg-center h-[55px] w-[55px] rounded-[50%] flex-shrink-0 flex flex-row"><p className="ml-[80px] mt-4 text-white">ridzgraveyard.10</p><p className=" text-sm ml-[60px] mt-4 text-blue-500">Follow</p></div>
          <div className="  bg-[url('/ppl4.png')] bg-cover h-[55px] w-[55px] rounded-[50%] flex-shrink-0 flex flex-row"><p className="ml-[80px] mt-4 text-white">itsmeaanyarai</p><p className=" text-sm ml-[80px] mt-4 text-blue-500">Follow</p></div>
          <div className="  bg-[url('/ppl5.png')] bg-cover h-[55px] w-[55px] rounded-[50%] flex-shrink-0 flex flex-row"><p className="ml-[80px] mt-4 text-white">101_not_found</p><p className=" text-sm ml-[75px] mt-4 text-blue-500">Follow</p></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
