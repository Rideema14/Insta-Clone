import React from 'react'

const Signup = () => {
  return (
    <div><form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Username"
            className="w-60 px-3 py-2 border rounded bg-amber-50"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-60 px-3 py-2 border rounded bg-amber-50"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-60 px-3 py-2 border rounded bg-amber-50"
          />

          <button className="w-60 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Sign Up
          </button>
        </form></div>
  )
}

export default Signup