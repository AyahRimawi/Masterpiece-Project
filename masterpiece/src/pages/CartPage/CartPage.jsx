// import React, { useEffect } from "react";
// import { toast } from "react-toastify";
// import useCartStore from "./CartStore";

// const CartPage = () => {
//   const { cart, loading, error, fetchCart, updateCartItem, removeCartItem } =
//     useCartStore();

//   useEffect(() => {
//     fetchCart();
//   }, [fetchCart]);

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

//   if (loading) return <div className="text-center mt-8">Loading...</div>;
//   if (error)
//     return <div className="text-center mt-8 text-red-500">{error}</div>;
//   if (!cart || !cart.items || cart.items.length === 0)
//     return <div className="text-center mt-8">Your cart is empty</div>;

//   const total = cart.items.reduce((sum, item) => {
//     const price =
//       item.variantId && item.variantId.price ? item.variantId.price : 0;
//     return sum + price * item.quantity;
//   }, 0);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {cart.items.map((item) => (
//         <div key={item._id} className="flex items-center border-b py-4">
//           <img
//             src={item.variantId?.overviewPicture || "placeholder-image-url"}
//             alt={item.variantId?.name || "Product"}
//             className="w-20 h-20 object-cover mr-4"
//           />
//           <div className="flex-grow">
//             <h2 className="font-semibold">
//               {item.productId?.name || "Product Name"}
//             </h2>
//             <p className="text-gray-600">
//               Color: {item.variantId?.color || "N/A"}, Size:{" "}
//               {item.variantId?.size || "N/A"}
//             </p>
//             <p className="text-gray-600">
//               Price: ${item.variantId?.price?.toFixed(2) || "0.00"}
//             </p>
//             <div className="flex items-center mt-2">
//               <button
//                 onClick={() =>
//                   handleQuantityChange(item._id, item.quantity, -1)
//                 }
//                 className="bg-gray-200 px-2 py-1 rounded"
//               >
//                 -
//               </button>
//               <span className="mx-2">{item.quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(item._id, item.quantity, 1)}
//                 className="bg-gray-200 px-2 py-1 rounded"
//                 disabled={item.quantity >= item.variantId?.quantity}
//               >
//                 +
//               </button>
//             </div>
//           </div>
//           <button
//             onClick={() => handleRemoveItem(item._id)}
//             className="text-red-500 hover:text-red-700"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//       <div className="mt-8 text-xl font-bold">Total: ${total.toFixed(2)}</div>
//     </div>
//   );
// };

// export default CartPage;

// import React, { useEffect } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import useCartStore from "./CartStore";

// const CartPage = () => {
//   const { cart, loading, error, fetchCart, updateCartItem, removeCartItem } =
//     useCartStore();
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   useEffect(() => {
//     fetchCart();
//   }, [fetchCart]);

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

//   const handleCheckout = () => {
//     if (isAuthenticated) {
//       navigate("/checkout");
//     } else {
//       navigate("/login", { state: { from: "/cart" } });
//     }
//   };

//   if (loading) return <div className="text-center mt-8">Loading...</div>;
//   if (error)
//     return <div className="text-center mt-8 text-red-500">{error}</div>;
//   if (!cart || !cart.items || cart.items.length === 0)
//     return <div className="text-center mt-8">Your cart is empty</div>;

//   const total = cart.items.reduce((sum, item) => {
//     const price =
//       item.variantId && item.variantId.price ? item.variantId.price : 0;
//     return sum + price * item.quantity;
//   }, 0);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {cart.items.map((item) => (
//         <div key={item._id} className="flex items-center border-b py-4">
//           <img
//             src={item.variantId?.overviewPicture || "placeholder-image-url"}
//             alt={item.variantId?.name || "Product"}
//             className="w-20 h-20 object-cover mr-4"
//           />
//           <div className="flex-grow">
//             <h2 className="font-semibold">
//               {item.productId?.name || "Product Name"}
//             </h2>
//             <p className="text-gray-600">
//               Color: {item.variantId?.color || "N/A"}, Size:{" "}
//               {item.variantId?.size || "N/A"}
//             </p>
//             <p className="text-gray-600">
//               Price: ${item.variantId?.price?.toFixed(2) || "0.00"}
//             </p>
//             <div className="flex items-center mt-2">
//               <button
//                 onClick={() =>
//                   handleQuantityChange(item._id, item.quantity, -1)
//                 }
//                 className="bg-gray-200 px-2 py-1 rounded"
//               >
//                 -
//               </button>
//               <span className="mx-2">{item.quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(item._id, item.quantity, 1)}
//                 className="bg-gray-200 px-2 py-1 rounded"
//                 disabled={item.quantity >= item.variantId?.quantity}
//               >
//                 +
//               </button>
//             </div>
//           </div>
//           <button
//             onClick={() => handleRemoveItem(item._id)}
//             className="text-red-500 hover:text-red-700"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//       <div className="mt-8 text-xl font-bold">Total: ${total.toFixed(2)}</div>
//       <button
//         onClick={handleCheckout}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
//       >
//         Proceed to Checkout
//       </button>
//     </div>
//   );
// };

// export default CartPage;
// ---------------------------------------------------------------------------------
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import useCartStore from "./CartStore";

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
    return cart.items
      .reduce((total, item) => {
        const price = item.variantId?.price || 0;
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
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
      };

      console.log("Sending order data:", orderData); // للتحقق من البيانات المرسلة

      const token = localStorage.getItem("token");
      const response = await axios.post("/api/orders/create", orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Order creation response:", response.data); // للتحقق من الاستجابة

      try {
        await axios.post(
          "/api/cart/clearCart",
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Cart cleared successfully");
      } catch (clearError) {
        console.error("Error clearing cart:", clearError);
        // يمكنك اختيار ما إذا كنت تريد إظهار رسالة خطأ للمستخدم هنا أم لا
      }
      navigate("/order-confirmation", {
        state: { order: response.data.order },
      });
    } catch (err) {
      console.error("PayPal error:", err);
      if (err.response) {
        console.error("Error response:", err.response.data);
        console.error("Error status:", err.response.status);
      }
      toast.error(
        "An error occurred during PayPal checkout. Please try again."
      );
    }
  };
  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  if (!cart || !cart.items || cart.items.length === 0)
    return <div className="text-center mt-8">Your cart is empty</div>;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-wrap">
      {/* Cart Section */}
      <div className="w-full lg:w-1/2 pr-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cart.items.map((item) => (
          <div key={item._id} className="flex items-center border-b py-4">
            <img
              src={item.variantId?.overviewPicture || "placeholder-image-url"}
              alt={item.variantId?.name || "Product"}
              className="w-20 h-20 object-cover mr-4"
            />
            <div className="flex-grow">
              <h2 className="font-semibold">
                {item.productId?.name || "Product Name"}
              </h2>
              <p className="text-gray-600">
                Color: {item.variantId?.color || "N/A"}, Size:{" "}
                {item.variantId?.size || "N/A"}
              </p>
              <p className="text-gray-600">
                Price: ${item.variantId?.price?.toFixed(2) || "0.00"}
              </p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() =>
                    handleQuantityChange(item._id, item.quantity, -1)
                  }
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(item._id, item.quantity, 1)
                  }
                  className="bg-gray-200 px-2 py-1 rounded"
                  disabled={item.quantity >= item.variantId?.quantity}
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => handleRemoveItem(item._id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="mt-8 text-xl font-bold">
          Total: ${calculateTotalAmount()}
        </div>
      </div>

      {/* Checkout Section */}
      <div className="w-full lg:w-1/2 pl-4 mt-8 lg:mt-0">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
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
              className="bg-blue-500 text-white p-2 rounded w-full"
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
              toast.error(
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
    </div>
  );
};

export default CartPage;
