
import React, { useState } from "react";

const PaymentCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="relative h-[260px] w-[400px] flex flex-col justify-between px-6 py-10 text-white rounded-3xl bg-transparent border border-[#193db0] shadow-lg">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Card Number"
              className="text-2xl font-medium bg-transparent border-b border-white placeholder-white placeholder-opacity-70 outline-none w-full"
            />
            <div className="flex gap-4">
              <input
                type="text"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                placeholder="Card Holder"
                className="text-lg font-medium bg-transparent border-b border-white placeholder-white placeholder-opacity-70 outline-none flex-1"
              />
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                className="text-lg font-medium bg-transparent border-b border-white placeholder-white placeholder-opacity-70 outline-none w-24"
              />
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium">Expiry Date</p>
            </div>
            <div>
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
        </div>
      </div>
      <button className="mt-8 px-6 py-2 bg-[#193db0] text-white font-semibold rounded-lg shadow-md hover:bg-[#174b8b] transition-colors duration-300">
        Confirm Payment
      </button>
    </div>
  );
};

export default PaymentCard;