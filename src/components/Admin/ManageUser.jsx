// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://taks-managment-backend-1.onrender.com/api/auth/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data.users);
      } catch (err) {
        setError(err.response?.data?.error || 'An error occurred');
      }
    };

    fetchUsers();
  }, []);

  const handleRemoveUser = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:4000/api/auth/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // After deletion, update the state to reflect the change
      setUsers(users.filter((user) => user._id !== userId));
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred while removing user');
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-xl shadow-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">Users List</h2>
      {error && <p className="text-center text-red-500 mb-4">{error}</p>}
      <ul className="space-y-4">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user._id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center">
                <p className="text-lg text-gray-700 font-medium">{user.email}</p>
              </div>
              <button
                onClick={() => handleRemoveUser(user._id)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-200"
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <p className="text-center text-white">No users found.</p>
        )}
      </ul>
    </div>
  );
};

export default UsersList;
