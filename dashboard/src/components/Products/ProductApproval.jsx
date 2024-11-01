import React, { useState } from "react";

const ProductApproval = ({ selectedProduct, onAction }) => {
  const [reason, setReason] = useState("");

  const handleAction = (action) => {
    onAction(action, selectedProduct._id, reason);
    setReason("");
  };

  if (!selectedProduct) {
    return (
      <div className="bg-white shadow sm:rounded-lg p-6">
        <p className="text-gray-500">Select a product to view actions</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow sm:rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Product Actions
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Selected Product: {selectedProduct.name}
      </p>
      <div className="space-y-4">
        {selectedProduct.approvalStatus === "Pending" && (
          <>
            <button
              onClick={() => handleAction("approve")}
              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Approve Product
            </button>
            <button
              onClick={() => handleAction("reject")}
              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Reject Product
            </button>
          </>
        )}
        <button
          onClick={() => handleAction("delete")}
          className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Delete Product
        </button>
        <div>
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-gray-700"
          >
            Reason for action
          </label>
          <textarea
            id="reason"
            name="reason"
            rows={3}
            className="shadow-sm focus:ring-primary focus:border-primary mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            placeholder="Enter reason for action"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ProductApproval;
