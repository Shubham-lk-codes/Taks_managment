// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-300 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to IMS-Connect</h1>
      <p className="text-lg mb-4">Fostering innovation and collaboration for a sustainable future.</p>
      <div className="flex space-x-4">
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow"
        >
          Login
        </Link>
        <Link
          to="/ideas"
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded shadow"
        >
          Explore Ideas
        </Link>
      </div>
    </div>
  );
};

export default HomePage;