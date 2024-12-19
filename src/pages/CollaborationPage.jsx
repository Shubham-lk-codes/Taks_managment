// eslint-disable-next-line no-unused-vars
import React from 'react';
import Chat from '../components/Chat'; // Import Chat component

const CollaborationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 bg-gray-100">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Collaboration Hub</h1>
        <p className="text-lg text-gray-600">
          Work together, discuss ideas, and drive innovation with your team.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
        {/* Team Overview Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Team Overview</h2>
          <ul className="space-y-4">
            {/* Replace with dynamic data if available */}
            <li className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Alice Johnson</h3>
                <p className="text-sm text-gray-600">Frontend Developer</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">B</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Bob Smith</h3>
                <p className="text-sm text-gray-600">Backend Developer</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">C</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Charlie Davis</h3>
                <p className="text-sm text-gray-600">Project Manager</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Chat Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Team Chat</h2>
          <Chat /> {/* Render Chat component */}
        </section>
      </main>
    </div>
  );
};

export default CollaborationPage;
