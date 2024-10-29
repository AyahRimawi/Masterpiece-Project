// // // import React, { useEffect } from "react";
// // // import { toast } from "react-toastify";
// // // import useCartStore from "./CartStore";

// // // const CartPage = () => {
// // //   const { cart, loading, error, fetchCart, updateCartItem, removeCartItem } =
// // //     useCartStore();

// // //   useEffect(() => {
// // //     fetchCart();
// // //   }, [fetchCart]);

// // //   const handleRemoveItem = async (itemId) => {
// // //     try {
// // //       await removeCartItem(itemId);
// // //       toast.success("Item removed from cart");
// // //     } catch (error) {
// // //       console.error("Error removing item from cart:", error);
// // //       toast.error("Failed to remove item. Please try again.");
// // //     }
// // //   };

// // //   const handleQuantityChange = async (itemId, currentQuantity, change) => {
// // //     const newQuantity = Math.max(1, currentQuantity + change);
// // //     try {
// // //       await updateCartItem(itemId, newQuantity);
// // //       toast.success("Cart updated successfully");
// // //     } catch (error) {
// // //       console.error("Error updating cart:", error);
// // //       toast.error(
// // //         error.response?.data?.message ||
// // //           "Failed to update cart. Please try again."
// // //       );
// // //     }
// // //   };

// // //   if (loading) return <div className="text-center mt-8">Loading...</div>;
// // //   if (error)
// // //     return <div className="text-center mt-8 text-red-500">{error}</div>;
// // //   if (!cart || !cart.items || cart.items.length === 0)
// // //     return <div className="text-center mt-8">Your cart is empty</div>;

// // //   const total = cart.items.reduce((sum, item) => {
// // //     const price =
// // //       item.variantId && item.variantId.price ? item.variantId.price : 0;
// // //     return sum + price * item.quantity;
// // //   }, 0);

// // //   return (
// // //     <div className="container mx-auto px-4 py-8">
// // //       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// // //       {cart.items.map((item) => (
// // //         <div key={item._id} className="flex items-center border-b py-4">
// // //           <img
// // //             src={item.variantId?.overviewPicture || "placeholder-image-url"}
// // //             alt={item.variantId?.name || "Product"}
// // //             className="w-20 h-20 object-cover mr-4"
// // //           />
// // //           <div className="flex-grow">
// // //             <h2 className="font-semibold">
// // //               {item.productId?.name || "Product Name"}
// // //             </h2>
// // //             <p className="text-gray-600">
// // //               Color: {item.variantId?.color || "N/A"}, Size:{" "}
// // //               {item.variantId?.size || "N/A"}
// // //             </p>
// // //             <p className="text-gray-600">
// // //               Price: ${item.variantId?.price?.toFixed(2) || "0.00"}
// // //             </p>
// // //             <div className="flex items-center mt-2">
// // //               <button
// // //                 onClick={() =>
// // //                   handleQuantityChange(item._id, item.quantity, -1)
// // //                 }
// // //                 className="bg-gray-200 px-2 py-1 rounded"
// // //               >
// // //                 -
// // //               </button>
// // //               <span className="mx-2">{item.quantity}</span>
// // //               <button
// // //                 onClick={() => handleQuantityChange(item._id, item.quantity, 1)}
// // //                 className="bg-gray-200 px-2 py-1 rounded"
// // //                 disabled={item.quantity >= item.variantId?.quantity}
// // //               >
// // //                 +
// // //               </button>
// // //             </div>
// // //           </div>
// // //           <button
// // //             onClick={() => handleRemoveItem(item._id)}
// // //             className="text-red-500 hover:text-red-700"
// // //           >
// // //             Remove
// // //           </button>
// // //         </div>
// // //       ))}
// // //       <div className="mt-8 text-xl font-bold">Total: ${total.toFixed(2)}</div>
// // //     </div>
// // //   );
// // // };

// // // export default CartPage;

// // // import React, { useEffect } from "react";
// // // import { toast } from "react-toastify";
// // // import { useNavigate } from "react-router-dom";
// // // import { useSelector } from "react-redux";
// // // import useCartStore from "./CartStore";

// // // const CartPage = () => {
// // //   const { cart, loading, error, fetchCart, updateCartItem, removeCartItem } =
// // //     useCartStore();
// // //   const navigate = useNavigate();
// // //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

// // //   useEffect(() => {
// // //     fetchCart();
// // //   }, [fetchCart]);

// // //   const handleRemoveItem = async (itemId) => {
// // //     try {
// // //       await removeCartItem(itemId);
// // //       toast.success("Item removed from cart");
// // //     } catch (error) {
// // //       console.error("Error removing item from cart:", error);
// // //       toast.error("Failed to remove item. Please try again.");
// // //     }
// // //   };

// // //   const handleQuantityChange = async (itemId, currentQuantity, change) => {
// // //     const newQuantity = Math.max(1, currentQuantity + change);
// // //     try {
// // //       await updateCartItem(itemId, newQuantity);
// // //       toast.success("Cart updated successfully");
// // //     } catch (error) {
// // //       console.error("Error updating cart:", error);
// // //       toast.error(
// // //         error.response?.data?.message ||
// // //           "Failed to update cart. Please try again."
// // //       );
// // //     }
// // //   };

// // //   const handleCheckout = () => {
// // //     if (isAuthenticated) {
// // //       navigate("/checkout");
// // //     } else {
// // //       navigate("/login", { state: { from: "/cart" } });
// // //     }
// // //   };

// // //   if (loading) return <div className="text-center mt-8">Loading...</div>;
// // //   if (error)
// // //     return <div className="text-center mt-8 text-red-500">{error}</div>;
// // //   if (!cart || !cart.items || cart.items.length === 0)
// // //     return <div className="text-center mt-8">Your cart is empty</div>;

// // //   const total = cart.items.reduce((sum, item) => {
// // //     const price =
// // //       item.variantId && item.variantId.price ? item.variantId.price : 0;
// // //     return sum + price * item.quantity;
// // //   }, 0);

// // //   return (
// // //     <div className="container mx-auto px-4 py-8">
// // //       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// // //       {cart.items.map((item) => (
// // //         <div key={item._id} className="flex items-center border-b py-4">
// // //           <img
// // //             src={item.variantId?.overviewPicture || "placeholder-image-url"}
// // //             alt={item.variantId?.name || "Product"}
// // //             className="w-20 h-20 object-cover mr-4"
// // //           />
// // //           <div className="flex-grow">
// // //             <h2 className="font-semibold">
// // //               {item.productId?.name || "Product Name"}
// // //             </h2>
// // //             <p className="text-gray-600">
// // //               Color: {item.variantId?.color || "N/A"}, Size:{" "}
// // //               {item.variantId?.size || "N/A"}
// // //             </p>
// // //             <p className="text-gray-600">
// // //               Price: ${item.variantId?.price?.toFixed(2) || "0.00"}
// // //             </p>
// // //             <div className="flex items-center mt-2">
// // //               <button
// // //                 onClick={() =>
// // //                   handleQuantityChange(item._id, item.quantity, -1)
// // //                 }
// // //                 className="bg-gray-200 px-2 py-1 rounded"
// // //               >
// // //                 -
// // //               </button>
// // //               <span className="mx-2">{item.quantity}</span>
// // //               <button
// // //                 onClick={() => handleQuantityChange(item._id, item.quantity, 1)}
// // //                 className="bg-gray-200 px-2 py-1 rounded"
// // //                 disabled={item.quantity >= item.variantId?.quantity}
// // //               >
// // //                 +
// // //               </button>
// // //             </div>
// // //           </div>
// // //           <button
// // //             onClick={() => handleRemoveItem(item._id)}
// // //             className="text-red-500 hover:text-red-700"
// // //           >
// // //             Remove
// // //           </button>
// // //         </div>
// // //       ))}
// // //       <div className="mt-8 text-xl font-bold">Total: ${total.toFixed(2)}</div>
// // //       <button
// // //         onClick={handleCheckout}
// // //         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
// // //       >
// // //         Proceed to Checkout
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default CartPage;
// // // ---------------------------------------------------------------------------------
// // // import React, { useState, useEffect } from "react";
// // // import { toast } from "react-toastify";
// // // import { useNavigate } from "react-router-dom";
// // // import { useSelector } from "react-redux";
// // // import { PayPalButtons } from "@paypal/react-paypal-js";
// // // import axios from "axios";
// // // import useCartStore from "./CartStore";

// // // const CartPage = () => {
// // //   const navigate = useNavigate();
// // //   const { cart, loading, error, fetchCart, updateCartItem, removeCartItem } =
// // //     useCartStore();
// // //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

// // //   const [shippingAddress, setShippingAddress] = useState({
// // //     governorate: "",
// // //     details: "",
// // //   });
// // //   const [paymentMethod, setPaymentMethod] = useState("PayPal");
// // //   const [isAddressValid, setIsAddressValid] = useState(false);

// // //   useEffect(() => {
// // //     fetchCart();
// // //   }, [fetchCart]);

// // //   useEffect(() => {
// // //     validateShippingAddress();
// // //   }, [shippingAddress]);

// //   // const handleRemoveItem = async (itemId) => {
// //   //   try {
// //   //     await removeCartItem(itemId);
// //   //     toast.success("Item removed from cart");
// //   //   } catch (error) {
// //   //     console.error("Error removing item from cart:", error);
// //   //     toast.error("Failed to remove item. Please try again.");
// //   //   }
// //   // };

// //   // const handleQuantityChange = async (itemId, currentQuantity, change) => {
// //   //   const newQuantity = Math.max(1, currentQuantity + change);
// //   //   try {
// //   //     await updateCartItem(itemId, newQuantity);
// //   //     toast.success("Cart updated successfully");
// //   //   } catch (error) {
// //   //     console.error("Error updating cart:", error);
// //   //     toast.error(
// //   //       error.response?.data?.message ||
// //   //         "Failed to update cart. Please try again."
// //   //     );
// //   //   }
// //   // };

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setShippingAddress((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const validateShippingAddress = () => {
// // //     const isValid = shippingAddress.governorate && shippingAddress.details;
// // //     setIsAddressValid(isValid);
// // //     return isValid;
// // //   };

// // //   const calculateTotalAmount = () => {
// // //     if (!cart || !cart.items) return "0.00";
// // //     return cart.items
// // //       .reduce((total, item) => {
// // //         const price = item.variantId?.price || 0;
// // //         return total + price * item.quantity;
// // //       }, 0)
// // //       .toFixed(2);
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!validateShippingAddress()) {
// // //       toast.error("Please fill in both governorate and address details.");
// // //       return;
// // //     }

// // //     if (!isAuthenticated) {
// // //       navigate("/login", { state: { from: "/cart" } });
// // //       return;
// // //     }

// // //     try {
// // //       const orderData = {
// // //         items: cart.items,
// // //         totalAmount: calculateTotalAmount(),
// // //         paymentMethod,
// // //         shippingAddress,
// // //       };

// // //       const response = await axios.post("/api/orders/create", orderData);

// // //       if (paymentMethod === "CashOnDelivery") {
// // //         await axios.post("/api/cart/clear");
// // //         navigate("/order-confirmation", {
// // //           state: { order: response.data.order },
// // //         });
// // //       }
// // //     } catch (err) {
// // //       console.error("Error creating order:", err);
// // //       toast.error(
// // //         err.response?.data?.message ||
// // //           "An error occurred while creating the order"
// // //       );
// // //     }
// // //   };

// // //   const createPayPalOrder = (data, actions) => {
// // //     if (!validateShippingAddress()) {
// // //       toast.error(
// // //         "Please fill in both governorate and address details before proceeding with PayPal."
// // //       );
// // //       return Promise.reject(new Error("Address validation failed"));
// // //     }

// // //     return actions.order.create({
// // //       purchase_units: [
// // //         {
// // //           amount: {
// // //             value: calculateTotalAmount(),
// // //           },
// // //         },
// // //       ],
// // //     });
// // //   };
// // //   const onPayPalApprove = async (data, actions) => {
// // //     try {
// // //       const details = await actions.order.capture();
// // //       const orderItems = cart.items.map((item) => ({
// // //         productId: item.productId._id,
// // //         variantId: item.variantId._id,
// // //         quantity: item.quantity,
// // //         price: item.variantId.price,
// // //         productName: item.productId.name,
// // //         color: item.variantId.color,
// // //         size: Array.isArray(item.variantId.size)
// // //           ? item.variantId.size[0]
// // //           : item.variantId.size,
// // //         image: item.variantId.overviewPicture,
// // //       }));

// // //       const orderData = {
// // //         items: orderItems,
// // //         totalAmount: calculateTotalAmount(),
// // //         paymentMethod: "PayPal",
// // //         shippingAddress,
// // //         paypalOrderId: details.id,
// // //       };

// // //       console.log("Sending order data:", orderData); // للتحقق من البيانات المرسلة

// // //       const token = localStorage.getItem("token");
// // //       const response = await axios.post("/api/orders/create", orderData, {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       });

// // //       console.log("Order creation response:", response.data); // للتحقق من الاستجابة

// // //       try {
// // //         await axios.post(
// // //           "/api/cart/clearCart",
// // //           {},
// // //           {
// // //             headers: {
// // //               Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //             },
// // //           }
// // //         );
// // //         console.log("Cart cleared successfully");
// // //       } catch (clearError) {
// // //         console.error("Error clearing cart:", clearError);
// // //         // يمكنك اختيار ما إذا كنت تريد إظهار رسالة خطأ للمستخدم هنا أم لا
// // //       }
// // //       navigate("/order-confirmation", {
// // //         state: { order: response.data.order },
// // //       });
// // //     } catch (err) {
// // //       console.error("PayPal error:", err);
// // //       if (err.response) {
// // //         console.error("Error response:", err.response.data);
// // //         console.error("Error status:", err.response.status);
// // //       }
// // //       toast.error(
// // //         "An error occurred during PayPal checkout. Please try again."
// // //       );
// // //     }
// // //   };
// // //   if (loading) return <div className="text-center mt-8">Loading...</div>;
// // //   if (error)
// // //     return <div className="text-center mt-8 text-red-500">{error}</div>;
// // //   if (!cart || !cart.items || cart.items.length === 0)
// // //     return <div className="text-center mt-8">Your cart is empty</div>;

// // //   return (
// // //     <div className="container mx-auto px-4 py-8 flex flex-wrap">
// // //       {/* Cart Section */}
// // //       <div className="w-full lg:w-1/2 pr-4">
// // //         <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// // //         {cart.items.map((item) => (
// // //           <div key={item._id} className="flex items-center border-b py-4">
// // //             <img
// // //               src={item.variantId?.overviewPicture || "placeholder-image-url"}
// // //               alt={item.variantId?.name || "Product"}
// // //               className="w-20 h-20 object-cover mr-4"
// // //             />
// // //             <div className="flex-grow">
// // //               <h2 className="font-semibold">
// // //                 {item.productId?.name || "Product Name"}
// // //               </h2>
// // //               <p className="text-gray-600">
// // //                 Color: {item.variantId?.color || "N/A"}, Size:{" "}
// // //                 {item.variantId?.size || "N/A"}
// // //               </p>
// // //               <p className="text-gray-600">
// // //                 Price: ${item.variantId?.price?.toFixed(2) || "0.00"}
// // //               </p>
// // //               <div className="flex items-center mt-2">
// // //                 <button
// // //                   onClick={() =>
// // //                     handleQuantityChange(item._id, item.quantity, -1)
// // //                   }
// // //                   className="bg-gray-200 px-2 py-1 rounded"
// // //                 >
// // //                   -
// // //                 </button>
// // //                 <span className="mx-2">{item.quantity}</span>
// // //                 <button
// // //                   onClick={() =>
// // //                     handleQuantityChange(item._id, item.quantity, 1)
// // //                   }
// // //                   className="bg-gray-200 px-2 py-1 rounded"
// // //                   disabled={item.quantity >= item.variantId?.quantity}
// // //                 >
// // //                   +
// // //                 </button>
// // //               </div>
// // //             </div>
// // //             <button
// // //               onClick={() => handleRemoveItem(item._id)}
// // //               className="text-red-500 hover:text-red-700"
// // //             >
// // //               Remove
// // //             </button>
// // //           </div>
// // //         ))}
// // //         <div className="mt-8 text-xl font-bold">
// // //           Total: ${calculateTotalAmount()}
// // //         </div>
// // //       </div>

// // //       {/* Checkout Section */}
// // //       <div className="w-full lg:w-1/2 pl-4 mt-8 lg:mt-0">
// // //         <h1 className="text-2xl font-bold mb-4">Checkout</h1>
// // //         <form onSubmit={handleSubmit}>
// // //           <div className="mb-4">
// // //             <label className="block mb-2">Governorate</label>
// // //             <select
// // //               name="governorate"
// // //               value={shippingAddress.governorate}
// // //               onChange={handleInputChange}
// // //               required
// // //               className="w-full p-2 border rounded"
// // //             >
// // //               <option value="">Select Governorate</option>
// // //               <option value="Amman">Amman</option>
// // //               <option value="Zarqa">Zarqa</option>
// // //             </select>
// // //           </div>
// // //           <div className="mb-4">
// // //             <label className="block mb-2">Address Details</label>
// // //             <textarea
// // //               name="details"
// // //               value={shippingAddress.details}
// // //               onChange={handleInputChange}
// // //               required
// // //               className="w-full p-2 border rounded"
// // //             />
// // //           </div>
// // //           <div className="mb-4">
// // //             <label className="block mb-2">Payment Method</label>
// // //             <select
// // //               value={paymentMethod}
// // //               onChange={(e) => setPaymentMethod(e.target.value)}
// // //               className="w-full p-2 border rounded"
// // //             >
// // //               <option value="PayPal">PayPal</option>
// // //               <option value="CashOnDelivery">Cash on Delivery</option>
// // //             </select>
// // //           </div>
// // //           {paymentMethod === "CashOnDelivery" && (
// // //             <button
// // //               type="submit"
// // //               className="bg-blue-500 text-white p-2 rounded w-full"
// // //               disabled={!isAddressValid}
// // //             >
// // //               Place Order
// // //             </button>
// // //           )}
// // //         </form>
// // //         {paymentMethod === "PayPal" && isAddressValid && (
// // //           <PayPalButtons
// // //             createOrder={createPayPalOrder}
// // //             onApprove={onPayPalApprove}
// // //             onError={(err) => {
// // //               console.error("PayPal error:", err);
// // //               toast.error(
// // //                 "An error occurred with PayPal. Please try again or choose a different payment method."
// // //               );
// // //             }}
// // //             style={{ layout: "vertical" }}
// // //           />
// // //         )}
// // //         {paymentMethod === "PayPal" && !isAddressValid && (
// // //           <div className="text-red-500 mt-4">
// // //             Please fill in the shipping address before proceeding with PayPal.
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CartPage;

// // import React, { useState, useEffect } from "react";
// // import { toast } from "react-toastify";
// // import { useNavigate } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // import { PayPalButtons } from "@paypal/react-paypal-js";
// // import axios from "axios";
// // import useCartStore from "./CartStore";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ShoppingBag, X, ChevronUp, ChevronDown, MapPin } from "lucide-react";
// // import TrackOrder from "../../components/Navbar/TrackOrder";
// // import SearchBar from "../../components/Navbar/SearchBar";
// // import FooterBar from "../../components/Footer/FooterBar";

// // const CartPage = () => {
// //   const navigate = useNavigate();
// //   const { cart, loading, error, fetchCart, updateCartItem, removeCartItem } =
// //     useCartStore();
// //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
// //   const [shippingAddress, setShippingAddress] = useState({
// //     governorate: "",
// //     details: "",
// //   });
// //   const [paymentMethod, setPaymentMethod] = useState("PayPal");
// //   const [isAddressValid, setIsAddressValid] = useState(false);

// //   // All existing useEffect and functions remain exactly the same
// //   useEffect(() => {
// //     fetchCart();
// //   }, [fetchCart]);
// //   useEffect(() => {
// //     validateShippingAddress();
// //   }, [shippingAddress]);

// //   // Keep all original functions unchanged
// //   // const handleRemoveItem = async (itemId) => {
// //   //   /* Original function */
// //   // };
// //   // const handleQuantityChange = async (itemId, currentQuantity, change) => {
// //   //   /* Original function */
// //   // };
// //   // const handleInputChange = (e) => {
// //   //   /* Original function */
// //   // };
// //   // const validateShippingAddress = () => {
// //   //   /* Original function */
// //   // };
// //   // const calculateTotalAmount = () => {
// //   //   /* Original function */
// //   // };
// //   // const handleSubmit = async (e) => {
// //   //   /* Original function */
// //   // };
// //   // const createPayPalOrder = (data, actions) => {
// //   //   /* Original function */
// //   // };
// //   // const onPayPalApprove = async (data, actions) => {
// //   //   /* Original function */
// //   // };
// //   const handleRemoveItem = async (itemId) => {
// //     try {
// //       await removeCartItem(itemId);
// //       toast.success("Item removed from cart");
// //     } catch (error) {
// //       console.error("Error removing item from cart:", error);
// //       toast.error("Failed to remove item. Please try again.");
// //     }
// //   };

// //   const handleQuantityChange = async (itemId, currentQuantity, change) => {
// //     const newQuantity = Math.max(1, currentQuantity + change);
// //     try {
// //       await updateCartItem(itemId, newQuantity);
// //       toast.success("Cart updated successfully");
// //     } catch (error) {
// //       console.error("Error updating cart:", error);
// //       toast.error(
// //         error.response?.data?.message ||
// //           "Failed to update cart. Please try again."
// //       );
// //     }
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setShippingAddress((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const validateShippingAddress = () => {
// //     const isValid = shippingAddress.governorate && shippingAddress.details;
// //     setIsAddressValid(isValid);
// //     return isValid;
// //   };

// //   const calculateTotalAmount = () => {
// //     if (!cart || !cart.items) return "0.00";
// //     return cart.items
// //       .reduce((total, item) => {
// //         const price = item.variantId?.price || 0;
// //         return total + price * item.quantity;
// //       }, 0)
// //       .toFixed(2);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateShippingAddress()) {
// //       toast.error("Please fill in both governorate and address details.");
// //       return;
// //     }

// //     if (!isAuthenticated) {
// //       navigate("/login", { state: { from: "/cart" } });
// //       return;
// //     }

// //     try {
// //       const orderData = {
// //         items: cart.items,
// //         totalAmount: calculateTotalAmount(),
// //         paymentMethod,
// //         shippingAddress,
// //       };

// //       const response = await axios.post("/api/orders/create", orderData);

// //       if (paymentMethod === "CashOnDelivery") {
// //         await axios.post("/api/cart/clear");
// //         navigate("/order-confirmation", {
// //           state: { order: response.data.order },
// //         });
// //       }
// //     } catch (err) {
// //       console.error("Error creating order:", err);
// //       toast.error(
// //         err.response?.data?.message ||
// //           "An error occurred while creating the order"
// //       );
// //     }
// //   };

// //   const createPayPalOrder = (data, actions) => {
// //     if (!validateShippingAddress()) {
// //       toast.error(
// //         "Please fill in both governorate and address details before proceeding with PayPal."
// //       );
// //       return Promise.reject(new Error("Address validation failed"));
// //     }

// //     return actions.order.create({
// //       purchase_units: [
// //         {
// //           amount: {
// //             value: calculateTotalAmount(),
// //           },
// //         },
// //       ],
// //     });
// //   };
// //   const onPayPalApprove = async (data, actions) => {
// //     try {
// //       const details = await actions.order.capture();
// //       const orderItems = cart.items.map((item) => ({
// //         productId: item.productId._id,
// //         variantId: item.variantId._id,
// //         quantity: item.quantity,
// //         price: item.variantId.price,
// //         productName: item.productId.name,
// //         color: item.variantId.color,
// //         size: Array.isArray(item.variantId.size)
// //           ? item.variantId.size[0]
// //           : item.variantId.size,
// //         image: item.variantId.overviewPicture,
// //       }));

// //       const orderData = {
// //         items: orderItems,
// //         totalAmount: calculateTotalAmount(),
// //         paymentMethod: "PayPal",
// //         shippingAddress,
// //         paypalOrderId: details.id,
// //       };

// //       console.log("Sending order data:", orderData); // للتحقق من البيانات المرسلة

// //       const token = localStorage.getItem("token");
// //       const response = await axios.post("/api/orders/create", orderData, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });

// //       console.log("Order creation response:", response.data); // للتحقق من الاستجابة

// //       try {
// //         await axios.post(
// //           "/api/cart/clearCart",
// //           {},
// //           {
// //             headers: {
// //               Authorization: `Bearer ${localStorage.getItem("token")}`,
// //             },
// //           }
// //         );
// //         console.log("Cart cleared successfully");
// //       } catch (clearError) {
// //         console.error("Error clearing cart:", clearError);
// //         // يمكنك اختيار ما إذا كنت تريد إظهار رسالة خطأ للمستخدم هنا أم لا
// //       }
// //       navigate("/order-confirmation", {
// //         state: { order: response.data.order },
// //       });
// //     } catch (err) {
// //       console.error("PayPal error:", err);
// //       if (err.response) {
// //         console.error("Error response:", err.response.data);
// //         console.error("Error status:", err.response.status);
// //       }
// //       toast.error(
// //         "An error occurred during PayPal checkout. Please try again."
// //       );
// //     }
// //   };

// //   if (loading)
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //         <motion.div
// //           animate={{ rotate: 360 }}
// //           transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
// //         >
// //           <ShoppingBag className="w-8 h-8 text-[#193db0]" />
// //         </motion.div>
// //       </div>
// //     );

// //   if (error)
// //     return (
// //       <motion.div
// //         initial={{ opacity: 0, y: 10 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         className="text-center mt-8 text-red-500 p-3 text-sm bg-red-50 rounded-md max-w-md mx-auto"
// //       >
// //         {error}
// //       </motion.div>
// //     );

// //   if (!cart || !cart.items || cart.items.length === 0)
// //     return (
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         className="min-h-screen flex flex-col items-center justify-center space-y-3 bg-gray-50"
// //       >
// //         <ShoppingBag className="w-10 h-10 text-[#193db0] mb-2" />
// //         <p className="text-lg text-gray-600">Your cart is empty</p>
// //         <motion.button
// //           whileHover={{ scale: 1.02 }}
// //           whileTap={{ scale: 0.98 }}
// //           onClick={() => navigate("/")}
// //           className="text-sm px-4 py-2 bg-[#193db0] text-white rounded-md hover:bg-[#142d80] transition-colors"
// //         >
// //           Continue Shopping
// //         </motion.button>
// //       </motion.div>
// //     );

// //   return (
// //     <div className="min-h-screen bg-gray-50 ">
// //       <TrackOrder />
// //       <SearchBar />
// //       <br />
// //       <br />
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
// //       >
// //         <div className="flex flex-col lg:flex-row gap-8">
// //           {/* Cart Items Section */}
// //           <div className="flex-1">
// //             <div className="flex items-center space-x-3 mb-6">
// //               <ShoppingBag className="w-5 h-5 text-[#193db0]" />
// //               <h1 className="text-xl font-medium text-gray-800">
// //                 Shopping Cart
// //               </h1>
// //               <span className="text-sm text-gray-500">
// //                 ({cart.items.length} items)
// //               </span>
// //             </div>

// //             <AnimatePresence>
// //               {cart.items.map((item, index) => (
// //                 <motion.div
// //                   key={item._id}
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, x: -10 }}
// //                   transition={{ delay: index * 0.05 }}
// //                   className="bg-white rounded-lg mb-3 overflow-hidden border border-gray-100"
// //                 >
// //                   <div className="p-4 flex items-center gap-4">
// //                     <div className="relative group">
// //                       <img
// //                         src={
// //                           item.variantId?.overviewPicture ||
// //                           "placeholder-image-url"
// //                         }
// //                         alt={item.variantId?.name || "Product"}
// //                         className="w-16 h-16 object-cover rounded-md"
// //                       />
// //                       <motion.div
// //                         whileHover={{ opacity: 1 }}
// //                         className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all rounded-md"
// //                       />
// //                     </div>

// //                     <div className="flex-1 min-w-0">
// //                       <h3 className="text-sm font-medium text-gray-800 truncate">
// //                         {item.productId?.name || "Product Name"}
// //                       </h3>
// //                       <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
// //                         <span>{item.variantId?.color || "N/A"}</span>
// //                         <span>•</span>
// //                         <span>Size: {item.variantId?.size || "N/A"}</span>
// //                       </div>
// //                       <div className="mt-2 text-sm font-medium text-[#193db0]">
// //                         ${item.variantId?.price?.toFixed(2) || "0.00"}
// //                       </div>
// //                     </div>

// //                     <div className="flex items-center gap-3">
// //                       <div className="flex items-center space-x-2">
// //                         <motion.button
// //                           whileTap={{ scale: 0.95 }}
// //                           onClick={() =>
// //                             handleQuantityChange(item._id, item.quantity, -1)
// //                           }
// //                           className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-[#193db0] transition-colors"
// //                         >
// //                           <ChevronDown className="w-4 h-4" />
// //                         </motion.button>
// //                         <span className="text-sm w-8 text-center">
// //                           {item.quantity}
// //                         </span>
// //                         <motion.button
// //                           whileTap={{ scale: 0.95 }}
// //                           onClick={() =>
// //                             handleQuantityChange(item._id, item.quantity, 1)
// //                           }
// //                           disabled={item.quantity >= item.variantId?.quantity}
// //                           className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-[#193db0] transition-colors disabled:opacity-50"
// //                         >
// //                           <ChevronUp className="w-4 h-4" />
// //                         </motion.button>
// //                       </div>

// //                       <motion.button
// //                         whileTap={{ scale: 0.95 }}
// //                         onClick={() => handleRemoveItem(item._id)}
// //                         className="ml-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
// //                       >
// //                         <X className="w-4 h-4" />
// //                       </motion.button>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </AnimatePresence>

// //             <div className="mt-4 bg-white rounded-lg p-4 border border-gray-100">
// //               <div className="flex justify-between items-center">
// //                 <span className="text-sm text-gray-600">Total</span>
// //                 <span className="text-lg font-medium text-[#193db0]">
// //                   ${calculateTotalAmount()}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Checkout Section */}
// //           <div className="lg:w-[380px]">
// //             <div className="bg-white rounded-lg border border-gray-100 p-6">
// //               <div className="flex items-center space-x-3 mb-6">
// //                 <MapPin className="w-5 h-5 text-[#193db0]" />
// //                 <h2 className="text-lg font-medium text-gray-800">
// //                   Shipping Details
// //                 </h2>
// //               </div>

// //               <form onSubmit={handleSubmit} className="space-y-4">
// //                 <div>
// //                   <label className="block text-xs font-medium text-gray-700 mb-1.5">
// //                     Governorate
// //                   </label>
// //                   <select
// //                     name="governorate"
// //                     value={shippingAddress.governorate}
// //                     onChange={handleInputChange}
// //                     required
// //                     className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-[#193db0] focus:border-[#193db0] transition-all"
// //                   >
// //                     <option value="">Select Governorate</option>
// //                     <option value="Amman">Amman</option>
// //                     <option value="Zarqa">Zarqa</option>
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <label className="block text-xs font-medium text-gray-700 mb-1.5">
// //                     Address Details
// //                   </label>
// //                   <textarea
// //                     name="details"
// //                     value={shippingAddress.details}
// //                     onChange={handleInputChange}
// //                     required
// //                     className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-[#193db0] focus:border-[#193db0] transition-all h-24 resize-none"
// //                     placeholder="Enter your detailed address..."
// //                   />
// //                 </div>

// //                 <div className="pt-2">
// //                   <label className="block text-xs font-medium text-gray-700 mb-3">
// //                     Payment Method
// //                   </label>
// //                   <div className="grid grid-cols-2 gap-3">
// //                     <motion.button
// //                       whileTap={{ scale: 0.98 }}
// //                       type="button"
// //                       onClick={() => setPaymentMethod("PayPal")}
// //                       className={`px-3 py-2 text-sm rounded-md border ${
// //                         paymentMethod === "PayPal"
// //                           ? "border-[#193db0] bg-blue-50 text-[#193db0]"
// //                           : "border-gray-200 text-gray-600 hover:border-gray-300"
// //                       } transition-all text-center`}
// //                     >
// //                       PayPal
// //                     </motion.button>
// //                     <motion.button
// //                       whileTap={{ scale: 0.98 }}
// //                       type="button"
// //                       onClick={() => setPaymentMethod("CashOnDelivery")}
// //                       className={`px-3 py-2 text-sm rounded-md border ${
// //                         paymentMethod === "CashOnDelivery"
// //                           ? "border-[#193db0] bg-blue-50 text-[#193db0]"
// //                           : "border-gray-200 text-gray-600 hover:border-gray-300"
// //                       } transition-all text-center`}
// //                     >
// //                       Cash on Delivery
// //                     </motion.button>
// //                   </div>
// //                 </div>

// //                 {paymentMethod === "CashOnDelivery" && (
// //                   <motion.button
// //                     initial={{ opacity: 0, y: 10 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     whileHover={{ scale: 1.01 }}
// //                     whileTap={{ scale: 0.99 }}
// //                     type="submit"
// //                     disabled={!isAddressValid}
// //                     className="w-full mt-4 px-4 py-2.5 bg-[#193db0] text-white text-sm font-medium rounded-md hover:bg-[#142d80] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
// //                   >
// //                     Place Order
// //                   </motion.button>
// //                 )}
// //               </form>

// //               {paymentMethod === "PayPal" && isAddressValid && (
// //                 <motion.div
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   className="mt-4"
// //                 >
// //                   <PayPalButtons
// //                     createOrder={createPayPalOrder}
// //                     onApprove={onPayPalApprove}
// //                     onError={(err) => {
// //                       console.error("PayPal error:", err);
// //                       toast.error("PayPal error occurred. Please try again.");
// //                     }}
// //                     style={{ layout: "vertical" }}
// //                   />
// //                 </motion.div>
// //               )}

// //               {paymentMethod === "PayPal" && !isAddressValid && (
// //                 <motion.div
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   className="mt-4 p-3 bg-red-50 text-red-600 text-xs rounded-md text-center"
// //                 >
// //                   Please complete your shipping address first
// //                 </motion.div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </motion.div>
// //       <FooterBar />
// //     </div>
// //   );
// // };

// // export default CartPage;

// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { PayPalButtons } from "@paypal/react-paypal-js";
// import axios from "axios";
// import useCartStore from "./CartStore";
// import { motion, AnimatePresence } from "framer-motion";
// import { ShoppingBag, X, ChevronUp, ChevronDown, MapPin } from "lucide-react";
// import TrackOrder from "../../components/Navbar/TrackOrder";
// import SearchBar from "../../components/Navbar/SearchBar";
// import FooterBar from "../../components/Footer/FooterBar";

// const CartPage = () => {
//   const navigate = useNavigate();
//   const { cart, loading, error, fetchCart, updateCartItem, removeCartItem } =
//     useCartStore();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const [shippingAddress, setShippingAddress] = useState({
//     governorate: "",
//     details: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("PayPal");
//   const [isAddressValid, setIsAddressValid] = useState(false);

//   useEffect(() => {
//     fetchCart();
//   }, [fetchCart]);

//   useEffect(() => {
//     validateShippingAddress();
//   }, [shippingAddress]);

// const handleRemoveItem = async (itemId) => {
//   try {
//     await removeCartItem(itemId);
//     toast.success("Item removed from cart");
//   } catch (error) {
//     console.error("Error removing item from cart:", error);
//     toast.error("Failed to remove item. Please try again.");
//   }
// };

// const handleQuantityChange = async (itemId, currentQuantity, change) => {
//   const newQuantity = Math.max(1, currentQuantity + change);
//   try {
//     await updateCartItem(itemId, newQuantity);
//     toast.success("Cart updated successfully");
//   } catch (error) {
//     console.error("Error updating cart:", error);
//     toast.error(
//       error.response?.data?.message ||
//         "Failed to update cart. Please try again."
//     );
//   }
// };

// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setShippingAddress((prev) => ({ ...prev, [name]: value }));
// };

// const validateShippingAddress = () => {
//   const isValid = shippingAddress.governorate && shippingAddress.details;
//   setIsAddressValid(isValid);
//   return isValid;
// };

// const calculateTotalAmount = () => {
//   if (!cart || !cart.items) return "0.00";
//   return cart.items
//     .reduce((total, item) => {
//       const price = item.variantId?.price || 0;
//       return total + price * item.quantity;
//     }, 0)
//     .toFixed(2);
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (!validateShippingAddress()) {
//     toast.error("Please fill in both governorate and address details.");
//     return;
//   }

//   if (!isAuthenticated) {
//     navigate("/login", { state: { from: "/cart" } });
//     return;
//   }

//   try {
//     const orderData = {
//       items: cart.items,
//       totalAmount: calculateTotalAmount(),
//       paymentMethod,
//       shippingAddress,
//     };

//     const response = await axios.post("/api/orders/create", orderData);

//     if (paymentMethod === "CashOnDelivery") {
//       await axios.post("/api/cart/clear");
//       navigate("/order-confirmation", {
//         state: { order: response.data.order },
//       });
//     }
//   } catch (err) {
//     console.error("Error creating order:", err);
//     toast.error(
//       err.response?.data?.message ||
//         "An error occurred while creating the order"
//     );
//   }
// };

// const createPayPalOrder = (data, actions) => {
//   if (!validateShippingAddress()) {
//     toast.error(
//       "Please fill in both governorate and address details before proceeding with PayPal."
//     );
//     return Promise.reject(new Error("Address validation failed"));
//   }

//   return actions.order.create({
//     purchase_units: [
//       {
//         amount: {
//           value: calculateTotalAmount(),
//         },
//       },
//     ],
//   });
// };

// const onPayPalApprove = async (data, actions) => {
//   try {
//     const details = await actions.order.capture();
//     const orderItems = cart.items.map((item) => ({
//       productId: item.productId._id,
//       variantId: item.variantId._id,
//       quantity: item.quantity,
//       price: item.variantId.price,
//       productName: item.productId.name,
//       color: item.variantId.color,
//       size: Array.isArray(item.variantId.size)
//         ? item.variantId.size[0]
//         : item.variantId.size,
//       image: item.variantId.overviewPicture,
//     }));

//     const orderData = {
//       items: orderItems,
//       totalAmount: calculateTotalAmount(),
//       paymentMethod: "PayPal",
//       shippingAddress,
//       paypalOrderId: details.id,
//     };

//     const token = localStorage.getItem("token");
//     const response = await axios.post("/api/orders/create", orderData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     try {
//       await axios.post(
//         "/api/cart/clearCart",
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//     } catch (clearError) {
//       console.error("Error clearing cart:", clearError);
//     }

//     navigate("/order-confirmation", {
//       state: { order: response.data.order },
//     });
//   } catch (err) {
//     console.error("PayPal error:", err);
//     if (err.response) {
//       console.error("Error response:", err.response.data);
//       console.error("Error status:", err.response.status);
//     }
//     toast.error(
//       "An error occurred during PayPal checkout. Please try again."
//     );
//   }
// };

//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
//         >
//           <ShoppingBag className="w-8 h-8 text-[#193db0]" />
//         </motion.div>
//       </div>
//     );

//   if (error)
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mt-8 text-red-500 p-3 text-base bg-red-50 rounded-md max-w-md mx-auto"
//       >
//         {error}
//       </motion.div>
//     );

//   if (!cart || !cart.items || cart.items.length === 0)
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="min-h-screen flex flex-col items-center justify-center space-y-3 bg-gray-50"
//       >
//         <ShoppingBag className="w-12 h-12 text-[#193db0] mb-2" />
//         <p className="text-xl text-gray-600">Your cart is empty</p>
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={() => navigate("/")}
//           className="text-base px-5 py-2.5 bg-[#193db0] text-white rounded-md hover:bg-[#142d80] transition-colors"
//         >
//           Continue Shopping
//         </motion.button>
//       </motion.div>
//     );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <TrackOrder />
//       <SearchBar />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
//       >
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Cart Items Section */}
//           <div className="flex-1">
//             <div className="flex items-center space-x-3 mb-6">
//               <ShoppingBag className="w-6 h-6 text-[#193db0]" />
//               <h1 className="text-2xl font-medium text-gray-800">
//                 Shopping Cart
//               </h1>
//               <span className="text-base text-gray-500">
//                 ({cart.items.length} items)
//               </span>
//             </div>

//             <AnimatePresence>
//               {cart.items.map((item, index) => (
//                 <motion.div
//                   key={item._id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, x: -10 }}
//                   transition={{ delay: index * 0.05 }}
//                   className="bg-white rounded-lg mb-3 overflow-hidden border border-gray-100"
//                 >
//                   <div className="p-4 flex items-center gap-4">
//                     <div className="relative group">
//                       <img
//                         src={
//                           item.variantId?.overviewPicture ||
//                           "placeholder-image-url"
//                         }
//                         alt={item.variantId?.name || "Product"}
//                         className="w-20 h-20 object-cover rounded-md"
//                       />
//                       <motion.div
//                         whileHover={{ opacity: 1 }}
//                         className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all rounded-md"
//                       />
//                     </div>

//                     <div className="flex-1 min-w-0">
//                       <h3 className="text-lg font-medium text-gray-800 truncate">
//                         {item.productId?.name || "Product Name"}
//                       </h3>
//                       <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
//                         <span>{item.variantId?.color || "N/A"}</span>
//                         <span>•</span>
//                         <span>Size: {item.variantId?.size || "N/A"}</span>
//                       </div>
//                       <div className="mt-2 text-lg font-medium text-[#193db0]">
//                         ${item.variantId?.price?.toFixed(2) || "0.00"}
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <div className="flex items-center space-x-2">
//                         <motion.button
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() =>
//                             handleQuantityChange(item._id, item.quantity, -1)
//                           }
//                           className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-[#193db0] transition-colors"
//                         >
//                           <ChevronDown className="w-5 h-5" />
//                         </motion.button>
//                         <span className="text-base w-8 text-center">
//                           {item.quantity}
//                         </span>
//                         <motion.button
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() =>
//                             handleQuantityChange(item._id, item.quantity, 1)
//                           }
//                           disabled={item.quantity >= item.variantId?.quantity}
//                           className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-[#193db0] transition-colors disabled:opacity-50"
//                         >
//                           <ChevronUp className="w-5 h-5" />
//                         </motion.button>
//                       </div>

//                       <motion.button
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => handleRemoveItem(item._id)}
//                         className="ml-2 p-1.5 text-gray-400 hover:text-red-500 transition-colors"
//                       >
//                         <X className="w-5 h-5" />
//                       </motion.button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>

//             <div className="mt-4 bg-white rounded-lg p-4 border border-gray-100">
//               <div className="flex justify-between items-center">
//                 <span className="text-base text-gray-600">Total</span>
//                 <span className="text-xl font-medium text-[#193db0]">
//                   ${calculateTotalAmount()}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Checkout Section */}
//           <div className="lg:w-[400px]">
//             <div className="bg-white rounded-lg border border-gray-100 p-6">
//               <div className="flex items-center space-x-3 mb-6">
//                 <MapPin className="w-6 h-6 text-[#193db0]" />
//                 <h2 className="text-xl font-medium text-gray-800">
//                   Shipping Details
//                 </h2>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                     Governorate
//                   </label>
//                   <select
//                     name="governorate"
//                     value={shippingAddress.governorate}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-3 py-2.5 text-base border border-gray-200 rounded-md focus:ring-1 focus:ring-[#193db0] focus:border-[#193db0] transition-all"
//                   >
//                     <option value="">Select Governorate</option>
//                     <option value="Amman">Amman</option>
//                     <option value="Zarqa">Zarqa</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                     Address Details
//                   </label>
//                   <textarea
//                     name="details"
//                     value={shippingAddress.details}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-3 py-2.5 text-base border border-gray-200 rounded-md focus:ring-1 focus:ring-[#193db0] focus:border-[#193db0] transition-all h-24 resize-none"
//                     placeholder="Enter your detailed address..."
//                   />
//                 </div>

//                 <div className="pt-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-3">
//                     Payment Method
//                   </label>
//                   <div className="grid grid-cols-2 gap-3">
//                     <motion.button
//                       whileTap={{ scale: 0.98 }}
//                       type="button"
//                       onClick={() => setPaymentMethod("PayPal")}
//                       className={`px-4 py-2.5 text-base rounded-md border ${
//                         paymentMethod === "PayPal"
//                           ? "border-[#193db0] bg-blue-50 text-[#193db0]"
//                           : "border-gray-200 text-gray-600 hover:border-gray-300"
//                       } transition-all text-center`}
//                     >
//                       PayPal
//                     </motion.button>
//                     <motion.button
//                       whileTap={{ scale: 0.98 }}
//                       type="button"
//                       onClick={() => setPaymentMethod("CashOnDelivery")}
//                       className={`px-4 py-2.5 text-base rounded-md border ${
//                         paymentMethod === "CashOnDelivery"
//                           ? "border-[#193db0] bg-blue-50 text-[#193db0]"
//                           : "border-gray-200 text-gray-600 hover:border-gray-300"
//                       } transition-all text-center`}
//                     >
//                       Cash on Delivery
//                     </motion.button>
//                   </div>
//                 </div>

//                 {paymentMethod === "CashOnDelivery" && (
//                   <motion.button
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     whileHover={{ scale: 1.01 }}
//                     whileTap={{ scale: 0.99 }}
//                     type="submit"
//                     disabled={!isAddressValid}
//                     className="w-full mt-4 px-4 py-3 bg-[#193db0] text-white text-base font-medium rounded-md hover:bg-[#142d80] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                   >
//                     Place Order
//                   </motion.button>
//                 )}
//               </form>

//               {paymentMethod === "PayPal" && isAddressValid && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="mt-4"
//                 >
//                   <PayPalButtons
//                     createOrder={createPayPalOrder}
//                     onApprove={onPayPalApprove}
//                     onError={(err) => {
//                       console.error("PayPal error:", err);
//                       toast.error("PayPal error occurred. Please try again.");
//                     }}
//                     style={{ layout: "vertical" }}
//                   />
//                 </motion.div>
//               )}

//               {paymentMethod === "PayPal" && !isAddressValid && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-md text-center"
//                 >
//                   Please complete your shipping address first
//                 </motion.div>
//               )}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//       <br />
//       <br />
//       <FooterBar />
//     </div>
//   );
// };

// export default CartPage;

// ----------------------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { PayPalButtons } from "@paypal/react-paypal-js";
// import axios from "axios";
// import useCartStore from "./CartStore";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ShoppingBag,
//   Trash2,
//   Plus,
//   Minus,
//   MapPin,
//   CreditCard,
//   Truck,
//   AlertCircle
// } from "lucide-react";

// const CartPage = () => {
//   const navigate = useNavigate();
//   const { cart, loading, error, fetchCart, updateCartItem, removeCartItem } =
//     useCartStore();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const [shippingAddress, setShippingAddress] = useState({
//     governorate: "",
//     details: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("PayPal");
//   const [isAddressValid, setIsAddressValid] = useState(false);

//   // Keep all the original functions unchanged
//   useEffect(() => {
//     fetchCart();
//   }, [fetchCart]);
//   useEffect(() => {
//     validateShippingAddress();
//   }, [shippingAddress]);

//   // // All original handlers remain exactly the same
//   // const handleRemoveItem = async (itemId) => {
//   //   /* Original function */
//   // };
//   // const handleQuantityChange = async (itemId, currentQuantity, change) => {
//   //   /* Original function */
//   // };
//   // const handleInputChange = (e) => {
//   //   /* Original function */
//   // };
//   // const validateShippingAddress = () => {
//   //   /* Original function */
//   // };
//   // const calculateTotalAmount = () => {
//   //   /* Original function */
//   // };
//   // const handleSubmit = async (e) => {
//   //   /* Original function */
//   // };
//   // const createPayPalOrder = (data, actions) => {
//   //   /* Original function */
//   // };
//   // const onPayPalApprove = async (data, actions) => {
//   //   /* Original function */
//   // };

//   const handleRemoveItem = async (itemId) => {
//     try {
//       await removeCartItem(itemId);
//       toast.success("Item removed from cart");
//     } catch (error) {
//       console.error("Error removing item from cart:", error);
//       toast.error("Failed to remove item. Please try again.");
//     }
//   };

//   const handleQuantityChange = async (itemId, currentQuantity, change) => {
//     const newQuantity = Math.max(1, currentQuantity + change);
//     try {
//       await updateCartItem(itemId, newQuantity);
//       toast.success("Cart updated successfully");
//     } catch (error) {
//       console.error("Error updating cart:", error);
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to update cart. Please try again."
//       );
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShippingAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const validateShippingAddress = () => {
//     const isValid = shippingAddress.governorate && shippingAddress.details;
//     setIsAddressValid(isValid);
//     return isValid;
//   };

//   const calculateTotalAmount = () => {
//     if (!cart || !cart.items) return "0.00";
//     return cart.items
//       .reduce((total, item) => {
//         const price = item.variantId?.price || 0;
//         return total + price * item.quantity;
//       }, 0)
//       .toFixed(2);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateShippingAddress()) {
//       toast.error("Please fill in both governorate and address details.");
//       return;
//     }

//     if (!isAuthenticated) {
//       navigate("/login", { state: { from: "/cart" } });
//       return;
//     }

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
//       toast.error(
//         err.response?.data?.message ||
//           "An error occurred while creating the order"
//       );
//     }
//   };

//   const createPayPalOrder = (data, actions) => {
//     if (!validateShippingAddress()) {
//       toast.error(
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
//       const orderItems = cart.items.map((item) => ({
//         productId: item.productId._id,
//         variantId: item.variantId._id,
//         quantity: item.quantity,
//         price: item.variantId.price,
//         productName: item.productId.name,
//         color: item.variantId.color,
//         size: Array.isArray(item.variantId.size)
//           ? item.variantId.size[0]
//           : item.variantId.size,
//         image: item.variantId.overviewPicture,
//       }));

//       const orderData = {
//         items: orderItems,
//         totalAmount: calculateTotalAmount(),
//         paymentMethod: "PayPal",
//         shippingAddress,
//         paypalOrderId: details.id,
//       };

//       const token = localStorage.getItem("token");
//       const response = await axios.post("/api/orders/create", orderData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       try {
//         await axios.post(
//           "/api/cart/clearCart",
//           {},
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//       } catch (clearError) {
//         console.error("Error clearing cart:", clearError);
//       }

//       navigate("/order-confirmation", {
//         state: { order: response.data.order },
//       });
//     } catch (err) {
//       console.error("PayPal error:", err);
//       if (err.response) {
//         console.error("Error response:", err.response.data);
//         console.error("Error status:", err.response.status);
//       }
//       toast.error(
//         "An error occurred during PayPal checkout. Please try again."
//       );
//     }
//   };

//   // Loading State
//   if (loading)
//     return (
//       <div className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
//           className="p-4 bg-white rounded-full shadow-lg"
//         >
//           <ShoppingBag className="w-8 h-8 text-[#193db0]" />
//         </motion.div>
//       </div>
//     );

//   // Error State
//   if (error)
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="min-h-screen flex items-center justify-center p-4"
//       >
//         <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
//           <div className="flex items-center justify-center text-red-500 mb-4">
//             <AlertCircle className="w-12 h-12" />
//           </div>
//           <p className="text-center text-gray-800 text-lg">{error}</p>
//           <button
//             onClick={() => navigate("/")}
//             className="mt-4 w-full py-2 bg-[#193db0] text-white rounded-lg hover:bg-[#142d80] transition-colors"
//           >
//             Return to Home
//           </button>
//         </div>
//       </motion.div>
//     );

//   // Empty Cart State
//   if (!cart || !cart.items || cart.items.length === 0)
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="min-h-screen flex items-center justify-center p-4 bg-gray-50"
//       >
//         <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
//           <motion.div
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.3 }}
//             className="inline-block p-4 bg-blue-50 rounded-full mb-4"
//           >
//             <ShoppingBag className="w-10 h-10 text-[#193db0]" />
//           </motion.div>
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//             Your cart is empty
//           </h2>
//           <p className="text-gray-500 mb-6">
//             Start shopping to add items to your cart
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => navigate("/")}
//             className="px-6 py-3 bg-[#193db0] text-white rounded-lg hover:bg-[#142d80] transition-all"
//           >
//             Continue Shopping
//           </motion.button>
//         </div>
//       </motion.div>
//     );

//   // Main Cart View
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8"
//         >
//           <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
//             <ShoppingBag className="w-8 h-8 text-[#193db0]" />
//             Shopping Cart
//           </h1>
//         </motion.div>

//         <div className="lg:grid lg:grid-cols-12 lg:gap-8">
//           {/* Cart Items Section */}
//           <div className="lg:col-span-7 xl:col-span-8">
//             <AnimatePresence mode="popLayout">
//               {cart.items.map((item, index) => (
//                 <motion.div
//                   key={item._id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden hover:shadow-md transition-shadow"
//                 >
//                   <div className="p-6">
//                     <div className="flex items-start gap-6">
//                       {/* Product Image */}
//                       <motion.div
//                         whileHover={{ scale: 1.05 }}
//                         className="relative rounded-lg overflow-hidden flex-shrink-0"
//                       >
//                         <img
//                           src={
//                             item.variantId?.overviewPicture ||
//                             "placeholder-image-url"
//                           }
//                           alt={item.productId?.name}
//                           className="w-28 h-28 object-cover rounded-lg"
//                         />
//                         <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg" />
//                       </motion.div>

//                       {/* Product Details */}
//                       <div className="flex-1 min-w-0">
//                         <div className="flex justify-between">
//                           <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                             {item.productId?.name}
//                           </h3>
//                           <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             onClick={() => handleRemoveItem(item._id)}
//                             className="text-gray-400 hover:text-red-500 transition-colors"
//                           >
//                             <Trash2 className="w-5 h-5" />
//                           </motion.button>
//                         </div>

//                         <div className="mt-1 flex flex-wrap gap-2">
//                           <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
//                             {item.variantId?.color || "N/A"}
//                           </span>
//                           <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
//                             Size: {item.variantId?.size || "N/A"}
//                           </span>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between">
//                           <span className="text-xl font-semibold text-[#193db0]">
//                             ${item.variantId?.price?.toFixed(2)}
//                           </span>

//                           <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
//                             <motion.button
//                               whileHover={{ scale: 1.1 }}
//                               whileTap={{ scale: 0.95 }}
//                               onClick={() =>
//                                 handleQuantityChange(
//                                   item._id,
//                                   item.quantity,
//                                   -1
//                                 )
//                               }
//                               className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#193db0] hover:bg-blue-50 rounded-md transition-all"
//                             >
//                               <Minus className="w-4 h-4" />
//                             </motion.button>
//                             <span className="w-10 text-center font-medium text-gray-900">
//                               {item.quantity}
//                             </span>
//                             <motion.button
//                               whileHover={{ scale: 1.1 }}
//                               whileTap={{ scale: 0.95 }}
//                               onClick={() =>
//                                 handleQuantityChange(item._id, item.quantity, 1)
//                               }
//                               disabled={
//                                 item.quantity >= item.variantId?.quantity
//                               }
//                               className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#193db0] hover:bg-blue-50 rounded-md transition-all disabled:opacity-50"
//                             >
//                               <Plus className="w-4 h-4" />
//                             </motion.button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>

//             {/* Order Summary - Mobile */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="lg:hidden mt-6 bg-white rounded-xl shadow-sm p-6"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-lg font-medium text-gray-900">Total</span>
//                 <span className="text-2xl font-bold text-[#193db0]">
//                   ${calculateTotalAmount()}
//                 </span>
//               </div>
//             </motion.div>
//           </div>

//           {/* Checkout Section */}
//           <div className="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0">
//             <div className="sticky top-8">
//               {/* Order Summary - Desktop */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="hidden lg:block bg-white rounded-xl shadow-sm p-6 mb-6"
//               >
//                 <h2 className="text-lg font-semibold text-gray-900 mb-4">
//                   Order Summary
//                 </h2>
//                 <div className="flex justify-between items-center pb-4 border-b border-gray-100">
//                   <span className="text-gray-600">Subtotal</span>
//                   <span className="text-lg font-medium text-gray-900">
//                     ${calculateTotalAmount()}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center pt-4">
//                   <span className="text-gray-900 font-medium">Total</span>
//                   <span className="text-2xl font-bold text-[#193db0]">
//                     ${calculateTotalAmount()}
//                   </span>
//                 </div>
//               </motion.div>

//               {/* Shipping Details Form */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="bg-white rounded-xl shadow-sm overflow-hidden"
//               >
//                 <div className="p-6">
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="p-2 bg-blue-50 rounded-lg">
//                       <MapPin className="w-5 h-5 text-[#193db0]" />
//                     </div>
//                     <h2 className="text-lg font-semibold text-gray-900">
//                       Shipping Details
//                     </h2>
//                   </div>

//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Governorate
//                       </label>
//                       <div className="relative">
//                         <select
//                           name="governorate"
//                           value={shippingAddress.governorate}
//                           onChange={handleInputChange}
//                           required
//                           className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#193db0] focus:border-transparent transition-all appearance-none"
//                         >
//                           <option value="">Select Governorate</option>
//                           <option value="Amman">Amman</option>
//                           <option value="Zarqa">Zarqa</option>
//                         </select>
//                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
//                           <svg
//                             className="h-5 w-5"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </div>
//                       </div>
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
//                         placeholder="Enter your full address details..."
//                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#193db0] focus:border-transparent transition-all resize-none h-32"
//                       />
//                     </div>

//                     <div className="pt-4">
//                       <label className="block text-sm font-medium text-gray-700 mb-3">
//                         Payment Method
//                       </label>
//                       <div className="grid grid-cols-2 gap-3">
//                         <motion.button
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           type="button"
//                           onClick={() => setPaymentMethod("PayPal")}
//                           className={`relative p-4 flex flex-col items-center gap-2 rounded-lg border-2 ${
//                             paymentMethod === "PayPal"
//                               ? "border-[#193db0] bg-blue-50"
//                               : "border-gray-200 hover:border-gray-300"
//                           } transition-all group`}
//                         >
//                           <CreditCard
//                             className={`w-6 h-6 ${
//                               paymentMethod === "PayPal"
//                                 ? "text-[#193db0]"
//                                 : "text-gray-400 group-hover:text-gray-500"
//                             }`}
//                           />
//                           <span
//                             className={`text-sm font-medium ${
//                               paymentMethod === "PayPal"
//                                 ? "text-[#193db0]"
//                                 : "text-gray-700"
//                             }`}
//                           >
//                             PayPal
//                           </span>
//                           {paymentMethod === "PayPal" && (
//                             <motion.div
//                               layoutId="paymentMethod"
//                               className="absolute -top-1 -right-1 w-4 h-4 bg-[#193db0] rounded-full flex items-center justify-center"
//                             >
//                               <div className="w-2 h-2 bg-white rounded-full" />
//                             </motion.div>
//                           )}
//                         </motion.button>

//                         <motion.button
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           type="button"
//                           onClick={() => setPaymentMethod("CashOnDelivery")}
//                           className={`relative p-4 flex flex-col items-center gap-2 rounded-lg border-2 ${
//                             paymentMethod === "CashOnDelivery"
//                               ? "border-[#193db0] bg-blue-50"
//                               : "border-gray-200 hover:border-gray-300"
//                           } transition-all group`}
//                         >
//                           <Truck
//                             className={`w-6 h-6 ${
//                               paymentMethod === "CashOnDelivery"
//                                 ? "text-[#193db0]"
//                                 : "text-gray-400 group-hover:text-gray-500"
//                             }`}
//                           />
//                           <span
//                             className={`text-sm font-medium ${
//                               paymentMethod === "CashOnDelivery"
//                                 ? "text-[#193db0]"
//                                 : "text-gray-700"
//                             }`}
//                           >
//                             Cash on Delivery
//                           </span>
//                           {paymentMethod === "CashOnDelivery" && (
//                             <motion.div
//                               layoutId="paymentMethod"
//                               className="absolute -top-1 -right-1 w-4 h-4 bg-[#193db0] rounded-full flex items-center justify-center"
//                             >
//                               <div className="w-2 h-2 bg-white rounded-full" />
//                             </motion.div>
//                           )}
//                         </motion.button>
//                       </div>
//                     </div>

//                     {paymentMethod === "CashOnDelivery" && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="pt-4"
//                       >
//                         <motion.button
//                           whileHover={{ scale: 1.01 }}
//                           whileTap={{ scale: 0.99 }}
//                           type="submit"
//                           disabled={!isAddressValid}
//                           className="w-full py-3 px-4 bg-[#193db0] text-white text-sm font-semibold rounded-lg
//                                    hover:bg-[#142d80] disabled:opacity-50 disabled:cursor-not-allowed
//                                    shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
//                         >
//                           <Truck className="w-4 h-4" />
//                           Place Order
//                         </motion.button>
//                       </motion.div>
//                     )}
//                   </form>

//                   {paymentMethod === "PayPal" && (
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="mt-4"
//                     >
//                       {isAddressValid ? (
//                         <div className="space-y-4">
//                           <div className="p-3 bg-blue-50 rounded-lg">
//                             <p className="text-sm text-[#193db0] flex items-center gap-2">
//                               <AlertCircle className="w-4 h-4" />
//                               Proceed with PayPal payment below
//                             </p>
//                           </div>
//                           <PayPalButtons
//                             createOrder={createPayPalOrder}
//                             onApprove={onPayPalApprove}
//                             onError={(err) => {
//                               console.error("PayPal error:", err);
//                               toast.error(
//                                 "PayPal error occurred. Please try again."
//                               );
//                             }}
//                             style={{
//                               layout: "vertical",
//                               shape: "pill",
//                             }}
//                           />
//                         </div>
//                       ) : (
//                         <motion.div
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="p-4 bg-red-50 rounded-lg flex items-center gap-2 text-red-600"
//                         >
//                           <AlertCircle className="w-5 h-5" />
//                           <p className="text-sm">
//                             Please complete your shipping address first
//                           </p>
//                         </motion.div>
//                       )}
//                     </motion.div>
//                   )}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

// -----------------------------------------------------------------------------

// // import React, { useState, useEffect } from "react";
// // import { toast } from "react-toastify";
// // import { useNavigate } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // import { PayPalButtons } from "@paypal/react-paypal-js";
// // import axios from "axios";
// // import useCartStore from "./CartStore";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   ShoppingBag,
// //   Trash2,
// //   Plus,
// //   Minus,
// //   MapPin,
// //   CreditCard,
// //   Truck,
// //   AlertCircle,
// // } from "lucide-react";
// // ---------------
// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { PayPalButtons } from "@paypal/react-paypal-js";
// import axios from "axios";
// import useCartStore from "./CartStore";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ShoppingBag,
//   Trash2,
//   Plus,
//   Minus,
//   MapPin,
//   CreditCard,
//   Truck,
//   AlertCircle,
//   Gift,
//   X,
// } from "lucide-react";

// // Lucky Wheel Component
// const LuckyWheel = ({ isOpen, onClose, onSpin }) => {
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [rotation, setRotation] = useState(0);
//   const [spinsLeft, setSpinsLeft] = useState(2);
//   const [result, setResult] = useState(null);

//   const prizes = [
//     { text: "Try Again", color: "#FF6B6B", degree: 0 },
//     { text: "3% OFF", color: "#4ECDC4", degree: 90 },
//     { text: "Better Luck", color: "#FF6B6B", degree: 180 },
//     { text: "5% OFF", color: "#45B7D1", degree: 270 },
//   ];

//   const spinWheel = () => {
//     if (isSpinning || spinsLeft <= 0) return;

//     setIsSpinning(true);
//     const randomRotations = Math.floor(Math.random() * 5) + 5; // 5-10 full rotations
//     const randomDegree = Math.floor(Math.random() * 360);
//     const totalRotation = randomRotations * 360 + randomDegree;

//     setRotation((prevRotation) => prevRotation + totalRotation);

//     setTimeout(() => {
//       setIsSpinning(false);
//       setSpinsLeft((prev) => prev - 1);

//       // Calculate result based on final position
//       const normalizedDegree = randomDegree % 360;
//       let prize;
//       if (normalizedDegree >= 315 || normalizedDegree < 45) prize = "Try Again";
//       else if (normalizedDegree >= 45 && normalizedDegree < 135)
//         prize = "3% OFF";
//       else if (normalizedDegree >= 135 && normalizedDegree < 225)
//         prize = "Better Luck";
//       else prize = "5% OFF";

//       setResult(prize);

//       if (prize === "3% OFF" || prize === "5% OFF") {
//         const discount = prize === "3% OFF" ? 0.03 : 0.05;
//         onSpin(discount);
//       }
//     }, 5000);
//   };

//   if (!isOpen) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
//     >
//       <motion.div
//         initial={{ scale: 0.8 }}
//         animate={{ scale: 1 }}
//         className="bg-white rounded-xl p-8 max-w-lg w-full mx-4 relative"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//         >
//           <X className="w-6 h-6" />
//         </button>

//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800">Lucky Wheel</h2>
//           <p className="text-gray-600 mt-2">
//             Spin the wheel to win discounts! ({spinsLeft} spins left)
//           </p>
//         </div>

//         <div className="relative w-64 h-64 mx-auto">
//           <motion.div
//             style={{
//               rotate: rotation,
//               transition: isSpinning
//                 ? "all 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)"
//                 : "none",
//             }}
//             className="w-full h-full rounded-full relative overflow-hidden border-4 border-gray-200"
//           >
//             {prizes.map((prize, index) => (
//               <div
//                 key={index}
//                 className="absolute w-1/2 h-1/2 origin-bottom-right"
//                 style={{
//                   transform: `rotate(${index * 90}deg)`,
//                   backgroundColor: prize.color,
//                 }}
//               >
//                 <div className="absolute inset-0 flex items-center justify-center transform -rotate-45 text-white font-medium">
//                   {prize.text}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4">
//             <div className="w-4 h-4 bg-white rotate-45 transform origin-center" />
//           </div>
//         </div>

//         <div className="mt-8 text-center">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={spinWheel}
//             disabled={isSpinning || spinsLeft <= 0}
//             className={`px-6 py-3 rounded-lg font-medium ${
//               isSpinning || spinsLeft <= 0
//                 ? "bg-gray-200 text-gray-500"
//                 : "bg-[#193db0] text-white hover:bg-[#142d80]"
//             } transition-colors`}
//           >
//             {isSpinning ? "Spinning..." : "Spin Now!"}
//           </motion.button>

//           {result && (
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mt-4 text-lg font-medium text-gray-800"
//             >
//               Result: {result}
//             </motion.p>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// // Success Modal Component
// const SuccessModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
//     >
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         className="bg-white rounded-xl p-8 max-w-md w-full mx-4 text-center"
//       >
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.2 }}
//           className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
//         >
//           <svg
//             className="w-8 h-8 text-green-500"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 13l4 4L19 7"
//             />
//           </svg>
//         </motion.div>

//         <h2 className="text-2xl font-bold text-gray-800 mb-4">
//           Purchase Successful!
//         </h2>
//         <p className="text-gray-600 mb-6">
//           Your order will be delivered within 3-7 business days. Thank you for
//           shopping with us!
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => {
//             onClose();
//             window.location.href = "/";
//           }}
//           className="px-6 py-3 bg-[#193db0] text-white rounded-lg font-medium hover:bg-[#142d80] transition-colors"
//         >
//           Return to Home
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// };
// // -----------------
// const CartPage = () => {
//   const navigate = useNavigate();
//   const { cart, loading, error, fetchCart, updateCartItem, removeCartItem } =
//     useCartStore();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const [shippingAddress, setShippingAddress] = useState({
//     governorate: "",
//     details: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("PayPal");
//   const [isAddressValid, setIsAddressValid] = useState(false);

//   // Keep all the original functions unchanged
//   useEffect(() => {
//     fetchCart();
//   }, [fetchCart]);
//   useEffect(() => {
//     validateShippingAddress();
//   }, [shippingAddress]);

//   // // All original handlers remain exactly the same
//   // const handleRemoveItem = async (itemId) => {
//   //   /* Original function */
//   // };
//   // const handleQuantityChange = async (itemId, currentQuantity, change) => {
//   //   /* Original function */
//   // };
//   // const handleInputChange = (e) => {
//   //   /* Original function */
//   // };
//   // const validateShippingAddress = () => {
//   //   /* Original function */
//   // };
//   // const calculateTotalAmount = () => {
//   //   /* Original function */
//   // };
//   // const handleSubmit = async (e) => {
//   //   /* Original function */
//   // };
//   // const createPayPalOrder = (data, actions) => {
//   //   /* Original function */
//   // };
//   // const onPayPalApprove = async (data, actions) => {
//   //   /* Original function */
//   // };

//   const handleRemoveItem = async (itemId) => {
//     try {
//       await removeCartItem(itemId);
//       toast.success("Item removed from cart");
//     } catch (error) {
//       console.error("Error removing item from cart:", error);
//       toast.error("Failed to remove item. Please try again.");
//     }
//   };

//   const handleQuantityChange = async (itemId, currentQuantity, change) => {
//     const newQuantity = Math.max(1, currentQuantity + change);
//     try {
//       await updateCartItem(itemId, newQuantity);
//       toast.success("Cart updated successfully");
//     } catch (error) {
//       console.error("Error updating cart:", error);
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to update cart. Please try again."
//       );
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShippingAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const validateShippingAddress = () => {
//     const isValid = shippingAddress.governorate && shippingAddress.details;
//     setIsAddressValid(isValid);
//     return isValid;
//   };

//   // const calculateTotalAmount = () => {
//   //   if (!cart || !cart.items) return "0.00";
//   //   return cart.items
//   //     .reduce((total, item) => {
//   //       const price = item.variantId?.price || 0;
//   //       return total + price * item.quantity;
//   //     }, 0)
//   //     .toFixed(2);
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (!validateShippingAddress()) {
//   //     toast.error("Please fill in both governorate and address details.");
//   //     return;
//   //   }

//   //   if (!isAuthenticated) {
//   //     navigate("/login", { state: { from: "/cart" } });
//   //     return;
//   //   }

//   //   try {
//   //     const orderData = {
//   //       items: cart.items,
//   //       totalAmount: calculateTotalAmount(),
//   //       paymentMethod,
//   //       shippingAddress,
//   //     };

//   //     const response = await axios.post("/api/orders/create", orderData);

//   //     if (paymentMethod === "CashOnDelivery") {
//   //       await axios.post("/api/cart/clear");
//   //       navigate("/order-confirmation", {
//   //         state: { order: response.data.order },
//   //       });
//   //     }
//   //   } catch (err) {
//   //     console.error("Error creating order:", err);
//   //     toast.error(
//   //       err.response?.data?.message ||
//   //         "An error occurred while creating the order"
//   //     );
//   //   }
//   // };

//   // const createPayPalOrder = (data, actions) => {
//   //   if (!validateShippingAddress()) {
//   //     toast.error(
//   //       "Please fill in both governorate and address details before proceeding with PayPal."
//   //     );
//   //     return Promise.reject(new Error("Address validation failed"));
//   //   }

//   //   return actions.order.create({
//   //     purchase_units: [
//   //       {
//   //         amount: {
//   //           value: calculateTotalAmount(),
//   //         },
//   //       },
//   //     ],
//   //   });
//   // };

//   // const onPayPalApprove = async (data, actions) => {
//   //   try {
//   //     const details = await actions.order.capture();
//   //     const orderItems = cart.items.map((item) => ({
//   //       productId: item.productId._id,
//   //       variantId: item.variantId._id,
//   //       quantity: item.quantity,
//   //       price: item.variantId.price,
//   //       productName: item.productId.name,
//   //       color: item.variantId.color,
//   //       size: Array.isArray(item.variantId.size)
//   //         ? item.variantId.size[0]
//   //         : item.variantId.size,
//   //       image: item.variantId.overviewPicture,
//   //     }));

//   //     const orderData = {
//   //       items: orderItems,
//   //       totalAmount: calculateTotalAmount(),
//   //       paymentMethod: "PayPal",
//   //       shippingAddress,
//   //       paypalOrderId: details.id,
//   //     };

//   //     const token = localStorage.getItem("token");
//   //     const response = await axios.post("/api/orders/create", orderData, {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //     });

//   //     try {
//   //       await axios.post(
//   //         "/api/cart/clearCart",
//   //         {},
//   //         {
//   //           headers: {
//   //             Authorization: `Bearer ${localStorage.getItem("token")}`,
//   //           },
//   //         }
//   //       );
//   //     } catch (clearError) {
//   //       console.error("Error clearing cart:", clearError);
//   //     }

//   //     navigate("/order-confirmation", {
//   //       state: { order: response.data.order },
//   //     });
//   //   } catch (err) {
//   //     console.error("PayPal error:", err);
//   //     if (err.response) {
//   //       console.error("Error response:", err.response.data);
//   //       console.error("Error status:", err.response.status);
//   //     }
//   //     toast.error(
//   //       "An error occurred during PayPal checkout. Please try again."
//   //     );
//   //   }
//   // };
//   // =================
// const calculateTotalAmount = () => {
//   if (!cart || !cart.items) return "0.00";
//   const subtotal = cart.items.reduce((total, item) => {
//     const price = item.variantId?.price || 0;
//     return total + price * item.quantity;
//   }, 0);

//   const totalAfterDiscount = subtotal * (1 - appliedDiscount);
//   return totalAfterDiscount.toFixed(2);
// };

// // Check if total is over 50 JD
// const isEligibleForWheel = () => {
//   const total = cart.items.reduce((sum, item) => {
//     return sum + (item.variantId?.price || 0) * item.quantity;
//   }, 0);
//   return total > 50;
// };

// // Modified PayPal approval handler
// const onPayPalApprove = async (data, actions) => {
//   try {
//     const details = await actions.order.capture();
//     const orderItems = cart.items.map((item) => ({
//       productId: item.productId._id,
//       variantId: item.variantId._id,
//       quantity: item.quantity,
//       price: item.variantId.price,
//       productName: item.productId.name,
//       color: item.variantId.color,
//       size: Array.isArray(item.variantId.size)
//         ? item.variantId.size[0]
//         : item.variantId.size,
//       image: item.variantId.overviewPicture,
//     }));

//     const orderData = {
//       items: orderItems,
//       totalAmount: calculateTotalAmount(),
//       paymentMethod: "PayPal",
//       shippingAddress,
//       paypalOrderId: details.id,
//       discount: appliedDiscount,
//     };

//     const token = localStorage.getItem("token");
//     await axios.post("/api/orders/create", orderData, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     await axios.post(
//       "/api/cart/clearCart",
//       {},
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     // Show success modal instead of navigating
//     setShowSuccessModal(true);
//   } catch (err) {
//     console.error("PayPal error:", err);
//     toast.error("An error occurred during checkout. Please try again.");
//   }
// };

// // Handle lucky wheel spin
// const handleWheelSpin = (discount) => {
//   setAppliedDiscount(discount);
//   toast.success(`Congratulations! You've won a ${discount * 100}% discount!`);
// };

//   // =================

//   // Loading State
//   if (loading)
//     return (
//       <div className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
//           className="p-4 bg-white rounded-full shadow-lg"
//         >
//           <ShoppingBag className="w-8 h-8 text-[#193db0]" />
//         </motion.div>
//       </div>
//     );

//   // Error State
//   if (error)
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="min-h-screen flex items-center justify-center p-4"
//       >
//         <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
//           <div className="flex items-center justify-center text-red-500 mb-4">
//             <AlertCircle className="w-12 h-12" />
//           </div>
//           <p className="text-center text-gray-800 text-lg">{error}</p>
//           <button
//             onClick={() => navigate("/")}
//             className="mt-4 w-full py-2 bg-[#193db0] text-white rounded-lg hover:bg-[#142d80] transition-colors"
//           >
//             Return to Home
//           </button>
//         </div>
//       </motion.div>
//     );

//   // Empty Cart State
//   if (!cart || !cart.items || cart.items.length === 0)
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="min-h-screen flex items-center justify-center p-4 bg-gray-50"
//       >
//         <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
//           <motion.div
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.3 }}
//             className="inline-block p-4 bg-blue-50 rounded-full mb-4"
//           >
//             <ShoppingBag className="w-10 h-10 text-[#193db0]" />
//           </motion.div>
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//             Your cart is empty
//           </h2>
//           <p className="text-gray-500 mb-6">
//             Start shopping to add items to your cart
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => navigate("/")}
//             className="px-6 py-3 bg-[#193db0] text-white rounded-lg hover:bg-[#142d80] transition-all"
//           >
//             Continue Shopping
//           </motion.button>
//         </div>
//       </motion.div>
//     );

//   // Main Cart View
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8"
//         >
//           <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
//             <ShoppingBag className="w-8 h-8 text-[#193db0]" />
//             Shopping Cart
//           </h1>
//         </motion.div>

//         <div className="lg:grid lg:grid-cols-12 lg:gap-8">
//           {/* Cart Items Section */}
//           <div className="lg:col-span-7 xl:col-span-8">
//             <AnimatePresence mode="popLayout">
//               {cart.items.map((item, index) => (
//                 <motion.div
//                   key={item._id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden hover:shadow-md transition-shadow"
//                 >
//                   <div className="p-6">
//                     <div className="flex items-start gap-6">
//                       {/* Product Image */}
//                       <motion.div
//                         whileHover={{ scale: 1.05 }}
//                         className="relative rounded-lg overflow-hidden flex-shrink-0"
//                       >
//                         <img
//                           src={
//                             item.variantId?.overviewPicture ||
//                             "placeholder-image-url"
//                           }
//                           alt={item.productId?.name}
//                           className="w-28 h-28 object-cover rounded-lg"
//                         />
//                         <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg" />
//                       </motion.div>

//                       {/* Product Details */}
//                       <div className="flex-1 min-w-0">
//                         <div className="flex justify-between">
//                           <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                             {item.productId?.name}
//                           </h3>
//                           <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             onClick={() => handleRemoveItem(item._id)}
//                             className="text-gray-400 hover:text-red-500 transition-colors"
//                           >
//                             <Trash2 className="w-5 h-5" />
//                           </motion.button>
//                         </div>

//                         <div className="mt-1 flex flex-wrap gap-2">
//                           <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
//                             {item.variantId?.color || "N/A"}
//                           </span>
//                           <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
//                             Size: {item.variantId?.size || "N/A"}
//                           </span>
//                         </div>

//                         <div className="mt-4 flex items-center justify-between">
//                           <span className="text-xl font-semibold text-[#193db0]">
//                             ${item.variantId?.price?.toFixed(2)}
//                           </span>

//                           <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
//                             <motion.button
//                               whileHover={{ scale: 1.1 }}
//                               whileTap={{ scale: 0.95 }}
//                               onClick={() =>
//                                 handleQuantityChange(
//                                   item._id,
//                                   item.quantity,
//                                   -1
//                                 )
//                               }
//                               className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#193db0] hover:bg-blue-50 rounded-md transition-all"
//                             >
//                               <Minus className="w-4 h-4" />
//                             </motion.button>
//                             <span className="w-10 text-center font-medium text-gray-900">
//                               {item.quantity}
//                             </span>
//                             <motion.button
//                               whileHover={{ scale: 1.1 }}
//                               whileTap={{ scale: 0.95 }}
//                               onClick={() =>
//                                 handleQuantityChange(item._id, item.quantity, 1)
//                               }
//                               disabled={
//                                 item.quantity >= item.variantId?.quantity
//                               }
//                               className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#193db0] hover:bg-blue-50 rounded-md transition-all disabled:opacity-50"
//                             >
//                               <Plus className="w-4 h-4" />
//                             </motion.button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>

//             {/* Order Summary - Mobile */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="lg:hidden mt-6 bg-white rounded-xl shadow-sm p-6"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-lg font-medium text-gray-900">Total</span>
//                 <span className="text-2xl font-bold text-[#193db0]">
//                   ${calculateTotalAmount()}
//                 </span>
//               </div>
//             </motion.div>
//           </div>

//           {/* Checkout Section */}
//           <div className="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0">
//             <div className="sticky top-8">
//               {/* Order Summary - Desktop */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="hidden lg:block bg-white rounded-xl shadow-sm p-6 mb-6"
//               >
//                 <h2 className="text-lg font-semibold text-gray-900 mb-4">
//                   Order Summary
//                 </h2>
//                 <div className="flex justify-between items-center pb-4 border-b border-gray-100">
//                   <span className="text-gray-600">Subtotal</span>
//                   <span className="text-lg font-medium text-gray-900">
//                     ${calculateTotalAmount()}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center pt-4">
//                   <span className="text-gray-900 font-medium">Total</span>
//                   <span className="text-2xl font-bold text-[#193db0]">
//                     ${calculateTotalAmount()}
//                   </span>
//                 </div>
//               </motion.div>

//               {/* Shipping Details Form */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="bg-white rounded-xl shadow-sm overflow-hidden"
//               >
//                 <div className="p-6">
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="p-2 bg-blue-50 rounded-lg">
//                       <MapPin className="w-5 h-5 text-[#193db0]" />
//                     </div>
//                     <h2 className="text-lg font-semibold text-gray-900">
//                       Shipping Details
//                     </h2>
//                   </div>

//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Governorate
//                       </label>
//                       <div className="relative">
//                         <select
//                           name="governorate"
//                           value={shippingAddress.governorate}
//                           onChange={handleInputChange}
//                           required
//                           className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#193db0] focus:border-transparent transition-all appearance-none"
//                         >
//                           <option value="">Select Governorate</option>
//                           <option value="Amman">Amman</option>
//                           <option value="Zarqa">Zarqa</option>
//                         </select>
//                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
//                           <svg
//                             className="h-5 w-5"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </div>
//                       </div>
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
//                         placeholder="Enter your full address details..."
//                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#193db0] focus:border-transparent transition-all resize-none h-32"
//                       />
//                     </div>

//                     <div className="pt-4">
//                       <label className="block text-sm font-medium text-gray-700 mb-3">
//                         Payment Method
//                       </label>
//                       <div className="grid grid-cols-2 gap-3">
//                         <motion.button
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           type="button"
//                           onClick={() => setPaymentMethod("PayPal")}
//                           className={`relative p-4 flex flex-col items-center gap-2 rounded-lg border-2 ${
//                             paymentMethod === "PayPal"
//                               ? "border-[#193db0] bg-blue-50"
//                               : "border-gray-200 hover:border-gray-300"
//                           } transition-all group`}
//                         >
//                           <CreditCard
//                             className={`w-6 h-6 ${
//                               paymentMethod === "PayPal"
//                                 ? "text-[#193db0]"
//                                 : "text-gray-400 group-hover:text-gray-500"
//                             }`}
//                           />
//                           <span
//                             className={`text-sm font-medium ${
//                               paymentMethod === "PayPal"
//                                 ? "text-[#193db0]"
//                                 : "text-gray-700"
//                             }`}
//                           >
//                             PayPal
//                           </span>
//                           {paymentMethod === "PayPal" && (
//                             <motion.div
//                               layoutId="paymentMethod"
//                               className="absolute -top-1 -right-1 w-4 h-4 bg-[#193db0] rounded-full flex items-center justify-center"
//                             >
//                               <div className="w-2 h-2 bg-white rounded-full" />
//                             </motion.div>
//                           )}
//                         </motion.button>

//                         <motion.button
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           type="button"
//                           onClick={() => setPaymentMethod("CashOnDelivery")}
//                           className={`relative p-4 flex flex-col items-center gap-2 rounded-lg border-2 ${
//                             paymentMethod === "CashOnDelivery"
//                               ? "border-[#193db0] bg-blue-50"
//                               : "border-gray-200 hover:border-gray-300"
//                           } transition-all group`}
//                         >
//                           <Truck
//                             className={`w-6 h-6 ${
//                               paymentMethod === "CashOnDelivery"
//                                 ? "text-[#193db0]"
//                                 : "text-gray-400 group-hover:text-gray-500"
//                             }`}
//                           />
//                           <span
//                             className={`text-sm font-medium ${
//                               paymentMethod === "CashOnDelivery"
//                                 ? "text-[#193db0]"
//                                 : "text-gray-700"
//                             }`}
//                           >
//                             Cash on Delivery
//                           </span>
//                           {paymentMethod === "CashOnDelivery" && (
//                             <motion.div
//                               layoutId="paymentMethod"
//                               className="absolute -top-1 -right-1 w-4 h-4 bg-[#193db0] rounded-full flex items-center justify-center"
//                             >
//                               <div className="w-2 h-2 bg-white rounded-full" />
//                             </motion.div>
//                           )}
//                         </motion.button>
//                       </div>
//                     </div>

//                     {paymentMethod === "CashOnDelivery" && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="pt-4"
//                       >
//                         <motion.button
//                           whileHover={{ scale: 1.01 }}
//                           whileTap={{ scale: 0.99 }}
//                           type="submit"
//                           disabled={!isAddressValid}
//                           className="w-full py-3 px-4 bg-[#193db0] text-white text-sm font-semibold rounded-lg
//                                    hover:bg-[#142d80] disabled:opacity-50 disabled:cursor-not-allowed
//                                    shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
//                         >
//                           <Truck className="w-4 h-4" />
//                           Place Order
//                         </motion.button>
//                       </motion.div>
//                     )}
//                   </form>

//                   {paymentMethod === "PayPal" && (
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="mt-4"
//                     >
//                       {isAddressValid ? (
//                         <div className="space-y-4">
//                           <div className="p-3 bg-blue-50 rounded-lg">
//                             <p className="text-sm text-[#193db0] flex items-center gap-2">
//                               <AlertCircle className="w-4 h-4" />
//                               Proceed with PayPal payment below
//                             </p>
//                           </div>
//                           <PayPalButtons
//                             createOrder={createPayPalOrder}
//                             onApprove={onPayPalApprove}
//                             onError={(err) => {
//                               console.error("PayPal error:", err);
//                               toast.error(
//                                 "PayPal error occurred. Please try again."
//                               );
//                             }}
//                             style={{
//                               layout: "vertical",
//                               shape: "pill",
//                             }}
//                           />
//                         </div>
//                       ) : (
//                         <motion.div
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="p-4 bg-red-50 rounded-lg flex items-center gap-2 text-red-600"
//                         >
//                           <AlertCircle className="w-5 h-5" />
//                           <p className="text-sm">
//                             Please complete your shipping address first
//                           </p>
//                         </motion.div>
//                       )}
//                     </motion.div>
//                   )}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import useCartStore from "./CartStore";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  MapPin,
  CreditCard,
  Truck,
  AlertCircle,
  Gift,
  X,
} from "lucide-react";
import FooterBar from "../../components/Footer/FooterBar";
import TrackOrder from "../../components/Navbar/TrackOrder";
import SearchBar from "../../components/Navbar/SearchBar";

// Lucky Wheel Component
const LuckyWheel = ({ isOpen, onClose, onSpin }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [spinsLeft, setSpinsLeft] = useState(2);
  const [result, setResult] = useState(null);

  const prizes = [
    { text: "Try Again", color: "#FF6B6B", degree: 0 },
    { text: "3% OFF", color: "#4ECDC4", degree: 90 },
    { text: "Better Luck", color: "#FF6B6B", degree: 180 },
    { text: "5% OFF", color: "#45B7D1", degree: 270 },
  ];

  const spinWheel = () => {
    if (isSpinning || spinsLeft <= 0) return;

    setIsSpinning(true);
    const randomRotations = Math.floor(Math.random() * 5) + 5;
    const randomDegree = Math.floor(Math.random() * 360);
    const totalRotation = randomRotations * 360 + randomDegree;

    setRotation((prevRotation) => prevRotation + totalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setSpinsLeft((prev) => prev - 1);

      const normalizedDegree = randomDegree % 360;
      let prize;
      if (normalizedDegree >= 315 || normalizedDegree < 45) prize = "Try Again";
      else if (normalizedDegree >= 45 && normalizedDegree < 135)
        prize = "3% OFF";
      else if (normalizedDegree >= 135 && normalizedDegree < 225)
        prize = "Better Luck";
      else prize = "5% OFF";

      setResult(prize);

      if (prize === "3% OFF" || prize === "5% OFF") {
        const discount = prize === "3% OFF" ? 0.03 : 0.05;
        onSpin(discount);
      }
    }, 5000);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-xl p-8 max-w-lg w-full mx-4 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Try Your Luck!</h2>
          <p className="text-gray-600 mt-2">
            You have {spinsLeft} {spinsLeft === 1 ? "spin" : "spins"} remaining
          </p>
        </div>

        <div className="relative w-64 h-64 mx-auto">
          <motion.div
            style={{
              rotate: rotation,
              transition: isSpinning
                ? "all 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)"
                : "none",
            }}
            className="w-full h-full rounded-full relative overflow-hidden border-4 border-gray-200"
          >
            {prizes.map((prize, index) => (
              <div
                key={index}
                className="absolute w-1/2 h-1/2 origin-bottom-right"
                style={{
                  transform: `rotate(${index * 90}deg)`,
                  backgroundColor: prize.color,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center transform -rotate-45 text-white font-medium">
                  {prize.text}
                </div>
              </div>
            ))}
          </motion.div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4">
            <div className="w-4 h-4 bg-white rotate-45 transform origin-center" />
          </div>
        </div>

        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={spinWheel}
            disabled={isSpinning || spinsLeft <= 0}
            className={`px-6 py-3 rounded-lg font-medium ${
              isSpinning || spinsLeft <= 0
                ? "bg-gray-200 text-gray-500"
                : "bg-[#193db0] text-white hover:bg-[#142d80]"
            } transition-colors`}
          >
            {isSpinning ? "Spinning..." : "Spin Now!"}
          </motion.button>

          {result && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-lg font-medium text-gray-800"
            >
              You got: {result}!
            </motion.p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Success Modal Component
const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl p-8 max-w-md w-full mx-auto"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.1 }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-gray-800 mb-4"
          >
            Purchase Successful!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mb-8"
          >
            Thank you for your purchase! Your order will be delivered within 3-7
            business days. We'll notify you when your package is on its way.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              onClose();
              window.location.href = "/";
            }}
            className="px-6 py-3 bg-[#193db0] text-white rounded-lg font-medium hover:bg-[#142d80] transition-all"
          >
            Return to Home
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main CartPage Component
const CartPage = () => {
  const navigate = useNavigate();
  const { cart, loading, error, fetchCart, updateCartItem, removeCartItem } =
    useCartStore();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [shippingAddress, setShippingAddress] = useState({
    governorate: "",
    details: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [showLuckyWheel, setShowLuckyWheel] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  useEffect(() => {
    validateShippingAddress();
  }, [shippingAddress]);

  const handleRemoveItem = async (itemId) => {
    try {
      await removeCartItem(itemId);
      toast.success("Item removed from cart");
    } catch (error) {
      console.error("Error removing item from cart:", error);
      toast.error("Failed to remove item. Please try again.");
    }
  };

  const handleQuantityChange = async (itemId, currentQuantity, change) => {
    const newQuantity = Math.max(1, currentQuantity + change);
    try {
      await updateCartItem(itemId, newQuantity);
      toast.success("Cart updated successfully");
    } catch (error) {
      console.error("Error updating cart:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to update cart. Please try again."
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const validateShippingAddress = () => {
    const isValid = shippingAddress.governorate && shippingAddress.details;
    setIsAddressValid(isValid);
    return isValid;
  };

  const calculateTotalAmount = () => {
    if (!cart || !cart.items) return "0.00";
    const subtotal = cart.items.reduce((total, item) => {
      const price = item.variantId?.price || 0;
      return total + price * item.quantity;
    }, 0);

    const totalAfterDiscount = subtotal * (1 - appliedDiscount);
    return totalAfterDiscount.toFixed(2);
  };

  const calculateSubtotal = () => {
    if (!cart || !cart.items) return "0.00";
    return cart.items
      .reduce((total, item) => {
        const price = item.variantId?.price || 0;
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const isEligibleForWheel = () => {
    const total = parseFloat(calculateSubtotal());
    return total > 50;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateShippingAddress()) {
      toast.error("Please fill in both governorate and address details.");
      return;
    }

    if (!isAuthenticated) {
      navigate("/login", { state: { from: "/cart" } });
      return;
    }

    try {
      const orderData = {
        items: cart.items,
        totalAmount: calculateTotalAmount(),
        paymentMethod,
        shippingAddress,
        discount: appliedDiscount,
      };

      const response = await axios.post("/api/orders/create", orderData);

      if (paymentMethod === "CashOnDelivery") {
        await axios.post("/api/cart/clear");
        setShowSuccessModal(true);
      }
    } catch (err) {
      console.error("Error creating order:", err);
      toast.error(
        err.response?.data?.message ||
          "An error occurred while creating the order"
      );
    }
  };

  const createPayPalOrder = (data, actions) => {
    if (!validateShippingAddress()) {
      toast.error(
        "Please fill in both governorate and address details before proceeding with PayPal."
      );
      return Promise.reject(new Error("Address validation failed"));
    }

    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: calculateTotalAmount(),
          },
        },
      ],
    });
  };

  const onPayPalApprove = async (data, actions) => {
    try {
      const details = await actions.order.capture();
      const orderItems = cart.items.map((item) => ({
        productId: item.productId._id,
        variantId: item.variantId._id,
        quantity: item.quantity,
        price: item.variantId.price,
        productName: item.productId.name,
        color: item.variantId.color,
        size: Array.isArray(item.variantId.size)
          ? item.variantId.size[0]
          : item.variantId.size,
        image: item.variantId.overviewPicture,
      }));

      const orderData = {
        items: orderItems,
        totalAmount: calculateTotalAmount(),
        paymentMethod: "PayPal",
        shippingAddress,
        paypalOrderId: details.id,
        discount: appliedDiscount,
      };

      const token = localStorage.getItem("token");
      await axios.post("/api/orders/create", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // await axios.post(
      //   "/api/cart/clearCart",
      //   {},
      //   {
      //     headers: { Authorization: `Bearer ${token}` },
      //   }
      // );
 try {
   await axios.post(
     "/api/cart/clear",
     {},
     {
       // تم تغيير المسار من clearCart إلى clear
       headers: {
         Authorization: `Bearer ${token}`,
       },
     }
   );
 } catch (clearError) {
   console.error("Error clearing cart:", clearError);
   // حتى لو فشل مسح السلة، نستمر في عرض رسالة النجاح
 }
      setShowSuccessModal(true);
    } catch (err) {
      console.error("PayPal error:", err);
      toast.error("An error occurred during checkout. Please try again.");
    }
  };

  const handleWheelSpin = (discount) => {
    setAppliedDiscount(discount);
    toast.success(`Congratulations! You've won a ${discount * 100}% discount!`);
  };

  if (loading)
    return (
      <div className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="p-4 bg-white rounded-full shadow-lg"
        >
          <ShoppingBag className="w-8 h-8 text-[#193db0]" />
        </motion.div>
      </div>
    );

  if (error)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center p-4"
      >
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
          <div className="flex items-center justify-center text-red-500 mb-4">
            <AlertCircle className="w-12 h-12" />
          </div>
          <p className="text-center text-gray-800 text-lg">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 w-full py-2 bg-[#193db0] text-white rounded-lg hover:bg-[#142d80] transition-colors"
          >
            Return to Home
          </button>
        </div>
      </motion.div>
    );

  if (!cart || !cart.items || cart.items.length === 0)
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex items-center justify-center p-4 bg-gray-50"
      >
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-block p-4 bg-blue-50 rounded-full mb-4"
          >
            <ShoppingBag className="w-10 h-10 text-[#193db0]" />
          </motion.div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Start shopping to add items to your cart
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-[#193db0] text-white rounded-lg hover:bg-[#142d80] transition-all"
          >
            Continue Shopping
          </motion.button>
        </div>
      </motion.div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <TrackOrder />
      <SearchBar />
      <br />
      <br />
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-6">
              <ShoppingBag className="w-6 h-6 text-[#193db0]" />
              <h1 className="text-2xl font-medium text-gray-800">
                Shopping Cart
              </h1>
              <span className="text-base text-gray-500">
                ({cart.items.length} items)
              </span>
            </div>

            <AnimatePresence>
              {cart.items.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl mb-4 overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-200"
                >
                  <div className="p-6 flex items-center gap-6">
                    <div className="relative group">
                      <img
                        src={
                          item.variantId?.overviewPicture ||
                          "placeholder-image-url"
                        }
                        alt={item.productId?.name}
                        className="w-28 h-28 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {item.productId?.name}
                          </h3>
                          <div className="mt-1 flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {item.variantId?.color || "N/A"}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              Size: {item.variantId?.size || "N/A"}
                            </span>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleRemoveItem(item._id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-5 h-5" />
                        </motion.button>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-semibold text-[#193db0]">
                          JD{(item.variantId?.price || 0).toFixed(2)}
                        </span>

                        <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                              handleQuantityChange(item._id, item.quantity, -1)
                            }
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#193db0] hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          <span className="w-10 text-center font-medium text-gray-900">
                            {item.quantity}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                              handleQuantityChange(item._id, item.quantity, 1)
                            }
                            disabled={item.quantity >= item.variantId?.quantity}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#193db0] hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Show discount info if applied */}
            {appliedDiscount > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-green-700">
                    <Gift className="w-5 h-5" />
                    <span className="font-medium">
                      Discount Applied: {(appliedDiscount * 100).toFixed(0)}%
                      OFF
                    </span>
                  </div>
                  <span className="text-green-700 font-medium">
                    -JD
                    {(
                      parseFloat(calculateSubtotal()) * appliedDiscount
                    ).toFixed(2)}
                  </span>
                </div>
              </motion.div>
            )}

            {/* Order Summary */}
            <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>JD{calculateSubtotal()}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>
                      -JD
                      {(
                        parseFloat(calculateSubtotal()) * appliedDiscount
                      ).toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-lg font-semibold text-gray-900">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-[#193db0]">
                    JD{calculateTotalAmount()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Section */}
          <div className="lg:w-[400px]">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#193db0]" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Shipping Details
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Governorate
                    </label>
                    <div className="relative">
                      <select
                        name="governorate"
                        value={shippingAddress.governorate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#193db0] focus:border-transparent transition-all appearance-none"
                      >
                        <option value="">Select Governorate</option>
                        <option value="Amman">Amman</option>
                        <option value="Zarqa">Zarqa</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address Details
                    </label>
                    <textarea
                      name="details"
                      value={shippingAddress.details}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your detailed address..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#193db0] focus:border-transparent transition-all resize-none h-32"
                    />
                  </div>

                  <div className="pt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Payment Method
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => setPaymentMethod("PayPal")}
                        className={`relative p-4 flex flex-col items-center gap-2 rounded-lg border-2 ${
                          paymentMethod === "PayPal"
                            ? "border-[#193db0] bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        } transition-all group`}
                      >
                        <CreditCard
                          className={`w-6 h-6 ${
                            paymentMethod === "PayPal"
                              ? "text-[#193db0]"
                              : "text-gray-400 group-hover:text-gray-500"
                          }`}
                        />
                        <span
                          className={`text-sm font-medium ${
                            paymentMethod === "PayPal"
                              ? "text-[#193db0]"
                              : "text-gray-700"
                          }`}
                        >
                          PayPal
                        </span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => setPaymentMethod("CashOnDelivery")}
                        className={`relative p-4 flex flex-col items-center gap-2 rounded-lg border-2 ${
                          paymentMethod === "CashOnDelivery"
                            ? "border-[#193db0] bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        } transition-all group`}
                      >
                        <Truck
                          className={`w-6 h-6 ${
                            paymentMethod === "CashOnDelivery"
                              ? "text-[#193db0]"
                              : "text-gray-400 group-hover:text-gray-500"
                          }`}
                        />
                        <span
                          className={`text-sm font-medium ${
                            paymentMethod === "CashOnDelivery"
                              ? "text-[#193db0]"
                              : "text-gray-700"
                          }`}
                        >
                          Cash on Delivery
                        </span>
                      </motion.button>
                    </div>
                  </div>

                  {paymentMethod === "CashOnDelivery" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        disabled={!isAddressValid}
                        className="w-full py-3 px-4 bg-[#193db0] text-white text-sm font-semibold rounded-lg 
                                 hover:bg-[#142d80] disabled:opacity-50 disabled:cursor-not-allowed 
                                 shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
                      >
                        <Truck className="w-4 h-4" />
                        Place Order
                      </motion.button>
                    </motion.div>
                  )}
                </form>

                {paymentMethod === "PayPal" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4"
                  >
                    {isAddressValid ? (
                      <div className="space-y-4">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-[#193db0] flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            Proceed with PayPal payment below
                          </p>
                        </div>
                        <PayPalButtons
                          createOrder={createPayPalOrder}
                          onApprove={onPayPalApprove}
                          onError={(err) => {
                            console.error("PayPal error:", err);
                            toast.error(
                              "PayPal error occurred. Please try again."
                            );
                          }}
                          style={{
                            layout: "vertical",
                            shape: "pill",
                          }}
                        />
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 rounded-lg flex items-center gap-2 text-red-600"
                      >
                        <AlertCircle className="w-5 h-5" />
                        <p className="text-sm">
                          Please complete your shipping address first
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lucky Wheel notification for eligible orders */}
      {isEligibleForWheel() && !showLuckyWheel && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 p-4 bg-white rounded-xl shadow-lg max-w-sm"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Gift className="w-6 h-6 text-[#193db0]" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">
                You're Eligible for a Discount!
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Orders over 50 JD qualify for our Lucky Wheel. Spin now for a
                chance to win up to 5% off!
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowLuckyWheel(true)}
              className="px-4 py-2 bg-[#193db0] text-white text-sm font-medium rounded-lg hover:bg-[#142d80] whitespace-nowrap"
            >
              Try Your Luck
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Modals */}
      <AnimatePresence>
        {showLuckyWheel && (
          <LuckyWheel
            isOpen={showLuckyWheel}
            onClose={() => setShowLuckyWheel(false)}
            onSpin={handleWheelSpin}
          />
        )}

        {showSuccessModal && (
          <SuccessModal
            isOpen={showSuccessModal}
            onClose={() => {
              setShowSuccessModal(false);
              navigate("/");
            }}
          />
        )}
      </AnimatePresence>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <FooterBar />
    </div>
  );
};

export default CartPage;
