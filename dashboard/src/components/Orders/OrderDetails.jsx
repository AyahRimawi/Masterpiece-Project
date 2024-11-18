// components/Orders/OrderDetails.jsx
import React from "react";

const OrderDetails = ({ selectedOrder, onAction }) => {
  if (!selectedOrder) {
    return (
      <div className="bg-white shadow sm:rounded-lg p-6">
        <p className="text-gray-500">Select an order to view details</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow sm:rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Order Details</h2>
      <div className="space-y-4">
        {/* Order Info */}
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Order ID:</span> #{selectedOrder._id}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Customer:</span>{" "}
            {selectedOrder.userId?.name}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Total Amount:</span> 
            {selectedOrder.totalAmount.toFixed(2)} JD
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Payment Method:</span>{" "}
            {selectedOrder.paymentMethod}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Payment Status:</span>{" "}
            {selectedOrder.paymentStatus}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Delivery Status:</span>{" "}
            {selectedOrder.deliveryStatus}
          </p>
        </div>

        {/* Shipping Address */}
        <div className="border-t pt-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">
            Shipping Address
          </h3>
          <p className="text-sm text-gray-600">
            {selectedOrder.shippingAddress.governorate},{" "}
            {selectedOrder.shippingAddress.details}
          </p>
        </div>

        {/* Order Items */}
        <div className="border-t pt-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">
            Order Items
          </h3>
          <div className="space-y-3">
            {selectedOrder.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <div>
                  <p className="font-medium">{item.productName}</p>
                  <p className="text-gray-600">
                    {item.color} - {item.size}
                  </p>
                  <p className="text-gray-600">
                    {item.price.toFixed(2)} x {item.quantity} JD
                  </p>
                </div>
                <p className="font-medium">
                  {(item.price * item.quantity).toFixed(2)} JD
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t pt-4 space-y-3">
          {selectedOrder.deliveryStatus === "Pending" && (
            <button
              onClick={() => onAction("Shipped", selectedOrder._id)}
              className="w-full px-4 py-2 text-sm font-medium text-white  bg-black rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Mark as Shipped
            </button>
          )}
          {selectedOrder.deliveryStatus === "Shipped" && (
            <button
              onClick={() => onAction("Delivered", selectedOrder._id)}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Mark as Delivered
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;