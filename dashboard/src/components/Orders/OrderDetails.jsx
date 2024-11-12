// // components/Orders/OrderDetails.jsx
// import React from 'react';

// const OrderDetails = ({ selectedOrder, onAction }) => {
//   if (!selectedOrder) {
//     return (
//       <div className="bg-white shadow sm:rounded-lg p-6">
//         <p className="text-gray-500">Select an order to view details</p>
//       </div>
//     );
//   }

//   // تحديث عرض تفاصيل الطلب مع التحقق من وجود جميع البيانات
//   return (
//     <div className="bg-white shadow sm:rounded-lg p-6">
//       <h2 className="text-lg font-medium text-gray-900 mb-4">Order Details</h2>
//       <div className="space-y-4">
//         <p><strong>Order ID:</strong> {selectedOrder._id}</p>
//         <p><strong>User:</strong> {selectedOrder.userId?.name || 'Unknown User'}</p>
//         <p><strong>Total Amount:</strong> ${selectedOrder.totalAmount?.toFixed(2) || '0.00'}</p>
//         <p><strong>Payment Method:</strong> {selectedOrder.paymentMethod || 'Not specified'}</p>
//         <p><strong>Payment Status:</strong> {selectedOrder.paymentStatus || 'Not specified'}</p>
//         {selectedOrder.shippingAddress && (
//           <p><strong>Shipping Address:</strong> {`${selectedOrder.shippingAddress.governorate || ''}, ${selectedOrder.shippingAddress.details || ''}`}</p>
//         )}
        
//         {selectedOrder.items && selectedOrder.items.length > 0 && (
//           <>
//             <h3 className="text-md font-medium text-gray-900 mt-6 mb-2">Order Items:</h3>
//             <ul className="list-disc list-inside">
//               {selectedOrder.items.map((item, index) => (
//                 <li key={index}>
//                   {item.productName || 'Unknown Product'} - {item.color || 'N/A'}, {item.size || 'N/A'}
//                   (Quantity: {item.quantity || 0},
//                   Price: ${item.price?.toFixed(2) || '0.00'})
//                 </li>
//               ))}
//             </ul>
//           </>
//         )}

//         {selectedOrder.paymentStatus !== 'Completed' && (
//           <button
//             onClick={() => onAction('complete', selectedOrder._id)}
//             className="mt-4 w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//           >
//             Mark as Completed
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderDetails;




// components/Orders/OrderDetails.jsx
import React from "react";

const OrderDetails = ({ selectedOrder, onAction }) => {
  if (!selectedOrder) {
    return (
      <div className="bg-white shadow sm:rounded-lg p-6">
        <p className="text-gray-500">Select an order to view details</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow sm:rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Order Details</h2>
      <div className="space-y-4">
        {/* Order Info */}
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Order ID:</span> #{selectedOrder._id}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Customer:</span>{" "}
            {selectedOrder.userId?.name}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Total Amount:</span> $
            {selectedOrder.totalAmount.toFixed(2)}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Payment Method:</span>{" "}
            {selectedOrder.paymentMethod}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Payment Status:</span>{" "}
            {selectedOrder.paymentStatus}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Delivery Status:</span>{" "}
            {selectedOrder.deliveryStatus}
          </p>
        </div>

        {/* Shipping Address */}
        <div className="border-t pt-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">
            Shipping Address
          </h3>
          <p className="text-sm text-gray-600">
            {selectedOrder.shippingAddress.governorate},{" "}
            {selectedOrder.shippingAddress.details}
          </p>
        </div>

        {/* Order Items */}
        <div className="border-t pt-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Order Items</h3>
          <div className="space-y-3">
            {selectedOrder.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <div>
                  <p className="font-medium">{item.productName}</p>
                  <p className="text-gray-600">
                    {item.color} - {item.size}
                  </p>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <p className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t pt-4 space-y-3">
          {selectedOrder.deliveryStatus === "Pending" && (
            <button
              onClick={() => onAction("Shipped", selectedOrder._id)}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Mark as Shipped
            </button>
          )}
          {selectedOrder.deliveryStatus === "Shipped" && (
            <button
              onClick={() => onAction("Delivered", selectedOrder._id)}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Mark as Delivered
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;