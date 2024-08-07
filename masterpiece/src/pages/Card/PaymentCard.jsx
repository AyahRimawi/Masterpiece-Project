// PaymentCard.js
import React from "react";

const PaymentCard = ({ onClose }) => {
  return (
    <div className="relative w-[400px] h-[260px] bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-[0_8px_32px_rgba(31,38,135,0.37)] overflow-hidden flex flex-col p-6">
      {/* Card content */}
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Card Number"
            className="text-2xl font-medium bg-white bg-opacity-20 border-b border-white placeholder-gray-300 outline-none w-full rounded-md py-2 px-3"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Card Holder"
              className="text-lg font-medium bg-white bg-opacity-20 border-b border-white placeholder-gray-300 outline-none flex-1 rounded-md py-2 px-3"
            />
            <input
              type="text"
              placeholder="MM/YY"
              className="text-lg font-medium bg-white bg-opacity-20 border-b border-white placeholder-gray-300 outline-none w-24 rounded-md py-2 px-3"
            />
          </div>
        </div>
        <div className="flex items-end justify-between mt-4">
          <p className="text-sm font-medium text-white">Expiry Date</p>
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
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gray-500 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 transition-colors duration-300"
      >
        Close
      </button>
    </div>
  );
};


export default PaymentCard;
