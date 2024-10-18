// // import React, { useState, useEffect } from "react";
// // import { useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import { PayPalButtons } from "@paypal/react-paypal-js";
// // import axios from "axios";
// // import useCartStore from "../CartPage/CartStore";

// // const CheckoutPage = () => {
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [orderDetails, setOrderDetails] = useState(null);
// //   const [paymentMethod, setPaymentMethod] = useState("PayPal");
// //   const [shippingAddress, setShippingAddress] = useState({
// //     governorate: "",
// //     details: "",
// //   });

// //   const { cart, clearCart } = useCartStore();
// //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (!isAuthenticated) {
// //       navigate("/login");
// //     }
// //   }, [isAuthenticated, navigate]);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setShippingAddress((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const userId = localStorage.getItem("userId");
// //       const response = await axios.post("/api/orders/create", {
// //         userId,
// //         paymentMethod,
// //         shippingAddress,
// //       });
// //       setOrderDetails(response.data.order);
// //       if (paymentMethod === "CashOnDelivery") {
// //         clearCart();
// //         navigate("/order-confirmation", {
// //           state: { order: response.data.order },
// //         });
// //       }
// //     } catch (err) {
// //       setError(err.response?.data?.message || "An error occurred");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handlePayPalApprove = async (data, actions) => {
// //     try {
// //       const details = await actions.order.capture();
// //       const userId = localStorage.getItem("userId");
// //       const response = await axios.post("/api/orders/create", {
// //         userId,
// //         paymentMethod: "PayPal",
// //         shippingAddress,
// //         paypalOrderId: details.id,
// //       });
// //       clearCart();
// //       navigate("/order-confirmation", {
// //         state: { order: response.data.order },
// //       });
// //     } catch (err) {
// //       setError(err.response?.data?.message || "An error occurred");
// //     }
// //   };

// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div>Error: {error}</div>;

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-2xl font-bold mb-4">Checkout</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div className="mb-4">
// //           <label className="block mb-2">Governorate</label>
// //           <input
// //             type="text"
// //             name="governorate"
// //             value={shippingAddress.governorate}
// //             onChange={handleInputChange}
// //             required
// //             className="w-full p-2 border rounded"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Address Details</label>
// //           <textarea
// //             name="details"
// //             value={shippingAddress.details}
// //             onChange={handleInputChange}
// //             required
// //             className="w-full p-2 border rounded"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2">Payment Method</label>
// //           <select
// //             value={paymentMethod}
// //             onChange={(e) => setPaymentMethod(e.target.value)}
// //             className="w-full p-2 border rounded"
// //           >
// //             <option value="PayPal">PayPal</option>
// //             <option value="CashOnDelivery">Cash on Delivery</option>
// //           </select>
// //         </div>
// //         {paymentMethod === "CashOnDelivery" && (
// //           <button type="submit" className="bg-blue-500 text-white p-2 rounded">
// //             Place Order
// //           </button>
// //         )}
// //       </form>
// //       {paymentMethod === "PayPal" && (
// //         <PayPalButtons
// //           createOrder={(data, actions) => {
// //             return actions.order.create({
// //               purchase_units: [
// //                 {
// //                   amount: {
// //                     value: cart.totalAmount.toString(),
// //                   },
// //                 },
// //               ],
// //             });
// //           }}
// //           onApprove={handlePayPalApprove}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default CheckoutPage;


// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, useLocation } from "react-router-dom";
// import { PayPalButtons } from "@paypal/react-paypal-js";
// import axios from "axios";
// import useCartStore from "../CartPage/CartStore";

// const CheckoutPage = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [orderDetails, setOrderDetails] = useState(null);
//   const [paymentMethod, setPaymentMethod] = useState("PayPal");
//   const [shippingAddress, setShippingAddress] = useState({
//     governorate: "",
//     details: "",
//   });

//   const { cart, clearCart } = useCartStore();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       // Redirect to login page with the current location
//     //   navigate("/login", { state: { from: location } });
//     }
//   }, [isAuthenticated, navigate, location]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShippingAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const userId = localStorage.getItem("userId");
//       const response = await axios.post("/api/orders/create", {
//         userId,
//         paymentMethod,
//         shippingAddress,
//       });
//       setOrderDetails(response.data.order);
//       if (paymentMethod === "CashOnDelivery") {
//         clearCart();
//         navigate("/order-confirmation", {
//           state: { order: response.data.order },
//         });
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePayPalApprove = async (data, actions) => {
//     try {
//       const details = await actions.order.capture();
//       const userId = localStorage.getItem("userId");
//       const response = await axios.post("/api/orders/create", {
//         userId,
//         paymentMethod: "PayPal",
//         shippingAddress,
//         paypalOrderId: details.id,
//       });
//       clearCart();
//       navigate("/order-confirmation", {
//         state: { order: response.data.order },
//       });
//     } catch (err) {
//       setError(err.response?.data?.message || "An error occurred");
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block mb-2">Governorate</label>
//           <input
//             type="text"
//             name="governorate"
//             value={shippingAddress.governorate}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded"
//           />
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
//           <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//             Place Order
//           </button>
//         )}
//       </form>
//       {paymentMethod === "PayPal" && (
//         <PayPalButtons
//           createOrder={(data, actions) => {
//             return actions.order.create({
//               purchase_units: [
//                 {
//                   amount: {
//                     value: cart.totalAmount.toString(),
//                   },
//                 },
//               ],
//             });
//           }}
//           onApprove={handlePayPalApprove}
//         />
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;

// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { PayPalButtons } from "@paypal/react-paypal-js";
// import axios from "axios";
// import useCartStore from "../CartPage/CartStore";

// const CheckoutPage = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [shippingAddress, setShippingAddress] = useState({
//     governorate: "",
//     details: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("PayPal");

//   const { cart, clearCart } = useCartStore();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/login", { state: { from: "/checkout" } });
//     }
//   }, [isAuthenticated, navigate]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setShippingAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const calculateTotalAmount = () => {
//     return cart.items
//       .reduce((total, item) => {
//         const price = item.variantId?.price || 0;
//         return total + price * item.quantity;
//       }, 0)
//       .toFixed(2);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const userId = localStorage.getItem("userId");
//       const response = await axios.post("/api/orders/create", {
//         userId,
//         items: cart.items,
//         totalAmount: calculateTotalAmount(),
//         paymentMethod,
//         shippingAddress,
//       });

//       if (paymentMethod === "CashOnDelivery") {
//         clearCart();
//         navigate("/order-confirmation", {
//           state: { order: response.data.order },
//         });
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const createOrder = (data, actions) => {
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

//   const onApprove = async (data, actions) => {
//     try {
//       const details = await actions.order.capture();
//       const userId = localStorage.getItem("userId");
//       const response = await axios.post("/api/order/create", {
//         userId,
//         items: cart.items,
//         totalAmount: calculateTotalAmount(),
//         paymentMethod: "PayPal",
//         shippingAddress,
//         paypalOrderId: details.id,
//       });
//       clearCart();
//       navigate("/order-confirmation", {
//         state: { order: response.data.order },
//       });
//     } catch (err) {
//       setError(err.response?.data?.message || "An error occurred");
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block mb-2">Governorate</label>
//           <input
//             type="text"
//             name="governorate"
//             value={shippingAddress.governorate}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded"
//           />
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
//           <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//             Place Order
//           </button>
//         )}
//       </form>
//       {paymentMethod === "PayPal" && (
//         <PayPalButtons
//           createOrder={createOrder}
//           onApprove={onApprove}
//           style={{ layout: "vertical" }}
//         />
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    governorate: "",
    details: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [isAddressValid, setIsAddressValid] = useState(false);

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    validateShippingAddress();
  }, [shippingAddress]);

  const fetchCart = async () => {
    try {
      const response = await axios.get("/api/cart");
      setCart(response.data);
    } catch (err) {
      setError("Failed to fetch cart. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotalAmount = () => {
    if (!cart || !cart.items) return "0.00";
    return cart.items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const validateShippingAddress = () => {
    const isValid = shippingAddress.governorate && shippingAddress.details;
    setIsAddressValid(isValid);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateShippingAddress()) {
      setError("Please fill in both governorate and address details.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const orderData = {
        items: cart.items,
        totalAmount: calculateTotalAmount(),
        paymentMethod,
        shippingAddress,
      };

      const response = await axios.post("/api/orders/create", orderData);

      if (paymentMethod === "CashOnDelivery") {
        await axios.post("/api/cart/clear");
        navigate("/order-confirmation", {
          state: { order: response.data.order },
        });
      }
    } catch (err) {
      console.error("Error creating order:", err);
      setError(
        err.response?.data?.message ||
          "An error occurred while creating the order"
      );
    } finally {
      setLoading(false);
    }
  };

  const createPayPalOrder = (data, actions) => {
    if (!validateShippingAddress()) {
      setError(
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
      const orderData = {
        items: cart.items,
        totalAmount: calculateTotalAmount(),
        paymentMethod: "PayPal",
        shippingAddress,
        paypalOrderId: details.id,
      };

      const response = await axios.post("/api/orders/create", orderData);
      await axios.post("/api/cart/clear");
      navigate("/order-confirmation", {
        state: { order: response.data.order },
      });
    } catch (err) {
      console.error("PayPal error:", err);
      setError("An error occurred during PayPal checkout. Please try again.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!cart) return <div>Loading cart data...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Governorate</label>
          <select
            name="governorate"
            value={shippingAddress.governorate}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select Governorate</option>
            <option value="Amman">Amman</option>
            <option value="Zarqa">Zarqa</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Address Details</label>
          <textarea
            name="details"
            value={shippingAddress.details}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        {!isAddressValid && (
          <div className="text-red-500 mb-4">
            Please fill in both governorate and address details before
            proceeding.
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-2">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="PayPal">PayPal</option>
            <option value="CashOnDelivery">Cash on Delivery</option>
          </select>
        </div>
        {paymentMethod === "CashOnDelivery" && (
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
            disabled={!isAddressValid}
          >
            Place Order
          </button>
        )}
      </form>
      {paymentMethod === "PayPal" && isAddressValid && (
        <PayPalButtons
          createOrder={createPayPalOrder}
          onApprove={onPayPalApprove}
          onError={(err) => {
            console.error("PayPal error:", err);
            setError(
              "An error occurred with PayPal. Please try again or choose a different payment method."
            );
          }}
          style={{ layout: "vertical" }}
        />
      )}
      {paymentMethod === "PayPal" && !isAddressValid && (
        <div className="text-red-500 mt-4">
          Please fill in the shipping address before proceeding with PayPal.
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;