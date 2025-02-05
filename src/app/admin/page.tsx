"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, ArcElement } from "chart.js";

// Register the necessary components for the chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, ArcElement);

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("products");
  const router = useRouter(); // Initialize useRouter

  // Sample data for Bar chart (Sales Overview)
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Sample data for Line chart (Order Status)
  const orderData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Orders",
        data: [35, 40, 50, 60, 45, 55],
        fill: false,
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.1,
      },
    ],
  };

  // Sample data for Pie chart (User Growth)
  const userData = {
    labels: ["Active", "Inactive", "Pending"],
    datasets: [
      {
        label: "User Growth",
        data: [300, 100, 50],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 1,
      },
    ],
  };

  // Chart options for all charts
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Overview",
        font: {
          size: 20,
          weight: "bold" as const,
        },
      },
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  const handleLogout = () => {
    // Perform any necessary logout logic here (e.g., clearing user session)
    // Then redirect to the signin page
    router.push("/signin");
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
        <ul className="space-y-4">
          <li
            className="cursor-pointer hover:bg-gray-800 p-3 rounded-lg transition-all ease-in-out"
            onClick={() => setSelectedTab("products")}
          >
            <span className="font-medium">Manage Products</span>
          </li>
          <li
            className="cursor-pointer hover:bg-gray-800 p-3 rounded-lg transition-all ease-in-out"
            onClick={() => setSelectedTab("orders")}
          >
            <span className="font-medium">Manage Orders</span>
          </li>
          <li
            className="cursor-pointer hover:bg-gray-800 p-3 rounded-lg transition-all ease-in-out"
            onClick={() => setSelectedTab("users")}
          >
            <span className="font-medium">Manage Users</span>
          </li>
          <li
            className="cursor-pointer hover:bg-gray-800 p-3 rounded-lg transition-all ease-in-out"
            onClick={() => setSelectedTab("categories")}
          >
            <span className="font-medium">Manage Categories</span>
          </li>
          <li
            className="cursor-pointer hover:bg-red-600 p-3 rounded-lg transition-all ease-in-out mt-6"
            onClick={handleLogout}
          >
            <span className="font-medium">Logout</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {selectedTab === "products" && (
          <div>
            <h2 className="text-3xl font-semibold">Product Management</h2>
            <div className="bg-white p-6 rounded-lg shadow-xl mt-6">
              <h3 className="text-2xl font-semibold mb-4">Sales Overview</h3>
              <Bar data={salesData} options={chartOptions} />
            </div>
          </div>
        )}
        {selectedTab === "orders" && (
          <div>
            <h2 className="text-3xl font-semibold">Order Management</h2>
            <div className="bg-white p-6 rounded-lg shadow-xl mt-6">
              <h3 className="text-2xl font-semibold mb-4">Order Status</h3>
              <Line data={orderData} options={chartOptions} />
            </div>
          </div>
        )}
        {selectedTab === "users" && (
          <div>
            <h2 className="text-3xl font-semibold">User Management</h2>
            <div className="bg-white p-6 rounded-lg shadow-xl mt-6">
              <h3 className="text-2xl font-semibold mb-4">User Growth</h3>
              <Pie data={userData} options={chartOptions} />
            </div>
          </div>
        )}
        {selectedTab === "categories" && (
          <div>
            <h2 className="text-3xl font-semibold">Category Management</h2>
            <div className="bg-white p-6 rounded-lg shadow-xl mt-6">
              <h3 className="text-2xl font-semibold mb-4">Category Performance</h3>
              <Pie data={userData} options={chartOptions} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
