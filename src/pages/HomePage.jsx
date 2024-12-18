// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import Navbar

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Add Navbar */}
      <div className="flex flex-col items-center justify-center flex-1 bg-gradient-to-r from-green-300 to-blue-500 text-white">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">Welcome to IMS-Connect</h1>
          <p className="text-xl font-light tracking-wide">
            Fostering innovation and collaboration for a sustainable future.
          </p>
        </header>
        <main className="flex flex-col items-center space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <Link
              to="/login"
              className="transform bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/ideas"
              className="transform bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
            >
              Explore Ideas
            </Link>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm font-light">
              Discover how we empower creativity and drive impactful innovation globally.
            </p>
          </div>
        </main>
        <footer className="absolute bottom-4 text-xs text-gray-200">
          © {new Date().getFullYear()} IMS-Connect. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
