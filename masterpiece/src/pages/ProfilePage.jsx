import React, { useState } from "react";

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState("personal");

  const sections = [
    { id: "personal", name: "Personal Info", icon: "👤" },
    { id: "orders", name: "My Orders", icon: "🛍️" },
    { id: "rentals", name: "My Rentals", icon: "👗" },
    { id: "favorites", name: "Favorites", icon: "❤️" },
    { id: "sizes", name: "My Sizes", icon: "📏" },
    { id: "addresses", name: "Addresses", icon: "🏠" },
    { id: "payment", name: "Payment", icon: "💳" },
  ];

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...");
  };

  const handleHomeNavigation = () => {
    // Implement navigation to home page here
    console.log("Navigating to home page...");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Sidebar */}
            <div className="md:w-1/4 bg-gray-50 p-4">
              <div className="flex items-center justify-center mb-8">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-[#193db0]"
                />
              </div>
              <h2 className="text-[#193db0] text-xl font-bold mb-4 text-center">
                Aya Rimawi
              </h2>
              <nav>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    className={`w-full text-left p-3 rounded mb-2 flex items-center ${
                      activeSection === section.id
                        ? "bg-[#193db0] text-white"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    <span className="mr-3">{section.icon}</span>
                    {section.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="md:w-3/4 p-8">
              <h1 className="text-3xl font-bold text-[#193db0] mb-6">
                {sections.find((s) => s.id === activeSection).name}
              </h1>
              {activeSection === "personal" && <PersonalInfo />}
              {activeSection === "orders" && <OrdersInfo />}
              {/* Add other sections here */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-200">
        <div className="flex justify-between">
          <button
            onClick={handleHomeNavigation}
            className="flex-1 mr-2 p-3 rounded flex flex-col items-center justify-center text-gray-600 hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </button>
          <button
            onClick={handleLogout}
            className="flex-1 ml-2 p-3 rounded flex flex-col items-center justify-center text-gray-600 hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const PersonalInfo = () => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
          />
        </div>
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bg-[#193db0] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${order.total.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
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

export default ProfilePage;
