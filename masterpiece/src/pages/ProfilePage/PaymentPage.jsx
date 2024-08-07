// PaymentPage.js
import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaymentPage = () => {
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePaypalApprove = (data, actions) => {
    setIsProcessing(true);
    return actions.order.capture().then(function (details) {
      setIsProcessing(false);
      setPaymentStatus("Payment completed successfully!");
      console.log("Transaction completed by " + details.payer.name.given_name);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-[#193db0]">
            Make a Payment
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Secure payment processing with PayPal
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount (USD)
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="amount"
                id="amount"
                className="focus:ring-[#193db0] focus:border-[#193db0] block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0.00"
                aria-describedby="price-currency"
                value={amount}
                onChange={handleAmountChange}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm" id="price-currency">
                  USD
                </span>
              </div>
            </div>
          </div>

          {amount && (
            <div className="pt-4">
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: amount,
                        },
                      },
                    ],
                  });
                }}
                onApprove={handlePaypalApprove}
                style={{ layout: "vertical" }}
              />
            </div>
          )}

          {isProcessing && (
            <div className="text-center text-[#193db0]">
              Processing your payment...
            </div>
          )}

          {paymentStatus && (
            <div className="text-center text-green-600 font-semibold">
              {paymentStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
