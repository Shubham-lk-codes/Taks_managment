// eslint-disable-next-line no-unused-vars
import React from 'react';

const IdeaList = () => {
  const ideas = [
    {
      id: 1,
      title: 'Green Energy',
      description: 'Idea about renewable energy.',
      votes: 12,
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Recycling Initiative',
      description: 'Improving recycling efforts.',
      votes: 8,
      status: 'Approved',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Submitted Ideas</h1>
      <ul className="space-y-6">
        {ideas.map((idea) => (
          <li key={idea.id} className="p-4 border rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-700">{idea.title}</h2>
            <p className="text-gray-600 mb-2">{idea.description}</p>
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${
                idea.status === 'Approved'
                  ? 'text-green-600'
                  : 'text-yellow-600'
              }`}>
                Status: {idea.status}
              </span>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Votes: {idea.votes}</span>
                <button
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
