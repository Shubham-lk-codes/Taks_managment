// eslint-disable-next-line no-unused-vars
import { name } from 'ejs';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Hook to determine the active route

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Ideas', path: '/ideas' },
    { name: 'Collaborate', path: '/collaborate' },
    { name: 'Feedback', path: '/feedback' },
    { name: 'Admin', path: '/admin' },
    {name:'Team', path: '/teams'},
    { name: 'Audit', path: '/audit' },
  ];

  return (
    <nav className="bg-gray-800 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-green-400 transition duration-300">
          IMS-Connect
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`hover:text-green-400 transition duration-300 ${
                  location.pathname === link.path ? 'text-green-400 font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
