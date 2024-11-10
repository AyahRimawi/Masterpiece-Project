// EmptyCart.jsx
import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

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
};

export default EmptyCart;
