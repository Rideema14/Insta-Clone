import logo from "./assets/logo.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();
  let [formData, setFormData] = useState({
    email: "",
    passWord: "",
  });

  let [errorMsg, setErrorMsg] = useState("");

  function handleForm(e) {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

 async function handleSubmit(e) {
  e.preventDefault();

  // ❗ FRONTEND VALIDATION
  if (!formData.email.trim() || !formData.passWord.trim()) {
    setErrorMsg("Email and password required");
    return;
  }

  try {
    const res = await axios.post("http://localhost:3000/api/login", formData);

    // backend returns => { token, data }
    const token = res.data.token;

    // ❗ Save token correctly
    localStorage.setItem("authToken", token);
    localStorage.setItem("userData", JSON.stringify(res.data.data));

    setErrorMsg("");
    navigate("/home");

  } catch (err) {
    setErrorMsg("Invalid email or password");
  }
}


  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="absolute h-[480px] w-60 mr-[480px] mt-5">
        <img src={img2} className="-rotate-7 rounded-[20px] h-[290px] w-40 mt-[40px]" />
      </div>

      <div className="absolute h-[480px] w-60 mt-5">
        <img src={img3} className="rotate-6 rounded-[20px] h-[290px] w-40 mt-[40px]" />
      </div>

      <div className="absolute h-[480px] mr-[300px] w-60 mt-6">
        <img src={img1} className="rounded-[20px] h-[350px] w-53" />
      </div>

      <div className="h-[480px] w-[300px] ml-[490px] relative flex justify-center">
        <img src={logo} className="h-30 ml-4" />
        <div className="absolute h-[480px] w-[300px] mt-25 ml-[90px]">

          <form className="flex flex-col gap-1 justify-center" onSubmit={handleSubmit}>
            <input
              name="email"
              value={formData.email}
              onChange={handleForm}
              type="email"
              placeholder="email"
              className="rounded-[5px] border border-gray-600 text-white bg-gray-900 w-55 px-2 py-1 placeholder:text-sm"
            />

            <input
              name="passWord"
              value={formData.passWord}
              onChange={handleForm}
              type="password"
              placeholder="password"
              className="rounded-[5px] border border-gray-600 text-white bg-gray-900 w-55 px-2 py-1 placeholder:text-sm"
            />

            {errorMsg && (
              <p className="text-red-500 text-sm text-center">{errorMsg}</p>
            )}

            <button
              type="submit"
              className="bg-indigo-700 hover:bg-indigo-600 text-white w-55 mt-3 px-2 py-1 rounded"
            >
              Login
            </button>
          </form>

          <div className="flex justify-center mt-2">
            <Link to="/forgot-password" className="text-blue-500 text-sm hover:underline mr-16">
              Forgot password?
            </Link>
          </div>

          <h1 className="text-blue-600 mt-4 mr-[64px] flex justify-center">
            Login with Facebook
          </h1>

          <p className="text-blue-600 text-sm mt-4 mr-[64px] flex gap-2 justify-center">
            Don't have an account?
            <span className="text-white">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
