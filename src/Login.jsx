import React from 'react'
import logo from "./assets/logo.png";
import img1 from"./assets/img1.png";
import img2 from"./assets/img2.png";
import img3 from"./assets/img3.png";
import { Link} from "react-router-dom";
const Login = () => {
  return (
  <div className="bg-black h-screen flex justify-center items-center">
      {/* <div className="h-[470px] w-60 mr-[400px] mb-[45px] bg-amber-50 rounded-[35px] fixed">
        <img src={insta2} className="h-[470px] w-60 rounded-[35px] "></img>
      </div>
      <div className="h-[480px] w-60 mr-[200px] rounded-[25px]  absolute">
        <img
          src={insta}
          className="h-[480px] w-60 rounded-[30px] mr-[200px]"
        ></img>
      </div> */}
      <div className="absolute h-[480px] w-60 mr-[480px] " >
        <img src={img2} className=" -rotate-7 rounded-[20px] h-[300px] w-40 mt-[50px]"></img></div>
      <div className=" absolute h-[480px] w-60">
        <img src={img3} className=" rotate-6 rounded-[20px] h-[300px] w-40 mt-[50px]"></img></div>
      <div className=" absolute h-[480px]  mr-[300px] w-60">
        <img src={img1} className="rounded-[20px] h-[400px] w-53"></img></div> 
      
      <div className=" h-[480px] w-[300px] ml-[490px] relative flex  justify-center">
     
          <img src={logo} className="h-30 ml-4"></img>
          <div className="absolute h-[480px] w-[300px] mt-25 ml-[90px]" >
            <form className="flex  flex-col gap-1 justify-center">
      <input type="text"  placeholder="phone number,e-mail,username"
      className=" rounded-[5px] border-1 border-gray-600 text-white bg-gray-900 w-60 px-2 py-0.5 placeholder:text-sm "></input>
      <input type="password" placeholder="password"
      className=" rounded-[5px] border-1 border-gray-600 text-white bg-gray-900 w-60 px-2 py-0.5 placeholder:text-sm "></input>
     <button type="submit "  className="border-1 border-indigo-600 bg-indigo-700 hover:bg-indigo-600 text-white w-60 mt-[10px] px-2 py-0.5 rounded-[5px]">Login</button> 
     </form>
     <h1 className="text-blue-600 mt-4 mr-[64px] flex justify-center">Login with Facebook</h1>
       <p className="text-blue-600 text-sm mt-4 mr-[64px] flex gap-2 justify-center">Don't have an account? <p className="text-white">< Link to="/signup">Sign up</Link></p></p>
        </div>
      </div>
    </div>
 
  )
}

export default Login