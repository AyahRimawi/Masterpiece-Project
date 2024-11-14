
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { PayPalButtons } from "@paypal/react-paypal-js";
// import axios from "axios";

// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [cart, setCart] = useState(null);
//   const [shippingAddress, setShippingAddress] = useState({
//     governorate: "",
//     details: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("PayPal");
//   const [isAddressValid, setIsAddressValid] = useState(false);

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   useEffect(() => {
//     validateShippingAddress();
//   }, [shippingAddress]);

//   const fetchCart = async () => {
//     try {
//       const response = await axios.get("/api/cart");
//       setCart(response.data);
//     } catch (err) {
//       setError("Failed to fetch cart. Please try again.");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShippingAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const calculateTotalAmount = () => {
//     if (!cart || !cart.items) return "0.00";
//     return cart.items
//       .reduce((total, item) => total + item.price * item.quantity, 0)
//       .toFixed(2);
//   };

//   const validateShippingAddress = () => {
//     const isValid = shippingAddress.governorate && shippingAddress.details;
//     setIsAddressValid(isValid);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateShippingAddress()) {
//       setError("Please fill in both governorate and address details.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const orderData = {
//         items: cart.items,
//         totalAmount: calculateTotalAmount(),
//         paymentMethod,
//         shippingAddress,
//       };

//       const response = await axios.post("/api/orders/create", orderData);

//       if (paymentMethod === "CashOnDelivery") {
//         await axios.post("/api/cart/clear");
//         navigate("/order-confirmation", {
//           state: { order: response.data.order },
//         });
//       }
//     } catch (err) {
//       console.error("Error creating order:", err);
//       setError(
//         err.response?.data?.message ||
//           "An error occurred while creating the order"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const createPayPalOrder = (data, actions) => {
//     if (!validateShippingAddress()) {
//       setError(
//         "Please fill in both governorate and address details before proceeding with PayPal."
//       );
//       return Promise.reject(new Error("Address validation failed"));
//     }

//     return actions.order.create({
//       purchase_units: [
//         {
//           amount: {
//             value: calculateTotalAmount(),
//           },
//         },
//       ],
//     });
//   };

//   const onPayPalApprove = async (data, actions) => {
//     try {
//       const details = await actions.order.capture();
//       const orderData = {
//         items: cart.items,
//         totalAmount: calculateTotalAmount(),
//         paymentMethod: "PayPal",
//         shippingAddress,
//         paypalOrderId: details.id,
//       };

//       const response = await axios.post("/api/orders/create", orderData);
//       await axios.post("/api/cart/clear");
//       navigate("/order-confirmation", {
//         state: { order: response.data.order },
//       });
//     } catch (err) {
//       console.error("PayPal error:", err);
//       setError("An error occurred during PayPal checkout. Please try again.");
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (!cart) return <div>Loading cart data...</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//       {error && <div className="text-red-500 mb-4">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block mb-2">Governorate</label>
//           <select
//             name="governorate"
//             value={shippingAddress.governorate}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded"
//           >
//             <option value="">Select Governorate</option>
//             <option value="Amman">Amman</option>
//             <option value="Zarqa">Zarqa</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Address Details</label>
//           <textarea
//             name="details"
//             value={shippingAddress.details}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         {!isAddressValid && (
//           <div className="text-red-500 mb-4">
//             Please fill in both governorate and address details before
//             proceeding.
//           </div>
//         )}
//         <div className="mb-4">
//           <label className="block mb-2">Payment Method</label>
//           <select
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             className="w-full p-2 border rounded"
//           >
//             <option value="PayPal">PayPal</option>
//             <option value="CashOnDelivery">Cash on Delivery</option>
//           </select>
//         </div>
//         {paymentMethod === "CashOnDelivery" && (
//           <button
//             type="submit"
//             className="bg-blue-500 text-white p-2 rounded"
//             disabled={!isAddressValid}
//           >
//             Place Order
//           </button>
//         )}
//       </form>
//       {paymentMethod === "PayPal" && isAddressValid && (
//         <PayPalButtons
//           createOrder={createPayPalOrder}
//           onApprove={onPayPalApprove}
//           onError={(err) => {
//             console.error("PayPal error:", err);
//             setError(
//               "An error occurred with PayPal. Please try again or choose a different payment method."
//             );
//           }}
//           style={{ layout: "vertical" }}
//         />
//       )}
//       {paymentMethod === "PayPal" && !isAddressValid && (
//         <div className="text-red-500 mt-4">
//           Please fill in the shipping address before proceeding with PayPal.
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { PayPalButtons } from "@paypal/react-paypal-js";
// import axios from "axios";

// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [cart, setCart] = useState(null);
//   const [shippingAddress, setShippingAddress] = useState({
//     governorate: "",
//     details: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("PayPal");
//   const [isAddressValid, setIsAddressValid] = useState(false);

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   useEffect(() => {
//     validateShippingAddress();
//   }, [shippingAddress]);

//   const fetchCart = async () => {
//     try {
//       const response = await axios.get("/api/cart");
//       setCart(response.data);
//     } catch (err) {
//       setError("Failed to fetch cart. Please try again.");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShippingAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const calculateTotalAmount = () => {
//     if (!cart || !cart.items) return "0.00";
//     return cart.items
//       .reduce((total, item) => total + item.price * item.quantity, 0)
//       .toFixed(2);
//   };

//   const validateShippingAddress = () => {
//     const isValid = shippingAddress.governorate && shippingAddress.details;
//     setIsAddressValid(isValid);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateShippingAddress()) {
//       setError("Please fill in both governorate and address details.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const orderData = {
//         items: cart.items,
//         totalAmount: calculateTotalAmount(),
//         paymentMethod,
//         shippingAddress,
//       };

//       const response = await axios.post("/api/orders/create", orderData);

//       if (paymentMethod === "CashOnDelivery") {
//         await axios.post("/api/cart/clear");
//         navigate("/order-confirmation", {
//           state: { order: response.data.order },
//         });
//       }
//     } catch (err) {
//       console.error("Error creating order:", err);
//       setError(
//         err.response?.data?.message ||
//           "An error occurred while creating the order"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const createPayPalOrder = (data, actions) => {
//     if (!validateShippingAddress()) {
//       setError(
//         "Please fill in both governorate and address details before proceeding with PayPal."
//       );
//       return Promise.reject(new Error("Address validation failed"));
//     }

//     return actions.order.create({
//       purchase_units: [
//         {
//           amount: {
//             value: calculateTotalAmount(),
//           },
//         },
//       ],
//     });
//   };

//   const onPayPalApprove = async (data, actions) => {
//     try {
//       const details = await actions.order.capture();
//       const orderData = {
//         items: cart.items,
//         totalAmount: calculateTotalAmount(),
//         paymentMethod: "PayPal",
//         shippingAddress,
//         paypalOrderId: details.id,
//       };

//       const response = await axios.post("/api/orders/create", orderData);
//       await axios.post("/api/cart/clear");
//       navigate("/order-confirmation", {
//         state: { order: response.data.order },
//       });
//     } catch (err) {
//       console.error("PayPal error:", err);
//       setError("An error occurred during PayPal checkout. Please try again.");
//     }
//   };

//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="w-16 h-16 border-4 border-[#193db0] border-t-transparent rounded-full animate-spin" />
//       </div>
//     );

//   if (!cart)
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600">
//         Loading cart data...
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="bg-white rounded-2xl shadow-sm mb-8 p-8">
//           <h1 className="text-3xl font-bold text-center text-[#193db0] mb-2">
//             Complete Your Order
//           </h1>
//           <p className="text-center text-gray-600 mb-6">
//             Please fill in your shipping details and choose your payment method
//           </p>

//           {error && (
//             <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-center">
//               {error}
//             </div>
//           )}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Form Section */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-2xl shadow-sm p-8">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Shipping Information */}
//                 <div className="mb-8">
//                   <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                     Shipping Information
//                   </h2>
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Governorate
//                       </label>
//                       <select
//                         name="governorate"
//                         value={shippingAddress.governorate}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#193db0] focus:border-transparent transition-colors duration-200 bg-white"
//                       >
//                         <option value="">Select Governorate</option>
//                         <option value="Amman">Amman</option>
//                         <option value="Zarqa">Zarqa</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Address Details
//                       </label>
//                       <textarea
//                         name="details"
//                         value={shippingAddress.details}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#193db0] focus:border-transparent transition-colors duration-200 min-h-[100px] bg-white resize-none"
//                         placeholder="Enter your detailed address..."
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Payment Method */}
//                 <div className="mb-8">
//                   <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                     Payment Method
//                   </h2>
//                   <div className="grid grid-cols-2 gap-4">
//                     <button
//                       type="button"
//                       onClick={() => setPaymentMethod("PayPal")}
//                       className={`p-4 rounded-xl border-2 transition-all duration-200 ${
//                         paymentMethod === "PayPal"
//                           ? "border-[#193db0] bg-blue-50"
//                           : "border-gray-200 hover:border-[#193db0] hover:bg-gray-50"
//                       }`}
//                     >
//                       <span className="font-medium">PayPal</span>
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => setPaymentMethod("CashOnDelivery")}
//                       className={`p-4 rounded-xl border-2 transition-all duration-200 ${
//                         paymentMethod === "CashOnDelivery"
//                           ? "border-[#193db0] bg-blue-50"
//                           : "border-gray-200 hover:border-[#193db0] hover:bg-gray-50"
//                       }`}
//                     >
//                       <span className="font-medium">Cash on Delivery</span>
//                     </button>
//                   </div>
//                 </div>

//                 {paymentMethod === "CashOnDelivery" && (
//                   <button
//                     type="submit"
//                     disabled={!isAddressValid}
//                     className={`w-full py-4 px-6 rounded-xl text-white font-medium transition-all duration-200 ${
//                       isAddressValid
//                         ? "bg-[#193db0] hover:bg-[#142d80] transform hover:-translate-y-0.5"
//                         : "bg-gray-300 cursor-not-allowed"
//                     }`}
//                   >
//                     Place Order
//                   </button>
//                 )}
//               </form>

//               {paymentMethod === "PayPal" && isAddressValid && (
//                 <div className="mt-6">
//                   <PayPalButtons
//                     createOrder={createPayPalOrder}
//                     onApprove={onPayPalApprove}
//                     onError={(err) => {
//                       console.error("PayPal error:", err);
//                       setError(
//                         "An error occurred with PayPal. Please try again or choose a different payment method."
//                       );
//                     }}
//                     style={{ layout: "vertical" }}
//                   />
//                 </div>
//               )}

//               {!isAddressValid && (
//                 <p className="mt-4 text-sm text-red-500 text-center">
//                   Please fill in all required fields to proceed with payment.
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Order Summary Section */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-8">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                 Order Summary
//               </h2>
//               <div className="space-y-4">
//                 {cart.items?.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex justify-between items-center text-gray-600"
//                   >
//                     <span>
//                       {item.quantity}x {item.name}
//                     </span>
//                     <span className="font-medium">
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//               <div className="border-t border-gray-200 mt-4 pt-4">
//                 <div className="flex justify-between items-center">
//                   <span className="text-lg font-semibold text-gray-800">
//                     Total
//                   </span>
//                   <span className="text-lg font-bold text-[#193db0]">
//                     ${calculateTotalAmount()}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;