// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import Navbar
import Team from '../components/Team';
import CollaborationPage from './CollaborationPage';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [user, setUser] = useState(null); // Store user information
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser)); // Parse and set user details
    }
  }, []);

  const handleLogout = () => {
    // Clear local storage and update state
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUser(null);
    alert('Logged out successfully');
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar /> {/* Add Navbar */}
      <div className="flex flex-col items-center justify-center h-[100vh] flex-1 bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <header className="text-center mb-8 h-[40vh]">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md p-10">Welcome to IMS-Connect</h1>
          <p className=" text-3xl tracking-wide text-black font-extrabold">
            Fostering innovation and collaboration for a sustainable future.
          </p>
          {isLoggedIn && <p className="mt-2 text-5xl font-extrabold">Hello, {user?.email}!</p>}
        </header>
        <main className="flex flex-col items-center space-y-6 h-[50vh]">
          <div className="grid grid-cols-2 gap-6">
            {isLoggedIn ? (
              <>
                <Link
                  to="/ideas"
                  className="transform bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
                >
                  Explore Ideas
                </Link>
                <button
                  onClick={handleLogout}
                  className="transform bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="transform bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="transform bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm font-light">
              Discover how we empower creativity and drive impactful innovation globally.
            </p>
          </div>
        </main>
      </div>

      {/* Ensure Team component does not shrink the layout */}
      <div className="bg-white w-full">
        <Team />
        <CollaborationPage />
      </div>

      <footer className="text-center text-xs text-gray-200 mt-4 py-2 bg-gray-900 w-full">
        © {new Date().getFullYear()} IMS-Connect. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
