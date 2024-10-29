// const OrdersInfo = () => {
//   const orders = [
//     { id: 1, date: "2023-05-01", total: 150.99, status: "Delivered" },
//     { id: 2, date: "2023-04-15", total: 89.99, status: "Processing" },
//     { id: 3, date: "2023-03-30", total: 200.5, status: "Shipped" },
//   ];

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Order ID
//             </th>
//             <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Date
//             </th>
//             <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Total
//             </th>
//             <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Status
//             </th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-200">
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td className="px-4 py-2 whitespace-nowrap">{order.id}</td>
//               <td className="px-4 py-2 whitespace-nowrap">{order.date}</td>
//               <td className="px-4 py-2 whitespace-nowrap">
//                 ${order.total.toFixed(2)}
//               </td>
//               <td className="px-4 py-2 whitespace-nowrap">
//                 <span
//                   className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                     order.status === "Delivered"
//                       ? "bg-green-100 text-green-800"
//                       : order.status === "Processing"
//                       ? "bg-yellow-100 text-yellow-800"
//                       : "bg-blue-100 text-blue-800"
//                   }`}
//                 >
//                   {order.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default OrdersInfo;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const OrdersInfo = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("/api/order/getAllOrdersForUser", {
//           withCredentials: true, // This is important for sending cookies
//         });
//         setOrders(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch orders. Please try again later.");
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) return <div className="text-center">Loading...</div>;
//   if (error) return <div className="text-center text-red-500">{error}</div>;

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Order ID
//             </th>
//             <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Date
//             </th>
//             <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Total
//             </th>
//             <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Status
//             </th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-200">
//           {orders.map((order) => (
//             <tr key={order._id}>
//               <td className="px-4 py-2 whitespace-nowrap">{order._id}</td>
//               <td className="px-4 py-2 whitespace-nowrap">
//                 {new Date(order.createdAt).toLocaleDateString()}
//               </td>
//               <td className="px-4 py-2 whitespace-nowrap">
//                 ${order.totalAmount.toFixed(2)}
//               </td>
//               <td className="px-4 py-2 whitespace-nowrap">
//                 <span
//                   className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                     order.status === "Delivered"
//                       ? "bg-green-100 text-green-800"
//                       : order.status === "Processing"
//                       ? "bg-yellow-100 text-yellow-800"
//                       : order.status === "Shipped"
//                       ? "bg-blue-100 text-blue-800"
//                       : "bg-gray-100 text-gray-800"
//                   }`}
//                 >
//                   {order.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrdersInfo;


import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  X,
  Package,
  Calendar,
  CreditCard,
  MapPin,
} from "lucide-react";

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

const OrdersInfo = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

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

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-blue-100 text-blue-800";
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-6 py-4">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">My Orders</h2>
        <p className="text-gray-600">View and track your orders</p>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
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
            {orders.map((order) => (
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
                      order.paymentStatus
                    )}`}
                  >
                    {order.paymentStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
                <div className="space-y-2">
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
                    <span>Status: {selectedOrder.paymentStatus}</span>
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
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Order Items
                </h3>
                <div className="space-y-4">
                  {selectedOrder.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <img
                        src={item.image} // Using the image field from your data
                        alt={item.productName}
                        className="h-20 w-20 object-cover rounded"
                        onError={(e) => {
                          e.target.onerror = null; // Prevent infinite loop
                          e.target.src = "/api/placeholder/100/100"; // Fallback image if the main image fails
                        }}
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">
                          {item.productName}
                        </h4>
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