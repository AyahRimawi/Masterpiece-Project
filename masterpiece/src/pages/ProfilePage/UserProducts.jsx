import React, { useState, useEffect } from "react";
import axios from "axios";
import { ShoppingBag, Clock, CheckCircle2, Ban, Package } from "lucide-react";

const StatusStepper = ({ status, onStepClick, isClickable = false }) => {
  const steps = [
    {
      key: "Pending",
      label: "Pending Approval",
      icon: Clock,
      description: "Products awaiting approval",
    },
    {
      key: "Active",
      label: "Active Listings",
      icon: Package,
      description: "Currently listed products",
    },
    {
      key: "Sold",
      label: "Sold Products",
      icon: CheckCircle2,
      description: "Successfully sold items",
    },
  ];

  const getStepNumber = (stepKey) => {
    switch (stepKey) {
      case "Pending":
        return 0;
      case "Active":
        return 1;
      case "Sold":
        return 2;
      default:
        return 0;
    }
  };

  const currentStep = getStepNumber(status);

  return (
    <div className="w-full py-6 px-4 md:px-6">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-gray-200 rounded-full" />
        <div
          className="absolute left-0 top-1/2 h-1 -translate-y-1/2 bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />

        {/* Moving Bag */}
        {currentStep === 1 && (
          <div
            className="absolute top-1/2 -translate-y-1/2 transform transition-all duration-500"
            style={{ left: `${(currentStep / (steps.length - 1)) * 100}%` }}
          >
            <div className="animate-bounce">
              <ShoppingBag className="h-8 w-8 text-blue-600 -translate-x-1/2" />
            </div>
          </div>
        )}

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = index <= currentStep;
            const isActive = index === currentStep;
            const Icon = step.icon;

            return (
              <div
                key={step.key}
                onClick={() => isClickable && onStepClick(step.key)}
                className={`flex flex-col items-center ${
                  index === 0
                    ? "items-start"
                    : index === steps.length - 1
                    ? "items-end"
                    : "items-center"
                } ${isClickable ? "cursor-pointer group" : ""}`}
              >
                {/* Step Circle with Icon */}
                <div
                  className={`
                    flex h-12 w-12 items-center justify-center rounded-full
                    border-4 transition-all duration-500 
                    ${
                      isCompleted
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-gray-300 bg-white text-gray-400"
                    }
                    ${isActive ? "ring-4 ring-blue-100" : ""}
                    ${
                      isClickable
                        ? "group-hover:scale-110 group-hover:shadow-lg"
                        : ""
                    }
                  `}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Label and Description */}
                <div
                  className={`mt-3 text-center ${
                    index === 0
                      ? "text-left"
                      : index === steps.length - 1
                      ? "text-right"
                      : "text-center"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold mb-1
                    ${isCompleted ? "text-blue-600" : "text-gray-500"}
                    ${isClickable && "group-hover:text-blue-700"}
                  `}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-500 hidden md:block">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const UserProducts = () => {
  const [products, setProducts] = useState({
    pending: [],
    active: [],
    sold: [],
  });
  const [activeStatus, setActiveStatus] = useState("Pending");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchUserProducts();
  }, []);

  useEffect(() => {
    filterProducts(activeStatus);
  }, [products, activeStatus]);

  const fetchUserProducts = async () => {
    try {
      const response = await axios.get("/api/product/getUserProducts");
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const filterProducts = (status) => {
    setFilteredProducts(products[status.toLowerCase()] || []);
  };

  const handleStepClick = (status) => {
    setActiveStatus(status);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Sold":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Active":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="w-full px-4 md:px-6 py-4">
      {/* <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">My Products</h2>
        <p className="text-gray-600">Manage your product listings</p>
      </div> */}

      {/* Main Stepper for Filtering */}
      <div className="mb-8 bg-white rounded-lg shadow-sm p-4">
        <StatusStepper
          status={activeStatus}
          onStepClick={handleStepClick}
          isClickable={true}
        />

        {/* Product Count */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Showing {filteredProducts.length} {activeStatus.toLowerCase()}{" "}
            product{filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-8">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">
              No {activeStatus.toLowerCase()} products found
            </p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Variants
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr
                  key={product._id}
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src={product.variants[0]?.overviewPicture}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {product.description.substring(0, 50)}...
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {product.variants.length} variant
                      {product.variants.length !== 1 ? "s" : ""}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${product.variants[0]?.price}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        activeStatus
                      )}`}
                    >
                      {activeStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserProducts;