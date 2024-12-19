// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate hook

  const handleLogin = async () => {
    try {
      const response = await fetch('https://taks-managment-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save user and token in localStorage
        localStorage.setItem('user', JSON.stringify({ userId: data.userId, email }));
        localStorage.setItem('token', data.token);

        alert('Login successful!');
        navigate('/'); // Redirect to home page
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError(err,'An error occurred while logging in.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Log In</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
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
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{' '}
          <a href="/signup" className="text-green-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
      <footer className="mt-10 text-sm text-gray-200">
        © {new Date().getFullYear()} IMS-Connect. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
