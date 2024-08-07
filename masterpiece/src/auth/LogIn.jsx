import React, { useState } from "react";

const LoginPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="fixed inset-0 flex items-end justify-center bg-opacity-50 bg-black">
      <div className="bg-white p-8 rounded-t-lg shadow-lg w-full max-w-md transform transition-transform duration-300 ease-in-out translate-y-0">
        <h2 className="text-2xl font-bold mb-6 text-[#193db0]">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 mb-4 rounded border"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 mb-6 rounded border"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-[#193db0] text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-[#193db0] hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
