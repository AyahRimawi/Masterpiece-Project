const OrdersInfo = () => {
  const orders = [
    { id: 1, date: "2023-05-01", total: 150.99, status: "Delivered" },
    { id: 2, date: "2023-04-15", total: 89.99, status: "Processing" },
    { id: 3, date: "2023-03-30", total: 200.5, status: "Shipped" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-4 py-2 whitespace-nowrap">{order.id}</td>
              <td className="px-4 py-2 whitespace-nowrap">{order.date}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                ${order.total.toFixed(2)}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-800"
                      : order.status === "Processing"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default OrdersInfo;
