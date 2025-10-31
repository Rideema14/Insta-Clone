import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleResetPassword = async () => {
    if (!newPassword) {
      setMsg("⚠️ Please enter a new password!");
      return;
    }

    try {
      const res = await fetch(`/reset-password/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword }),
      });

      const text = await res.text();
      if (res.ok) {
        setMsg("✅ Password reset successful!");
      } else {
        setMsg(`❌ ${text}`);
      }
    } catch (error) {
      setMsg(`❌ ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Reset Password
        </h2>

        <input
          type="password"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button
          onClick={handleResetPassword}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
        >
          Reset Password
        </button>

        {msg && (
          <p className="mt-3 text-center font-medium text-red-600">
            {msg}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
