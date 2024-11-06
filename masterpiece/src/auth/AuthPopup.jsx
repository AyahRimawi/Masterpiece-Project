// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser, loginUser } from "../Redux/AuthRedux/authThunks";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AuthForm = ({ isOpen, onClose }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     address: {
//       governorate: "",
//       details: "",
//     },
//     phone: "",
//   });

//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.auth);

//   const toggleForm = () => {
//     setIsSignup(!isSignup);
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       address: {
//         governorate: "",
//         details: "",
//       },
//       phone: "",
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "governorate" || name === "details") {
//       setFormData((prevState) => ({
//         ...prevState,
//         address: {
//           ...prevState.address,
//           [name]: value,
//         },
//       }));
//     } else {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };
//   // ----------------------------
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let resultAction;

//     if (isSignup) {
//       resultAction = await dispatch(registerUser(formData));
//     } else {
//       resultAction = await dispatch(
//         loginUser({ email: formData.email, password: formData.password })
//       );
//       // قم بتفريغ حقول الإدخال بعد نجاح تسجيل الدخول
//       if (resultAction.meta.requestStatus === "fulfilled") {
//         setFormData((prev) => ({
//           ...prev,
//           email: "",
//           password: "",
//         }));
//       }
//     }

//     //* meta هي خاصية تُستخدم في كائن النتائج (resultAction) الناتج عن استدعاء دالة createAsyncThunk في Redux Toolkit.
//     // تحقق إذا كانت العملية قد نجحت
// if (resultAction.meta.requestStatus === "fulfilled") {
//   onClose(); // أغلق النافذة فقط عند النجاح
//   const welcomeMessage = isSignup
//     ? `Welcome ${formData.name}`
//     : `Welcome back, ${formData.email.split("@")[0]}!`;
//   toast.success(welcomeMessage, {
//     style: { backgroundColor: "#fff", color: "#193db0" },
//   });
// }

    
//   };
//   // ---------------------------

//   const handleClose = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//         <div className="relative w-[350px] h-[520px] bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-[0_8px_32px_rgba(31,38,135,0.37)] overflow-hidden">
//           <button
//             onClick={handleClose}
//             className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
//           >
//             ✕
//           </button>
//           <div
//             className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
//               isSignup ? "translate-y-0" : "-translate-y-full"
//             }`}
//           >
//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col items-center justify-center h-full"
//             >
//               <h2 className="text-white text-3xl font-bold mb-8 mt-2">
//                 Sign up
//               </h2>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="User name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
//               />
//               <select
//                 name="governorate"
//                 required
//                 value={formData.address.governorate}
//                 onChange={handleChange}
//                 className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white focus:text-gray-600"
//               >
//                 <option value="">Select Governorate</option>
//                 <option value="Amman">Amman</option>
//                 <option value="Zarqa">Zarqa</option>
//               </select>
//               <input
//                 type="text"
//                 name="details"
//                 placeholder="Address Details"
//                 required
//                 value={formData.address.details}
//                 onChange={handleChange}
//                 className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
//               />
//               <button
//                 type="submit"
//                 className="w-4/5 h-10 bg-[#193db0] text-white rounded-md hover:bg-[#1431a0] transition-all duration-200"
//                 disabled={loading}
//               >
//                 {loading ? "Loading..." : "Sign up"}
//               </button>
//               {error && <p className="text-red-500 mt-2">{error}</p>}
//               <p
//                 className="mt-4 text-white cursor-pointer hover:underline"
//                 onClick={toggleForm}
//               >
//                 Already have an account? Login
//               </p>
//             </form>
//           </div>

//           <div
//             className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
//               isSignup ? "translate-y-full" : "translate-y-0"
//             }`}
//           >
//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col items-center justify-center h-full"
//             >
//               <h2 className="text-white text-3xl font-bold mb-8">Login</h2>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-4/5 h-10 mb-4 p-2 rounded-md bg-white bg-opacity-20 border-none outline-none text-white placeholder-gray-300"
//               />
//               <button
//                 type="submit"
//                 className="w-4/5 h-10 bg-[#193db0] text-white rounded-md hover:bg-[#1431a0] transition-all duration-200"
//                 disabled={loading}
//               >
//                 {loading ? "Loading..." : "Login"}
//               </button>
//               {error && <p className="text-red-500 mt-2">{error}</p>}
//               <p
//                 className="mt-4 text-white cursor-pointer hover:underline"
//                 onClick={toggleForm}
//               >
//                 Don't have an account? Sign up
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AuthForm;

// ----------------------
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser, loginUser } from "../Redux/AuthRedux/authThunks";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AuthForm = ({ isOpen, onClose }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     address: {
//       governorate: "",
//       details: "",
//     },
//     phone: "",
//   });

//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.auth);

//   const toggleForm = () => {
//     setIsSignup(!isSignup);
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       address: {
//         governorate: "",
//         details: "",
//       },
//       phone: "",
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "governorate" || name === "details") {
//       setFormData((prevState) => ({
//         ...prevState,
//         address: {
//           ...prevState.address,
//           [name]: value,
//         },
//       }));
//     } else {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let resultAction;

//     if (isSignup) {
//       resultAction = await dispatch(registerUser(formData));
//     } else {
//       resultAction = await dispatch(
//         loginUser({ email: formData.email, password: formData.password })
//       );
//       if (resultAction.meta.requestStatus === "fulfilled") {
//         setFormData((prev) => ({
//           ...prev,
//           email: "",
//           password: "",
//         }));
//       }
//     }

//     if (resultAction.meta.requestStatus === "fulfilled") {
//       onClose();
//       const welcomeMessage = isSignup
//         ? `Welcome ${formData.name}`
//         : `Welcome back, ${formData.email.split("@")[0]}!`;
//       toast.success(welcomeMessage, {
//         style: { backgroundColor: "#fff", color: "#193db0" },
//       });
//     }
//   };

//   const handleClose = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
//       <div className="relative">
//         <div
//           className={`w-[480px] h-[640px] rounded-[70%_30%_70%_30%_/_40%_60%_40%_60%] bg-transparent
//           shadow-[inset_10px_10px_10px_10px_rgba(0,0,0,0.158),10px_10px_20px_rgba(0,0,0,0.466),inset_-10px_-10px_10px_10px_rgba(255,255,255,0.897)]
//           before:content-[''] before:absolute before:w-6 before:h-6 before:bg-white/80 before:rounded-[48%_52%_45%_55%_/_48%_67%_33%_52%] before:top-16 before:left-24
//           after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white/80 after:rounded-[80%_20%_91%_9%_/_48%_67%_33%_52%] after:top-20 after:left-14
//           overflow-hidden backdrop-blur-md relative`}
//         >
//           <button
//             onClick={handleClose}
//             className="absolute top-8 right-8 text-white/80 hover:text-white z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
//           >
//             ✕
//           </button>

//           <div className="relative h-full">
//             <div
//               className={`transition-transform duration-500 ease-out ${
//                 isSignup ? "translate-y-0" : "-translate-y-full"
//               }`}
//             >
//               <form
//                 onSubmit={handleSubmit}
//                 className="h-[640px] flex flex-col pt-16 px-16"
//               >
//                 <h2 className="text-white text-3xl font-bold mb-10 text-center">
//                   Sign up
//                 </h2>

//                 <div className="space-y-5 flex-grow overflow-y-auto pr-3 custom-scrollbar">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="User name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm"
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm"
//                   />
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     required
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm"
//                   />
//                   <select
//                     name="governorate"
//                     required
//                     value={formData.address.governorate}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white text-sm backdrop-blur-sm appearance-none"
//                   >
//                     <option value="" className="text-gray-800">
//                       Select Governorate
//                     </option>
//                     <option value="Amman" className="text-gray-800">
//                       Amman
//                     </option>
//                     <option value="Zarqa" className="text-gray-800">
//                       Zarqa
//                     </option>
//                   </select>
//                   {/* <input
//                     type="text"
//                     name="details"
//                     placeholder="Address Details"
//                     required
//                     value={formData.address.details}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm"
//                   /> */}
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm"
//                   />
//                 </div>

//                 <div className="py-8">
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full py-3 rounded-2xl font-medium text-sm text-white
//                     bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md
//                     border border-white/20 hover:border-white/40
//                     transition-all duration-200 hover:shadow-lg hover:shadow-white/20
//                     disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {loading ? "Loading..." : "Sign up"}
//                   </button>

//                   {error && (
//                     <p className="text-red-400 text-center mt-3 text-sm">
//                       {error}
//                     </p>
//                   )}

//                   <p className="text-center mt-4">
//                     <span
//                       className="text-white/80 hover:text-white cursor-pointer text-sm transition-colors duration-200"
//                       onClick={toggleForm}
//                     >
//                       Already have an account? Login
//                     </span>
//                   </p>
//                 </div>
//               </form>
//             </div>

//             <div
//               className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-out ${
//                 isSignup ? "translate-y-full" : "translate-y-0"
//               }`}
//             >
//               <form
//                 onSubmit={handleSubmit}
//                 className="h-[640px] flex flex-col justify-center px-16"
//               >
//                 <h2 className="text-white text-3xl font-bold mb-10 text-center">
//                   Login
//                 </h2>

//                 <div className="space-y-5 mb-8">
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm"
//                   />
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     required
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full py-3 rounded-2xl font-medium text-sm text-white
//                   bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md
//                   border border-white/20 hover:border-white/40
//                   transition-all duration-200 hover:shadow-lg hover:shadow-white/20
//                   disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {loading ? "Loading..." : "Login"}
//                 </button>

//                 {error && (
//                   <p className="text-red-400 text-center mt-3 text-sm">
//                     {error}
//                   </p>
//                 )}

//                 <p className="text-center mt-4">
//                   <span
//                     className="text-white/80 hover:text-white cursor-pointer text-sm transition-colors duration-200"
//                     onClick={toggleForm}
//                   >
//                     Don't have an account? Sign up
//                   </span>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;
// --------------------------------------

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser, loginUser } from "../Redux/AuthRedux/authThunks";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AuthForm = ({ isOpen, onClose }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     address: {
//       governorate: "",
//       details: "",
//     },
//     phone: "",
//   });

//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.auth);

//   const toggleForm = () => {
//     setIsSignup(!isSignup);
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       address: {
//         governorate: "",
//         details: "",
//       },
//       phone: "",
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "governorate" || name === "details") {
//       setFormData((prevState) => ({
//         ...prevState,
//         address: {
//           ...prevState.address,
//           [name]: value,
//         },
//       }));
//     } else {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let resultAction;

//     if (isSignup) {
//       resultAction = await dispatch(registerUser(formData));
//     } else {
//       resultAction = await dispatch(
//         loginUser({ email: formData.email, password: formData.password })
//       );
//       if (resultAction.meta.requestStatus === "fulfilled") {
//         setFormData((prev) => ({
//           ...prev,
//           email: "",
//           password: "",
//         }));
//       }
//     }

//     if (resultAction.meta.requestStatus === "fulfilled") {
//       onClose();
//       const welcomeMessage = isSignup
//         ? `Welcome ${formData.name}`
//         : `Welcome back, ${formData.email.split("@")[0]}!`;
//       toast.success(welcomeMessage, {
//         style: { backgroundColor: "#fff", color: "#193db0" },
//       });
//     }
//   };

//   const handleClose = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
//       <div className="relative">
//         <div
//           className={`w-[480px] h-[640px] rounded-[70%_30%_70%_30%_/_40%_60%_40%_60%] bg-transparent
//           shadow-[inset_10px_10px_10px_10px_rgba(0,0,0,0.158),10px_10px_20px_rgba(0,0,0,0.466),inset_-10px_-10px_10px_10px_rgba(255,255,255,0.897)]
//           before:content-[''] before:absolute before:w-6 before:h-6 before:bg-white/80 before:rounded-[48%_52%_45%_55%_/_48%_67%_33%_52%] before:top-16 before:left-24
//           after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white/80 after:rounded-[80%_20%_91%_9%_/_48%_67%_33%_52%] after:top-20 after:left-14
//           overflow-hidden backdrop-blur-md relative`}
//         >
//           <button
//             onClick={handleClose}
//             className="absolute top-8 right-8 text-white/80 hover:text-white z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
//           >
//             ✕
//           </button>

//           <div className="relative h-full">
//             <div
//               className={`transition-transform duration-500 ease-out ${
//                 isSignup ? "translate-y-0" : "-translate-y-full"
//               }`}
//             >
//               <form
//                 onSubmit={handleSubmit}
//                 className="h-[640px] flex flex-col pt-16 px-16"
//               >
//                 <h2 className="text-white text-3xl font-bold mb-10 text-center">
//                   Sign up
//                 </h2>

//                 <div className="space-y-5">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="User name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm"
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm"
//                   />
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     required
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm"
//                   />
//                   <select
//                     name="governorate"
//                     required
//                     value={formData.address.governorate}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white text-sm backdrop-blur-sm appearance-none"
//                   >
//                     <option value="" className="text-gray-800">
//                       Select Governorate
//                     </option>
//                     <option value="Amman" className="text-gray-800">
//                       Amman
//                     </option>
//                     <option value="Zarqa" className="text-gray-800">
//                       Zarqa
//                     </option>
//                   </select>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm"
//                   />

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full py-3 rounded-2xl font-medium text-sm text-white
//                     bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md
//                     border border-white/20 hover:border-white/40
//                     transition-all duration-200 hover:shadow-lg hover:shadow-white/20
//                     disabled:opacity-50 disabled:cursor-not-allowed mt-5"
//                   >
//                     {loading ? "Loading..." : "Sign up"}
//                   </button>

//                   {error && (
//                     <p className="text-red-400 text-center mt-3 text-sm">
//                       {error}
//                     </p>
//                   )}

//                   <p className="text-center">
//                     <span
//                       className="text-white/80 hover:text-white cursor-pointer text-sm transition-colors duration-200"
//                       onClick={toggleForm}
//                     >
//                       Already have an account? Login
//                     </span>
//                   </p>
//                 </div>
//               </form>
//             </div>

//             <div
//               className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-out ${
//                 isSignup ? "translate-y-full" : "translate-y-0"
//               }`}
//             >
//               <form
//                 onSubmit={handleSubmit}
//                 className="h-[640px] flex flex-col justify-center px-16"
//               >
//                 <h2 className="text-white text-3xl font-bold mb-10 text-center">
//                   Login
//                 </h2>

//                 <div className="space-y-5">
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm"
//                   />
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     required
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm"
//                   />

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full py-3 rounded-2xl font-medium text-sm text-white
//                     bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md
//                     border border-white/20 hover:border-white/40
//                     transition-all duration-200 hover:shadow-lg hover:shadow-white/20
//                     disabled:opacity-50 disabled:cursor-not-allowed mt-5"
//                   >
//                     {loading ? "Loading..." : "Login"}
//                   </button>

//                   {error && (
//                     <p className="text-red-400 text-center mt-3 text-sm">
//                       {error}
//                     </p>
//                   )}

//                   <p className="text-center">
//                     <span
//                       className="text-white/80 hover:text-white cursor-pointer text-sm transition-colors duration-200"
//                       onClick={toggleForm}
//                     >
//                       Don't have an account? Sign up
//                     </span>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../Redux/AuthRedux/authThunks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthForm = ({ isOpen, onClose }) => {
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

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

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
    let resultAction;

    if (isSignup) {
      resultAction = await dispatch(registerUser(formData));
    } else {
      resultAction = await dispatch(
        loginUser({ email: formData.email, password: formData.password })
      );
      if (resultAction.meta.requestStatus === "fulfilled") {
        setFormData((prev) => ({
          ...prev,
          email: "",
          password: "",
        }));
      }
    }

    if (resultAction.meta.requestStatus === "fulfilled") {
      onClose();
      const welcomeMessage = isSignup
        ? `Welcome ${formData.name}`
        : `Welcome back, ${formData.email.split("@")[0]}!`;
      toast.success(welcomeMessage, {
        style: { backgroundColor: "#fff", color: "#193db0" },
      });
    }
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="relative">
        <div
          className={`relative w-[480px] h-[640px] rounded-[70%_30%_70%_30%_/_40%_60%_40%_60%] bg-transparent 
          shadow-[inset_10px_10px_10px_10px_rgba(0,0,0,0.158),10px_10px_20px_rgba(0,0,0,0.466),inset_-10px_-10px_10px_10px_rgba(255,255,255,0.897)]
          before:content-[''] before:absolute before:w-6 before:h-6 before:bg-white/80 before:rounded-[48%_52%_45%_55%_/_48%_67%_33%_52%] before:top-16 before:left-24
          after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white/80 after:rounded-[80%_20%_91%_9%_/_48%_67%_33%_52%] after:top-20 after:left-14
          overflow-hidden backdrop-blur-md`}
        >
          {/* Fixed Close Button Position */}
          <button
            onClick={onClose}
            className="absolute top-4 right-8 z-50 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-white transform group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative h-full">
            <div
              className={`transition-transform duration-500 ease-out ${
                isSignup ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <form
                onSubmit={handleSubmit}
                className="h-[640px] flex flex-col pt-16 px-16"
              >
                <h2 className="text-white text-3xl font-bold mb-10 text-center">
                  Create Account
                </h2>

                <div className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="User name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm focus:border-white/40 transition-colors duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm focus:border-white/40 transition-colors duration-300"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm focus:border-white/40 transition-colors duration-300"
                  />
                  <select
                    name="governorate"
                    required
                    value={formData.address.governorate}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white text-sm backdrop-blur-sm appearance-none focus:border-white/40 transition-colors duration-300"
                  >
                    <option value="" className="text-gray-800">
                      Select Governorate
                    </option>
                    <option value="Amman" className="text-gray-800">
                      Amman
                    </option>
                    <option value="Zarqa" className="text-gray-800">
                      Zarqa
                    </option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm focus:border-white/40 transition-colors duration-300"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="relative w-full py-3 rounded-2xl font-medium text-sm text-white
                    bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md
                    border border-white/20 hover:border-white/40
                    transition-all duration-300 
                    hover:shadow-lg hover:shadow-white/20
                    disabled:opacity-50 disabled:cursor-not-allowed
                    overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {loading ? "Loading..." : "Sign up"}
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>

                  {error && (
                    <p className="text-red-400 text-center mt-3 text-sm">
                      {error}
                    </p>
                  )}

                  <p className="text-center">
                    <span
                      className="text-white/80 hover:text-white cursor-pointer text-sm transition-colors duration-200"
                      onClick={toggleForm}
                    >
                      Already have an account? Login
                    </span>
                  </p>
                </div>
              </form>
            </div>

            <div
              className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-out ${
                isSignup ? "translate-y-full" : "translate-y-0"
              }`}
            >
              <form
                onSubmit={handleSubmit}
                className="h-[640px] flex flex-col justify-center px-16"
              >
                <h2 className="text-white text-3xl font-bold mb-10 text-center">
                  Login
                </h2>

                <div className="space-y-5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm focus:border-white/40 transition-colors duration-300"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-white/60 text-sm backdrop-blur-sm focus:border-white/40 transition-colors duration-300"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="relative w-full py-3 rounded-2xl font-medium text-sm text-white
                    bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md
                    border border-white/20 hover:border-white/40
                    transition-all duration-300 
                    hover:shadow-lg hover:shadow-white/20
                    disabled:opacity-50 disabled:cursor-not-allowed
                    overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {loading ? "Loading..." : "Login"}
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>

                  {error && (
                    <p className="text-red-400 text-center mt-3 text-sm">
                      {error}
                    </p>
                  )}

                  <p className="text-center">
                    <span
                      className="text-white/80 hover:text-white cursor-pointer text-sm transition-colors duration-200"
                      onClick={toggleForm}
                    >
                      Don't have an account? Sign up
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;