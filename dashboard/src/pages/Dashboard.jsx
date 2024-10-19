import React, { useState, useEffect } from "react";
import axios from "axios";
import SalesChart from "../components/Home/SalesChart";
import UserStats from "../components/Home/UserStats";
import ProfitStats from "../components/Home/ProfitStats";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalSales: 0,
    totalProfit: 0,
    salesData: [],
  });
  const { isAuthenticated, token } = useAuth();

  useEffect(() => {
    const fetchDashboardStats = async () => {
      if (!isAuthenticated) {
        console.log("User not authenticated, skipping fetch");
        return;
      }

      try {
        console.log("Fetching dashboard stats... Token:", token);
        const response = await axios.get("/api/admin/dashboard-stats", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Dashboard stats response:", response.data);
        setStats(response.data);
      } catch (error) {
        console.error(
          "Error fetching dashboard stats:",
          error.response || error
        );
      }
    };

    fetchDashboardStats();
  }, [isAuthenticated, token]);

  if (!isAuthenticated) {
    return <div>Please log in to view the dashboard.</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UserStats totalUsers={stats.totalUsers} />
        <ProfitStats
          totalSales={stats.totalSales}
          totalProfit={stats.totalProfit}
        />
      </div>

      <SalesChart salesData={stats.salesData} />
    </div>
  );
};

export default Dashboard;
