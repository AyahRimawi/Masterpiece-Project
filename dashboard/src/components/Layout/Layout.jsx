import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  HomeIcon,
  UsersIcon,
  ShoppingBagIcon,
  ClipboardDocumentListIcon,
  Bars3Icon,
  XMarkIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline"; 

const navItems = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Users", href: "/users", icon: UsersIcon },
  { name: "Products", href: "/products", icon: ShoppingBagIcon },
  { name: "Orders", href: "/orders", icon: ClipboardDocumentListIcon },
  { name: "Messages", href: "/messages", icon: EnvelopeIcon },
];

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout, user } = useAuth();
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="flex items-center justify-center h-16 bg-black">
          <span className="text-white text-2xl font-semibold">
            Admin Dashboard
          </span>
        </div>
        <nav className="mt-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-6 py-2 mt-4 duration-200 border-l-4 ${
                location.pathname === item.href
                  ? "bg-black bg-opacity-10 border-black text-black"
                  : "border-transparent hover:bg-gray-100 hover:border-black"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="mx-4">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b-1 border-gray-200">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center">
            <span className="text-gray-800 text-sm mr-4">{user?.name}</span>
            <button
              onClick={logout}
              className=" border border-black hover:bg-black hover:text-white px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
