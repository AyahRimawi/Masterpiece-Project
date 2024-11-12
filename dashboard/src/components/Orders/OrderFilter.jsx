// components/Orders/OrderFilter.jsx
import React from "react";

const OrderFilter = ({ statusFilter, onFilterChange }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onFilterChange("all")}
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          statusFilter === "all"
            ? "bg-primary text-white"
            : "text-gray-700 bg-gray-100 hover:bg-gray-200"
        }`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange("Pending")}
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          statusFilter === "Pending"
            ? "bg-yellow-500 text-white"
            : "text-gray-700 bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Pending
      </button>
      <button
        onClick={() => onFilterChange("Shipped")}
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          statusFilter === "Shipped"
            ? "bg-blue-500 text-white"
            : "text-gray-700 bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Shipped
      </button>
      <button
        onClick={() => onFilterChange("Delivered")}
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          statusFilter === "Delivered"
            ? "bg-green-500 text-white"
            : "text-gray-700 bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Delivered
      </button>
    </div>
  );
};

export default OrderFilter;
