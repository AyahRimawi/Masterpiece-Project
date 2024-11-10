// CartItems.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Trash2, Plus, Minus, Gift } from "lucide-react";

const CartItems = ({
  cart,
  handleRemoveItem,
  handleQuantityChange,
  calculateSubtotal,
  calculateTotalAmount,
  appliedDiscount,
}) => {
  return (
    <div className="flex-1">
      <div className="flex items-center space-x-3 mb-6">
        <ShoppingBag className="w-6 h-6 text-[#193db0]" />
        <h1 className="text-2xl font-medium text-gray-800">Shopping Cart</h1>
        <span className="text-base text-gray-500">
          ({cart.items.length} items)
        </span>
      </div>

      <AnimatePresence>
        {cart.items.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl mb-4 overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-200"
          >
            <div className="p-6 flex items-center gap-6">
              <div className="relative group">
                <img
                  src={
                    item.variantId?.overviewPicture || "placeholder-image-url"
                  }
                  alt={item.productId?.name}
                  className="w-28 h-28 object-cover rounded-lg"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.productId?.name}
                    </h3>
                    <div className="mt-1 flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {item.variantId?.color || "N/A"}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Size: {item.variantId?.size || "N/A"}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleRemoveItem(item._id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-semibold text-[#193db0]">
                    JD{(item.variantId?.price || 0).toFixed(2)}
                  </span>

                  <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        handleQuantityChange(item._id, item.quantity, -1)
                      }
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#193db0] hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </motion.button>
                    <span className="w-10 text-center font-medium text-gray-900">
                      {item.quantity}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        handleQuantityChange(item._id, item.quantity, 1)
                      }
                      disabled={item.quantity >= item.variantId?.quantity}
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#193db0] hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50"
                    >
                      <Plus className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {appliedDiscount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-green-700">
              <Gift className="w-5 h-5" />
              <span className="font-medium">
                Discount Applied: {(appliedDiscount * 100).toFixed(0)}% OFF
              </span>
            </div>
            <span className="text-green-700 font-medium">
              -JD
              {(parseFloat(calculateSubtotal()) * appliedDiscount).toFixed(2)}
            </span>
          </div>
        </motion.div>
      )}

      <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
        <div className="space-y-4">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>JD{calculateSubtotal()}</span>
          </div>
          {appliedDiscount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>
                -JD
                {(parseFloat(calculateSubtotal()) * appliedDiscount).toFixed(2)}
              </span>
            </div>
          )}
          <div className="flex justify-between items-center pt-4 border-t">
            <span className="text-lg font-semibold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-[#193db0]">
              JD{calculateTotalAmount()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
