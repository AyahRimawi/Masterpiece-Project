import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderList from "../components/Orders/OrderList";
import OrderDetails from "../components/Orders/OrderDetails";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("/api/admin/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleOrderAction = async (action, orderId) => {
    try {
      await axios.post(`/api/admin/orders/${orderId}/${action}`);
      fetchOrders();
    } catch (error) {
      console.error(`Error ${action} order:`, error);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-gray-800">Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <OrderList orders={orders} onSelectOrder={setSelectedOrder} />
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
