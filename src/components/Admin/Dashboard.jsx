// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
        <p className="text-lg text-gray-600">Manage users, ideas, feedback, and more.</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Manage Users Section */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Users</h2>
          <p className="text-gray-600 mb-4">Add, edit, or remove users and manage roles.</p>
          <Link
            to="/admin/users"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            Manage Users
          </Link>
        </div>

        {/* Manage Ideas Section */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Ideas</h2>
          <p className="text-gray-600 mb-4">Review and approve or reject ideas submitted by employees.</p>
          <Link
            to="/admin/ideas"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            Manage Ideas
          </Link>
        </div>

        {/* Feedback Section */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Feedback</h2>
          <p className="text-gray-600 mb-4">Review feedback from employees and managers.</p>
          <Link
            to="/admin/feedback"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            View Feedback
          </Link>
        </div>

        {/* Audit Logs Section */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Audit Logs</h2>
          <p className="text-gray-600 mb-4">Track all system changes and maintain records.</p>
          <Link
            to="/audit"
            className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            View Audit Logs
          </Link>
        </div>

        {/* System Settings Section */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">System Settings</h2>
          <p className="text-gray-600 mb-4">Configure system preferences and security settings.</p>
          <Link
            to="/admin/settings"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            System Settings
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
