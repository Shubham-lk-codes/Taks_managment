import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IdeaList = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get('https://taks-managment-backend-1.onrender.com/api/ideas');
        setIdeas(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch ideas. Please try again later.');
        setLoading(false);
      }
    };

    fetchIdeas();
  }, []);

  const handleVote = (id) => {
    // Update the votes locally without making an API request
    setIdeas(ideas.map((idea) =>
      idea._id === id ? { ...idea, votes: (idea.votes || 0) + 1 } : idea
    ));
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <p className="text-gray-500">Loading ideas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg bg-gradient-to-r from-green-300 to-blue-500 text-black">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Submitted Ideas</h1>
      <ul className="space-y-6">
        {ideas.map((idea) => (
          <li key={idea._id} className="p-4 border rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-700">{idea.title}</h2>
            <p className="text-gray-600 mb-2">{idea.description}</p>
            <div className="flex items-center justify-between">
              <span
                className={`text-sm font-medium ${
                  idea.status === 'Approved'
                    ? 'text-green-600'
                    : idea.status === 'Rejected'
                    ? 'text-red-600'
                    : 'text-yellow-600'
                }`}
              >
                Status: {idea.status || 'Pending'}
              </span>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Votes: {idea.votes || 0}</span>
                <button
                  onClick={() => handleVote(idea._id)}
                  className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600"
                >
                  Vote
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-1 rounded-lg hover:bg-gray-600"
                >
                  Collaborate
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IdeaList;
