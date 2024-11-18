// components/Orders/Orders.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderList from "../components/Orders/OrderList";
import OrderDetails from "../components/Orders/OrderDetails";
import OrderFilter from "../components/Orders/OrderFilter";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    filterOrders();
  }, [statusFilter, orders]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("/api/admin/orders");
      setOrders(response.data);
      setFilteredOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const filterOrders = () => {
    let filtered = [...orders];
    if (statusFilter !== "all") {
      filtered = orders.filter(
        (order) => order.deliveryStatus === statusFilter
      );
    }
    setFilteredOrders(filtered);
    setCurrentPage(1);
  };

  const handleOrderAction = async (action, orderId) => {
    try {
      await axios.post(`/api/admin/orders/${orderId}/status`, {
        status: action,
      });
      fetchOrders();
      setSelectedOrder(null);
    } catch (error) {
      console.error(`Error ${action} order:`, error);
    }
  };
  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-800">Orders</h1>
        <OrderFilter
          statusFilter={statusFilter}
          onFilterChange={setStatusFilter}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <OrderList orders={currentOrders} onSelectOrder={setSelectedOrder} />
          <div className="mt-4 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((page) => Math.min(page + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
        <div>
          <OrderDetails
            selectedOrder={selectedOrder}
            onAction={handleOrderAction}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
