import React from "react";
import { UsersIcon } from "@heroicons/react/24/outline";

const UserStats = ({ totalUsers }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center">
        <div className="p-3 rounded-full bg-blue-100 mr-4">
          <UsersIcon className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Total Users</p>
          <p className="text-2xl font-semibold text-gray-900">{totalUsers}</p>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
