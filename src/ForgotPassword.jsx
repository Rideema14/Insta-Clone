import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    if (!email) return setMsg("⚠️ Enter your email!");

    try {
      const res = await fetch("/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const text = await res.text();
      if (res.ok) {
        setMsg("✅ Password reset link sent to email!");
      } else {
        setMsg(`❌ ${text}`);
      }
    } catch (err) {
      setMsg(`❌ ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">
          Forgot Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white rounded-lg mt-4 py-2 hover:bg-blue-700 transition"
        >
          Send Reset Link
        </button>

        {msg && <p className="mt-3 text-center text-sm text-red-600">{msg}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
