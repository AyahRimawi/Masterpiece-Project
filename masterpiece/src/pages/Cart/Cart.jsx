// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import TrackOrder from "../../components/Navbar/TrackOrder";
// import SearchBar from "../../components/Navbar/SearchBar";
// import FooterBar from "../../components/Footer/FooterBar";
// import Modal from "../Card/Confirmation";

// const CartItem = ({ item, onRemove, onUpdateQuantity }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.3 }}
//     className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md rounded-lg p-4 mb-4"
//   >
//     <div className="flex items-center mb-4 md:mb-0">
//       <img
//         src={item.image}
//         alt={item.name}
//         className="w-20 h-20 object-cover rounded-md mr-4"
//       />
//       <div>
//         <h3 className="text-lg font-semibold text-[#193db0]">{item.name}</h3>
//         <p className="text-[#193db0] font-medium">JD {item.price.toFixed(2)}</p>
//       </div>
//     </div>
//     <div className="flex items-center">
//       <div className="flex items-center border border-[#193db0] rounded-md overflow-hidden">
//         <button
//           onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
//           className="text-[#193db0] px-3 py-1 hover:bg-[#193db0] hover:text-white transition-colors"
//           disabled={item.quantity <= 1}
//         >
//           -
//         </button>
//         <span className="px-4 py-1 text-[#193db0]">{item.quantity}</span>
//         <button
//           onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
//           className="text-[#193db0] px-3 py-1 hover:bg-[#193db0] hover:text-white transition-colors"
//         >
//           +
//         </button>
//       </div>
//       <button
//         onClick={() => onRemove(item.id)}
//         className="ml-4 text-red-500 hover:text-red-700 transition-colors"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//           />
//         </svg>
//       </button>
//     </div>
//   </motion.div>
// );

// const Cart = () => {
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: "Product 1",
//       price: 17.99,
//       quantity: 2,
//       image: "https://i.imgur.com/6xGVorA_d.webp?maxwidth=760&fidelity=grand",
//     },
//     // Add more items here if needed
//   ]);

//   const [isModalOpen, setModalOpen] = useState(false); // State to control the modal visibility

//   const removeItem = (id) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) return;
//     setItems(
//       items.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const total = items.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <>
//       <TrackOrder />
//       <SearchBar />
//       <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
//         <h1 className="text-4xl font-bold mb-8 text-[#193db0]">Your Cart</h1>
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <AnimatePresence>
//             {items.length > 0 ? (
//               items.map((item) => (
//                 <CartItem
//                   key={item.id}
//                   item={item}
//                   onRemove={removeItem}
//                   onUpdateQuantity={updateQuantity}
//                 />
//               ))
//             ) : (
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-center text-gray-500 py-8"
//               >
//                 Your cart is empty.
//               </motion.p>
//             )}
//           </AnimatePresence>
//           <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
//             <h2 className="text-2xl font-semibold text-[#193db0] mb-4 md:mb-0">
//               Total: JD{total.toFixed(2)}
//             </h2>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setModalOpen(true)} // Open the modal
//               className="bg-[#193db0] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors text-lg font-medium"
//             >
//               Checkout
//             </motion.button>
//           </div>
//         </div>
//       </div>
//       <FooterBar />

//       {/* Modal Component */}
//       <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
//     </>
//   );
// };

// export default Cart;
