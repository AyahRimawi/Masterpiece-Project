import React, { useState } from "react";
import { motion } from "framer-motion";
import ThankYouCard from "./ThankYouCard";
import { Link } from "react-router-dom";

const PaymentCard = ({ onClose, onConfirm }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleConfirmClick = () => {
    setShowConfirmation(true);
  };

  const handleFinalConfirm = () => {
    onConfirm(); // إذا كانت هذه الدالة تقوم بشيء آخر، تأكد من أنها تعمل بشكل صحيح
    setShowConfirmation(false); // إغلاق نافذة التأكيد
    setShowThankYou(true); // عرض بطاقة الشكر
  };

  if (showThankYou) {
    return <ThankYouCard />;
  }

  return (
    <div className="relative w-[400px] h-[260px] bg-transparent backdrop-blur-md rounded-lg shadow-[0_8px_32px_rgba(31,38,135,0.37)] overflow-hidden flex flex-col p-6">
      {/* Card content */}
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Card Number"
            className="text-2xl font-medium bg-transparent border-b border-white placeholder-gray-300 outline-none w-full rounded-md py-2 px-3"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Card Holder"
              className="text-lg font-medium bg-transparent border-b border-white placeholder-gray-300 outline-none flex-1 rounded-md py-2 px-3"
            />
            <input
              type="text"
              placeholder="MM/YY"
              className="text-lg font-medium bg-transparent border-b border-white placeholder-gray-300 outline-none w-24 rounded-md py-2 px-3"
            />
          </div>
        </div>
        <div className="flex items-end justify-between mt-4">
          <p className="text-sm font-medium text-white"></p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 58 36"
            height="36"
            width="58"
          >
            <circle
              fillOpacity="0.62"
              fill="#F9CCD1"
              r="18"
              cy="18"
              cx="18"
            ></circle>
            <circle
              fill="#424242"
              r="18"
              cy="18"
              cx="40"
              opacity="0.36"
            ></circle>
          </svg>
        </div>
      </div>
      {/* Buttons */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          onClick={onClose}
          className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 transition-colors duration-300"
        >
          Close
        </button>
        <button
          onClick={handleConfirmClick}
          className="px-6 py-2 bg-[#193db0] text-white font-semibold rounded-md shadow-md hover:bg-[#174b8b] transition-colors duration-300"
        >
          Confirm
        </button>
      </div>

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg w-96"
          >
            <h2 className="text-2xl font-semibold text-[#193db0] mb-4">
              Confirm Payment
            </h2>
            <p className="text-gray-700 mb-6">Are you sure?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <Link to={"/ThankYouCard"}>
                <button
                  onClick={handleFinalConfirm}
                  className="px-4 py-2 bg-[#193db0] text-white rounded-lg hover:bg-[#174b8b]"
                >
                  Yes
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PaymentCard;
