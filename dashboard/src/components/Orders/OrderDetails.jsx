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
        <p>
          <strong>Order ID:</strong> {selectedOrder._id}
        </p>
        <p>
          <strong>User:</strong> {selectedOrder.userId.name}
        </p>
        <p>
          <strong>Total Amount:</strong> ${selectedOrder.totalAmount.toFixed(2)}
        </p>
        <p>
          <strong>Payment Method:</strong> {selectedOrder.paymentMethod}
        </p>
        <p>
          <strong>Payment Status:</strong> {selectedOrder.paymentStatus}
        </p>
        <p>
          <strong>Shipping Address:</strong>{" "}
          {selectedOrder.shippingAddress.governorate},{" "}
          {selectedOrder.shippingAddress.details}
        </p>

        <h3 className="text-md font-medium text-gray-900 mt-6 mb-2">
          Order Items:
        </h3>
        <ul className="list-disc list-inside">
          {selectedOrder.items.map((item, index) => (
            <li key={index}>
              {item.productName} - {item.color}, {item.size} (Quantity:{" "}
              {item.quantity}, Price: ${item.price.toFixed(2)})
            </li>
          ))}
        </ul>

        {selectedOrder.paymentStatus !== "Completed" && (
          <button
            onClick={() => onAction("complete", selectedOrder._id)}
            className="mt-4 w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Mark as Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
