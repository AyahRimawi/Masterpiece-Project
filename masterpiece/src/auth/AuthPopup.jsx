// // AuthForm.js
// import React, { useState } from "react";

// const AuthForm = ({ isOpen, onClose, onLogin }) => {
//   const [isSignup, setIsSignup] = useState(false);

//   const toggleForm = () => setIsSignup(!isSignup);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // هنا يمكنك إضافة منطق التحقق من تسجيل الدخول
//     onLogin();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="relative w-[350px] h-[500px] bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-[0_8px_32px_rgba(31,38,135,0.37)] overflow-hidden">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white hover:text-gray-300"
//         >
//           ✕
//         </button>

//         <div
//           className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
//             isSignup ? "translate-y-0" : "-translate-y-full"
//           }`}
//         >
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col items-center justify-center h-full"
//           >
//             <h2 className="text-white text-3xl font-bold mb-8">Sign up</h2>
//             <input
//               type="text"
//               name="txt"
//               placeholder="User name"
//               required
//               className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               required
//               className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
//             />
//             <input
//               type="password"
//               name="pswd"
//               placeholder="Password"
//               required
//               className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone number"
//               required
//               className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
//             />
//             <input
//               type="date"
//               name="birthdate"
//               placeholder="Birth date"
//               required
//               className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
//             />
//             <button
//               type="submit"
//               className="w-4/5 h-10 bg-[#193db0] text-white rounded-md hover:bg-[#1431a0] transition-all duration-200"
//             >
//               Sign up
//             </button>
//             <p
//               className="mt-4 text-white cursor-pointer hover:underline"
//               onClick={toggleForm}
//             >
//               Already have an account? Login
//             </p>
//           </form>
//         </div>

//         <div
//           className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
//             isSignup ? "translate-y-full" : "translate-y-0"
//           }`}
//         >
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col items-center justify-center h-full"
//           >
//             <h2 className="text-white text-3xl font-bold mb-8">Login</h2>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               required
//               className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
//             />
//             <input
//               type="password"
//               name="pswd"
//               placeholder="Password"
//               required
//               className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
//             />
//             <button
//               type="submit"
//               className="w-4/5 h-10 bg-[#193db0] text-white rounded-md hover:bg-[#1431a0] transition-all duration-200"
//             >
//               Login
//             </button>
//             <p
//               className="mt-4 text-white cursor-pointer hover:underline"
//               onClick={toggleForm}
//             >
//               Don't have an account? Sign up
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;

import React, { useState } from "react";
import axios from "axios";

// const API_URL = "http://localhost:8080"; // Make sure this matches your backend URL

axios.defaults.withCredentials = true;

const AuthForm = ({ isOpen, onClose, onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: {
      governorate: "",
      details: "",
    },
    phone: "",
  });

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setFormData({
      name: "",
      email: "",
      password: "",
      address: {
        governorate: "",
        details: "",
      },
      phone: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "governorate" || name === "details") {
      setFormData((prevState) => ({
        ...prevState,
        address: {
          ...prevState.address,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isSignup
        ? `http://localhost:8080/api/users/register`
        : `http://localhost:8080/api/users/login`;
      const response = await axios.post(endpoint, formData);
      console.log(response.data);
      onLogin();
      onClose();
    } catch (error) {
      console.error("Error:", error.response?.data?.message || error.message);
    }
  };

  const handleClose = (e) => {
    e.preventDefault(); // Prevent any default action
    e.stopPropagation(); // Stop the event from propagating
    onClose(); // Call the onClose function passed as a prop
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative w-[350px] h-[520px] bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-[0_8px_32px_rgba(31,38,135,0.37)] overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
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
            <h2 className="text-white text-3xl font-bold mb-8 mt-2">
              Sign up
            </h2>
            <input
              type="text"
              name="name"
              placeholder="User name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
            />
            <select
              name="governorate"
              required
              value={formData.address.governorate}
              onChange={handleChange}
              className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white focus:text-gray-600"
            >
              <option value="">Select Governorate</option>
              <option value="Amman">Amman</option>
              <option value="Zarqa">Zarqa</option>
            </select>
            <input
              type="text"
              name="details"
              placeholder="Address Details"
              required
              value={formData.address.details}
              onChange={handleChange}
              className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
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
