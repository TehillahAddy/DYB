"use client";

import { useEffect, useState } from 'react';
import { Bar, Pie, Line, Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
  BubbleController
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
  BubbleController
);

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch your data here
    setData([/* Mock data */]);
  }, []);

  const jobListingsData = {
    labels: ['IT', 'Healthcare', 'Finance', 'Education', 'Engineering'],
    datasets: [
      {
        label: 'Job Listings by Industry',
        data: [102, 76, 89, 47, 58],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const candidatesData = {
    labels: ['JavaScript', 'Python', 'Sales', 'Marketing', 'Project Management'],
    datasets: [
      {
        label: 'Candidates by Skills',
        data: [89, 72, 56, 48, 65],
        backgroundColor: ['#4BC0C0', '#FF6384', '#FF9F40', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const timeToFillData = {
    labels: ['IT', 'Healthcare', 'Finance', 'Education', 'Engineering'],
    datasets: [
      {
        label: 'Time to Fill (days)',
        data: [30, 45, 25, 50, 35],
        backgroundColor: '#36A2EB',
      },
    ],
  };

  const candidateStatusData = {
    labels: ['Applied', 'Interviewing', 'Hired', 'Rejected'],
    datasets: [
      {
        label: 'Candidate Status',
        data: [150, 75, 30, 50],
        backgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0', '#FFCE56'],
      },
    ],
  };

  const clientSatisfactionData = {
    labels: ['*****', '****', '***', '**', '*'],
    datasets: [
      {
        label: 'Client Satisfaction Rating',
        data: [120, 80, 40, 20, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const areaChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Jobs Filled Over Time',
        data: [30, 45, 25, 50, 35, 60],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: true,
      },
    ],
  };

  const bubbleChartData = {
    datasets: [
      {
        label: 'Candidates by Experience',
        data: [
          { x: 5, y: 50, r: 15 },
          { x: 10, y: 75, r: 10 },
          { x: 15, y: 150, r: 20 },
          { x: 20, y: 125, r: 30 },
          { x: 25, y: 200, r: 25 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Job Recruiting Agency Dashboard</h1>
        </div>
        <nav>
          <ul className="flex gap-4 items-center">
            <li><a href="#" className="hover:underline flex items-center gap-1"><i className="fas fa-home"></i>Home</a></li>
            <li><a href="#" className="hover:underline flex items-center gap-1"><i className="fas fa-user"></i>Profile</a></li>
            <li><a href="#" className="hover:underline flex items-center gap-1"><i className="fas fa-cog"></i>Settings</a></li>
            <li><a href="#" className="hover:underline flex items-center gap-1"><i className="fas fa-sign-out-alt"></i>Logout</a></li>
          </ul>
        </nav>
        <div className="relative">
          <button className="flex items-center gap-2 bg-gray-800 p-2 rounded-lg">
            <img src="/user-avatar.png" alt="User Avatar" className="w-6 h-6 rounded-full" />
            <span>Dr. Yaw Boafo</span>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4 hidden">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Settings</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-1/4 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
          <ul className="flex flex-col gap-4">
            <li className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <i className="fas fa-tachometer-alt"></i>
              <a href="#">Overview</a>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <i className="fas fa-chart-bar"></i>
              <a href="#">Reports</a>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <i className="fas fa-chart-line"></i>
              <a href="#">Analytics</a>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <i className="fas fa-cogs"></i>
              <a href="#">Settings</a>
            </li>
          </ul>
        </aside>

        <main className="flex-1 p-6 bg-gradient-to-r from-gray-50 to-gray-100">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Welcome, Dr. Yaw Boafo!</h1>
          </header>

          <div className="kpi-container grid grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="kpi-card bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Total Job Listings</h2>
              <p>372</p>
            </div>
            <div className="kpi-card bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Total Candidates</h2>
              <p>1,356</p>
            </div>
            <div className="kpi-card bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Jobs Filled</h2>
              <p>328</p>
            </div>
            <div className="kpi-card bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Average Time to Fill</h2>
              <p>35 days</p>
            </div>
           
            <div className="kpi-card bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Conversion Rate</h2>
              <p>24%</p>
            </div>
          </div>

          <div className="alert bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 mt-6" role="alert">
            <p className="font-bold">Notice</p>
            <p>You have 5 new job applications to review.</p>
          </div>

          <form className="filter-form bg-white p-4 shadow-md rounded-lg mb-6">
            <h2 className="text-lg font-semibold mb-2">Filter Job Listings</h2>
            <div className="flex gap-4">
              <input type="text" placeholder="Job Title" className="p-2 border rounded-lg" />
              <select className="p-2 border rounded-lg">
                <option value="">Industry</option>
                <option value="IT">IT</option>
                <option value="Healthcare">Healthcare</option>
                {/* Add more options */}
              </select>
              <button className="p-2 bg-blue-500 text-white rounded-lg">Search</button>
            </div>
          </form>

          <div className="widget-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="widget bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold mb-2">New Candidates</h2>
              <p>15 this week</p>
            </div>
            <div className="widget bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Upcoming Interviews</h2>
              <p>8 scheduled</p>
            </div>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Job Listings by Industry</h2>
              <Pie data={jobListingsData} />
            </div>
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Candidates by Skills</h2>
              <Pie data={candidatesData} />
            </div>
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Time to Fill by Job Type</h2>
              <Bar data={timeToFillData} />
            </div>
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Jobs Filled Over Time</h2>
              <Line data={areaChartData} />
            </div>
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Candidates by Experience</h2>
              <Bubble data={bubbleChartData} />
            </div>
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Candidate Status</h2>
              <Pie data={candidateStatusData} />
            </div>
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Client Satisfaction</h2>
              <Pie data={clientSatisfactionData} />
            </div>
          </section>

          <div className="table-container bg-white p-4 shadow-md rounded-lg mt-6">
            <h2 className="text-lg font-semibold mb-2">Recent Job Listings</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Posted</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Software Engineer</td>
                  <td className="px-6 py-4 whitespace-nowrap">IT</td>
                  <td className="px-6 py-4 whitespace-nowrap">2025-01-10</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">Marketing Manager</td>
                  <td className="px-6 py-4 whitespace-nowrap">Marketing</td>
                  <td className="px-6 py-4 whitespace-nowrap">2025-01-08</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Financial Analyst</td>
                  <td className="px-6 py-4 whitespace-nowrap">Finance</td>
                  <td className="px-6 py-4 whitespace-nowrap">2025-01-07</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">Project Manager</td>
                  <td className="px-6 py-4 whitespace-nowrap">IT</td>
                  <td className="px-6 py-4 whitespace-nowrap">2025-01-06</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Nurse Practitioner</td>
                  <td className="px-6 py-4 whitespace-nowrap">Healthcare</td>
                  <td className="px-6 py-4 whitespace-nowrap">2025-01-05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
