// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSignUp = async () => {
    try {
      const response = await fetch('https://taks-managment-backend-1.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Sign up successful');
        navigate('/'); // Redirect to the home page
      } else {
        alert(data.error || 'Sign up failed');
      }
    } catch (error) {
      alert(error,'An error occurred');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h1>
        <div className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSignUp}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 transition duration-300"
          >
            Sign Up
          </button>
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link
                  to="/login"
                  className="transform bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
                >
                  Login
                </Link>
        </p>
      </div>
      <footer className="mt-10 text-sm text-gray-200">
        © {new Date().getFullYear()} IMS-Connect. All rights reserved.
      </footer>
    </div>
  );
};

export default SignUp;
