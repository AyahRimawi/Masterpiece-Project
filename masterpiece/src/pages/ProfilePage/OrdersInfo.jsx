import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  X,
  Package,
  Calendar,
  CreditCard,
  MapPin,
  Truck,
  CheckCircle2,
  Clock,
} from "lucide-react";

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
          {children}
        </div>
      </div>
    </div>
  );
};

const OrderStatusStepper = ({ status, onStepClick, isClickable = false }) => {
  const steps = [
    {
      key: "Pending",
      label: "Order Pending",
      icon: Clock,
      description: "Orders being processed",
    },
    {
      key: "Shipped",
      label: "Order Shipped",
      icon: Truck,
      description: "Orders in transit",
    },
    {
      key: "Delivered",
      label: "Order Delivered",
      icon: CheckCircle2,
      description: "Completed orders",
    },
  ];

  const getStepNumber = (stepKey) => {
    switch (stepKey) {
      case "Pending":
        return 0;
      case "Shipped":
        return 1;
      case "Delivered":
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

        {/* Moving Truck */}
        {currentStep === 1 && (
          <div
            className="absolute top-1/2 -translate-y-1/2 transform transition-all duration-500"
            style={{ left: `${(currentStep / (steps.length - 1)) * 100}%` }}
          >
            <div className="animate-bounce">
              <Truck className="h-8 w-8 text-blue-600 -translate-x-1/2" />
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

const OrdersInfo = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeStatus, setActiveStatus] = useState("Pending");

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    filterOrders(activeStatus);
  }, [orders, activeStatus]);

  const fetchOrders = async () => {
    try {
      const response = await fetch("/api/orders/user-orders", {
        credentials: "include",
      });
      const data = await response.json();
      setOrders(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  const filterOrders = (status) => {
    const filtered = orders.filter((order) => order.deliveryStatus === status);
    setFilteredOrders(filtered);
  };

  const handleStepClick = (status) => {
    setActiveStatus(status);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-6 py-4">
      {/* <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">My Orders</h2>
        <p className="text-gray-600">View and track your orders</p>
      </div> */}

      {/* Main Stepper for Filtering */}
      <div className="mb-8 bg-white rounded-lg shadow-sm p-4">
        <OrderStatusStepper
          status={activeStatus}
          onStepClick={handleStepClick}
          isClickable={true}
        />

        {/* Order Count */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Showing {filteredOrders.length} {activeStatus} order
            {filteredOrders.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No {activeStatus} orders found</p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr
                  key={order._id}
                  onClick={() => setSelectedOrder(order)}
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    #{order._id.slice(-6)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(order.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${order.totalAmount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        order.deliveryStatus
                      )}`}
                    >
                      {order.deliveryStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Order Details Modal */}
      <Modal isOpen={!!selectedOrder} onClose={() => setSelectedOrder(null)}>
        {selectedOrder && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Order Details #{selectedOrder._id.slice(-6)}
                </h3>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>
                      Order Date: {formatDate(selectedOrder.createdAt)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CreditCard className="h-4 w-4" />
                    <span>Payment Method: {selectedOrder.paymentMethod}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Package className="h-4 w-4" />
                    <span>Status: {selectedOrder.deliveryStatus}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>
                      Shipping Address:{" "}
                      {selectedOrder.shippingAddress.governorate},{" "}
                      {selectedOrder.shippingAddress.details}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Order Items
                </h4>
                <div className="space-y-4">
                  {selectedOrder.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="h-20 w-20 object-cover rounded"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/api/placeholder/100/100";
                        }}
                      />
                      <div className="flex-1">
                        <h5 className="text-sm font-medium text-gray-900">
                          {item.productName}
                        </h5>
                        <div className="mt-1 text-sm text-gray-500">
                          <p>Color: {item.color}</p>
                          <p>Size: {item.size}</p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-medium text-gray-900">
                  <span>Total Amount</span>
                  <span>${selectedOrder.totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default OrdersInfo;