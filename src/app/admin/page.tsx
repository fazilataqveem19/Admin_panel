"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
  ChartOptions,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement
);

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("products");
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sample Data
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

  const userData = {
    labels: ["Active", "Inactive", "Pending"],
    datasets: [
      {
        label: "User Growth",
        data: [300, 100, 50],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart Options for different chart types
  const barChartOptions: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Overview",
        font: {
          size: 20,
          weight: "bold",
        },
      },
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  const lineChartOptions: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Orders over Time",
        font: {
          size: 20,
          weight: "bold",
        },
      },
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  const pieChartOptions: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "User Growth",
        font: {
          size: 20,
          weight: "bold",
        },
      },
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  const handleLogout = () => {
    router.push("/signin");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden bg-black p-3 text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰ 
      </button>

      {/* Sidebar */}
      <aside
        className={`w-64 bg-gray-900 p-6 md:block ${isSidebarOpen ? "block" : "hidden"} md:min-h-screen`}
      >
        <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
        <ul className="space-y-4">
          {["products", "orders", "users", "categories"].map((tab) => (
            <li
              key={tab}
              className="cursor-pointer hover:bg-gray-800 p-3 rounded-lg transition-all"
              onClick={() => setSelectedTab(tab)}
            >
              <span className="font-medium capitalize">Manage {tab}</span>
            </li>
          ))}
          <li
            className="cursor-pointer hover:bg-red-600 p-3 rounded-lg transition-all mt-6"
            onClick={handleLogout}
          >
            <span className="font-medium">Logout</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-semibold capitalize">
          {selectedTab} Management
        </h2>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-xl mt-4 md:mt-6 overflow-x-auto">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Overview
          </h3>
          {selectedTab === "products" && <Bar data={salesData} options={barChartOptions} />}
          {selectedTab === "orders" && <Line data={orderData} options={lineChartOptions} />}
          {selectedTab === "users" && <Pie data={userData} options={pieChartOptions} />}
          {selectedTab === "categories" && <Pie data={userData} options={pieChartOptions} />}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
