// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
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

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/login");
//     }
//   }, [isAuthenticated, navigate]);

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


import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import useCartStore from "../CartPage/CartStore";

const CheckoutPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [shippingAddress, setShippingAddress] = useState({
    governorate: "",
    details: "",
  });

  const { cart, clearCart } = useCartStore();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to login page with the current location
    //   navigate("/login", { state: { from: location } });
    }
  }, [isAuthenticated, navigate, location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.post("/api/orders/create", {
        userId,
        paymentMethod,
        shippingAddress,
      });
      setOrderDetails(response.data.order);
      if (paymentMethod === "CashOnDelivery") {
        clearCart();
        navigate("/order-confirmation", {
          state: { order: response.data.order },
        });
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handlePayPalApprove = async (data, actions) => {
    try {
      const details = await actions.order.capture();
      const userId = localStorage.getItem("userId");
      const response = await axios.post("/api/orders/create", {
        userId,
        paymentMethod: "PayPal",
        shippingAddress,
        paypalOrderId: details.id,
      });
      clearCart();
      navigate("/order-confirmation", {
        state: { order: response.data.order },
      });
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Governorate</label>
          <input
            type="text"
            name="governorate"
            value={shippingAddress.governorate}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
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
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Place Order
          </button>
        )}
      </form>
      {paymentMethod === "PayPal" && (
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: cart.totalAmount.toString(),
                  },
                },
              ],
            });
          }}
          onApprove={handlePayPalApprove}
        />
      )}
    </div>
  );
};

export default CheckoutPage;