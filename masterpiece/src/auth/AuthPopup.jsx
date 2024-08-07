// AuthForm.js
import React, { useState } from "react";

const AuthForm = ({ isOpen, onClose, onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => setIsSignup(!isSignup);

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق التحقق من تسجيل الدخول
    onLogin();
  };

  if (!isOpen) return null;
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative w-[350px] h-[500px] bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-[0_8px_32px_rgba(31,38,135,0.37)] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          ✕
        </button>

        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            isSignup ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center h-full"
          >
            <h2 className="text-white text-3xl font-bold mb-8">Sign up</h2>
            <input
              type="text"
              name="txt"
              placeholder="User name"
              required
              className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required
              className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              required
              className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
            />
            <input
              type="date"
              name="birthdate"
              placeholder="Birth date"
              required
              className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
            />
            <button
              type="submit"
              className="w-4/5 h-10 bg-[#193db0] text-white rounded-md hover:bg-[#1431a0] transition-all duration-200"
            >
              Sign up
            </button>
            <p
              className="mt-4 text-white cursor-pointer hover:underline"
              onClick={toggleForm}
            >
              Already have an account? Login
            </p>
          </form>
        </div>

        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            isSignup ? "translate-y-full" : "translate-y-0"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center h-full"
          >
            <h2 className="text-white text-3xl font-bold mb-8">Login</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required
              className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
            />
            <button
              type="submit"
              className="w-4/5 h-10 bg-[#193db0] text-white rounded-md hover:bg-[#1431a0] transition-all duration-200"
            >
              Login
            </button>
            <p
              className="mt-4 text-white cursor-pointer hover:underline"
              onClick={toggleForm}
            >
              Don't have an account? Sign up
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
