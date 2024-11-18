// CartPage.jsx
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import useCartStore from "./CartStore";
import { motion, AnimatePresence } from "framer-motion";
import { Gift } from "lucide-react";
import FooterBar from "../../components/Footer/FooterBar";
import TrackOrder from "../../components/Navbar/TrackOrder";
import SearchBar from "../../components/Navbar/SearchBar";

// Import our components
import LuckyWheel from "./CartPageComponents/LuckyWheel";
import SuccessModal from "./CartPageComponents/SuccessModal";
import CartItems from "./CartPageComponents/CartItems";
import CheckoutForm from "./CartPageComponents/CheckoutForm";
import EmptyCart from "./CartPageComponents/EmptyCart";
import LoadingSpinner from "./CartPageComponents/LoadingSpinner";
import ErrorDisplay from "./CartPageComponents/ErrorDisplay";

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
  const [hasUsedWheel, setHasUsedWheel] = useState(false);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  useEffect(() => {
    validateShippingAddress();
  }, [shippingAddress]);

  // Add effect to monitor cart total
  useEffect(() => {
    const total = parseFloat(calculateSubtotal());
    if (total < 50) {
      setShowLuckyWheel(false);
      setAppliedDiscount(0);
      setHasUsedWheel(false); // Reset wheel usage when total goes below 50
    }
  }, [cart]);

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
      
      // Check if total goes below 50 after quantity change
      const newTotal = calculateSubtotal();
      if (parseFloat(newTotal) < 50) {
        setAppliedDiscount(0);
        setShowLuckyWheel(false);
        setHasUsedWheel(false);
      }
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
    return total >= 50 && !hasUsedWheel;
  };

  const handleWheelSpin = (discount) => {
    setAppliedDiscount(discount);
    if (discount > 0) {
      toast.success(`Congratulations! You've won a ${discount * 100}% discount!`);
    }
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

      try {
        await axios.post(
          "/api/cart/clear",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (clearError) {
        console.error("Error clearing cart:", clearError);
      }
      setShowSuccessModal(true);
    } catch (err) {
      console.error("PayPal error:", err);
      toast.error("An error occurred during checkout. Please try again.");
    }
  };

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorDisplay error={error} />;

  if (!cart || !cart.items || cart.items.length === 0) return <EmptyCart />;

  return (
    <div className="min-h-screen bg-gray-50">
      <TrackOrder />
      <SearchBar />
      <br />
      <br />
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <CartItems
            cart={cart}
            handleRemoveItem={handleRemoveItem}
            handleQuantityChange={handleQuantityChange}
            calculateSubtotal={calculateSubtotal}
            calculateTotalAmount={calculateTotalAmount}
            appliedDiscount={appliedDiscount}
          />

          <CheckoutForm
            shippingAddress={shippingAddress}
            handleInputChange={handleInputChange}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            isAddressValid={isAddressValid}
            validateShippingAddress={validateShippingAddress}
            createPayPalOrder={createPayPalOrder}
            onPayPalApprove={onPayPalApprove}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>

      {/* Lucky Wheel notification for eligible orders */}
      {isEligibleForWheel() && !showLuckyWheel && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 p-4 bg-white rounded-xl shadow-lg max-w-sm z-[9998]"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 rounded-lg">
              <Gift className="w-6 h-6 text-gray-600" />
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
              onClick={() => {
                setShowLuckyWheel(true);
                setHasUsedWheel(true);
              }}
              className="px-4 py-2 border border-black bg-black text-white  text-sm font-medium rounded-lg whitespace-nowrap"
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
            onClose={() => {
              setShowLuckyWheel(false);
              setHasUsedWheel(true);
            }}
            onSpin={handleWheelSpin}
            totalAmount={parseFloat(calculateSubtotal())}
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