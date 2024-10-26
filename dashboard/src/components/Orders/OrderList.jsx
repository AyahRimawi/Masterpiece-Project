// import React from "react";

// const OrderList = ({ orders, onSelectOrder }) => {
//   return (
//     <div className="bg-white shadow overflow-hidden sm:rounded-md">
//       <ul className="divide-y divide-gray-200">
//         {orders.map((order) => (
//           <li key={order._id}>
//             <div
//               className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer"
//               onClick={() => onSelectOrder(order)}
//             >
//               <div className="flex items-center justify-between">
//                 <p className="text-sm font-medium text-primary truncate">
//                   Order #{order._id}
//                 </p>
//                 <div className="ml-2 flex-shrink-0 flex">
//                   <p
//                     className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       order.paymentStatus === "Completed"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-yellow-100 text-yellow-800"
//                     }`}
//                   >
//                     {order.paymentStatus}
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-2 sm:flex sm:justify-between">
//                 <div className="sm:flex">
//                   <p className="flex items-center text-sm text-gray-500">
//                     Total: ${order.totalAmount.toFixed(2)}
//                   </p>
//                 </div>
//                 <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
//                   <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default OrderList;


// components/Orders/OrderList.jsx
import React from 'react';

const OrderList = ({ orders, onSelectOrder }) => {
  if (!orders || orders.length === 0) {
    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-md p-6">
        <p className="text-gray-500">No orders found</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {orders.map((order) => (
          <li key={order._id}>
            <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer" onClick={() => onSelectOrder(order)}>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-primary truncate">
                  Order #{order._id}
                </p>
                <div className="ml-2 flex-shrink-0 flex">
                  <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.paymentStatus === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.paymentStatus || 'Pending'}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    Total: ${order.totalAmount?.toFixed(2) || '0.00'}
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <p>
                    Date: {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;