// CheckoutForm.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, CreditCard, Truck, AlertCircle } from "lucide-react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const CheckoutForm = ({
  shippingAddress,
  handleInputChange,
  paymentMethod,
  setPaymentMethod,
  isAddressValid,
  validateShippingAddress,
  createPayPalOrder,
  onPayPalApprove,
  handleSubmit,
}) => {
  return (
    <div className="lg:w-[400px]">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-slate-100 rounded-lg">
              <MapPin className="w-5 h-5 text-gray-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              Shipping Details
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Governorate
              </label>
              <div className="relative">
                <select
                  name="governorate"
                  value={shippingAddress.governorate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-slate-200 focus:border-transparent transition-all appearance-none"
                >
                  <option value="">Select Governorate</option>
                  <option value="Amman">Amman</option>
                  <option value="Zarqa">Zarqa</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address Details
              </label>
              <textarea
                name="details"
                value={shippingAddress.details}
                onChange={handleInputChange}
                required
                placeholder="Enter your detailed address..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-slate-200 focus:border-transparent transition-all resize-none h-32"
              />
            </div>

            <div className="pt-4">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Payment Method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setPaymentMethod("PayPal")}
                  className={`relative p-4 flex flex-col items-center gap-2 rounded-lg border-2 ${
                    paymentMethod === "PayPal"
                      ? "border-gray-600 bg-gray-100"
                      : "border-gray-200 hover:border-gray-300"
                  } transition-all group`}
                >
                  <CreditCard
                    className={`w-6 h-6 ${
                      paymentMethod === "PayPal"
                        ? "text-[#000]"
                        : "text-gray-400 group-hover:text-gray-500"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      paymentMethod === "PayPal"
                        ? "text-[#000]"
                        : "text-gray-700"
                    }`}
                  >
                    PayPal
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setPaymentMethod("CashOnDelivery")}
                  className={`relative p-4 flex flex-col items-center gap-2 rounded-lg border-2 ${
                    paymentMethod === "CashOnDelivery"
                      ? "border-gray-600 bg-gray-100"
                      : "border-gray-200 hover:border-gray-300"
                  } transition-all group`}
                >
                  <Truck
                    className={`w-6 h-6 ${
                      paymentMethod === "CashOnDelivery"
                        ? "text-[#000]"
                        : "text-gray-400 group-hover:text-gray-500"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      paymentMethod === "CashOnDelivery"
                        ? "text-[#000]"
                        : "text-gray-700"
                    }`}
                  >
                    Cash on Delivery
                  </span>
                </motion.button>
              </div>
            </div>

            {paymentMethod === "CashOnDelivery" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={!isAddressValid}
                  className="w-full py-3 px-4 
                  border border-black hover:bg-black hover:text-white 
                  bg-[#fff] text-sm font-semibold rounded-lg 
                          disabled:opacity-50 disabled:cursor-not-allowed 
                           shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
                >
                  <Truck className="w-4 h-4" />
                  Place Order
                </motion.button>
              </motion.div>
            )}
          </form>

          {paymentMethod === "PayPal" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4"
            >
              {isAddressValid ? (
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-[#193db0] flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Proceed with PayPal payment below
                    </p>
                  </div>
                  <PayPalButtons
                    createOrder={createPayPalOrder}
                    onApprove={onPayPalApprove}
                    onError={(err) => {
                      console.error("PayPal error:", err);
                      toast.error("PayPal error occurred. Please try again.");
                    }}
                    style={{
                      layout: "vertical",
                      shape: "pill",
                    }}
                  />
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 rounded-lg flex items-center gap-2 text-red-600"
                >
                  <AlertCircle className="w-5 h-5" />
                  <p className="text-sm">
                    Please complete your shipping address first
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
