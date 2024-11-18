// LoadingSpinner.jsx
import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="p-4 bg-white rounded-full shadow-lg"
      >
        <ShoppingBag className="w-8 h-8 text-gray-600" />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;