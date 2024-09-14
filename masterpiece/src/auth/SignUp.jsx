// import React, { useState } from "react";

// const SignupPopup = ({ onLoginClick }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle signup logic here
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black">
//       <div className="bg-transparent p-8 rounded-t-lg shadow-lg w-full max-w-md relative">
//         <h2 className="text-2xl font-bold mb-6 text-white">Sign up</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             className="w-full p-2 mb-4 rounded"
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full p-2 mb-4 rounded"
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full p-2 mb-6 rounded"
//             onChange={handleChange}
//           />
//           <button
//             type="submit"
//             className="w-full bg-[#193db0] text-white p-2 rounded hover:bg-blue-700"
//           >
//             Sign up
//           </button>
//         </form>
//         <div
//           onClick={onLoginClick}
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white text-[#193db0] px-8 py-2 rounded-full cursor-pointer hover:bg-gray-100"
//         >
//           Login
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPopup;
