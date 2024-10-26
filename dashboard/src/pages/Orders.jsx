// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import OrderList from "../components/Orders/OrderList";
// import OrderDetails from "../components/Orders/OrderDetails";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get("/api/admin/orders");
//       setOrders(response.data);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   const handleOrderAction = async (action, orderId) => {
//     try {
//       await axios.post(`/api/admin/orders/${orderId}/${action}`);
//       fetchOrders();
//     } catch (error) {
//       console.error(`Error ${action} order:`, error);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h1 className="text-3xl font-semibold text-gray-800">Orders</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="md:col-span-2">
//           <OrderList orders={orders} onSelectOrder={setSelectedOrder} />
//         </div>
//         <div>
//           <OrderDetails
//             selectedOrder={selectedOrder}
//             onAction={handleOrderAction}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;


// pages/Orders.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderList from '../components/Orders/OrderList';
import OrderDetails from '../components/Orders/OrderDetails';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/admin/orders', { withCredentials: true });
        console.log('Fetched orders:', response.data);
        setOrders(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Failed to load orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleOrderAction = async (action, orderId) => {
    try {
      await axios.post(`/api/admin/orders/${orderId}/${action}`, {}, { withCredentials: true });
      // Refresh orders after action
      const response = await axios.get('/api/admin/orders', { withCredentials: true });
      setOrders(response.data);
      // Update selected order if it's the one that was modified
      if (selectedOrder && selectedOrder._id === orderId) {
        const updatedOrder = response.data.find(order => order._id === orderId);
        setSelectedOrder(updatedOrder);
      }
    } catch (error) {
      console.error(`Error ${action} order:`, error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-gray-800">Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <OrderList 
            orders={orders} 
            onSelectOrder={setSelectedOrder}
          />
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