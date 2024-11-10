// ErrorDisplay.jsx
import React from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ErrorDisplay = ({ error }) => {
  const navigate = useNavigate();

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
};

export default ErrorDisplay;
