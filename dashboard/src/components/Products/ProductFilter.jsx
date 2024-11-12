import React from "react";

const ProductFilter = ({ statusFilter, onFilterChange }) => {
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
        onClick={() => onFilterChange("Approved")}
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          statusFilter === "Approved"
            ? "bg-green-500 text-white"
            : "text-gray-700 bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Approved
      </button>
      <button
        onClick={() => onFilterChange("Rejected")}
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          statusFilter === "Rejected"
            ? "bg-red-500 text-white"
            : "text-gray-700 bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Rejected
      </button>
    </div>
  );
};

export default ProductFilter;
