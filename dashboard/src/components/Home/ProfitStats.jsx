import React from "react";
import {
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";


const ProfitStats = ({ totalSales, totalProfit }) => {
  return (
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-green-100 mr-4">
            <CurrencyDollarIcon className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Sales</p>
            <p className="text-2xl font-semibold text-gray-900">
              ${totalSales.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-indigo-100 mr-4">
            <ArrowTrendingUpIcon className="h-8 w-8 text-indigo-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Profit</p>
            <p className="text-2xl font-semibold text-gray-900">
              ${totalProfit.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitStats;
