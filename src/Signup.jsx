import React, { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    passWord: "",
    role: "user",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    if (!form.userName || !form.email || !form.passWord) {
      setMsg("⚠️ Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const text = await res.text();

      if (text.includes("created")) {
        setMsg("✅ Account created successfully!");
      } else {
        setMsg(`❌ ${text}`);
      }
    } catch (err) {
      setMsg(`❌ ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm">

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Create Account
        </h2>

        <input
          type="text"
          name="userName"
          placeholder="Full Name"
          className="w-full mb-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={handleChange}
        />

        <input
          type="password"
          name="passWord"
          placeholder="Password"
          className="w-full mb-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={handleChange}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </button>

        {msg && <p className="mt-3 text-center text-red-600 font-medium">{msg}</p>}
      </div>
    </div>
  );
};

export default Signup;

