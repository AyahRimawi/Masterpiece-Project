// Modal.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import PaymentCard from "./PaymentCard";

const Modal = ({ isOpen, onClose }) => {
  const [isPaymentCardOpen, setIsPaymentCardOpen] = useState(false);

  const handleConfirm = () => {
    setIsPaymentCardOpen(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
      {isPaymentCardOpen ? (
        <PaymentCard onClose={() => setIsPaymentCardOpen(false)} />
      ) : (
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
          <p className="text-gray-700 mb-6">
            Are you sure you want to proceed with the payment?
          </p>
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="px-4 py-2 bg-[#193db0] text-white rounded-lg hover:bg-[#174b8b]"
            >
              Confirm
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Modal;
