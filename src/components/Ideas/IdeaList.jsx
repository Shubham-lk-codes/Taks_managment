// eslint-disable-next-line no-unused-vars
import React from 'react';

const IdeaList = () => {
  const ideas = [
    { id: 1, title: 'Green Energy', description: 'Idea about renewable energy.' },
    { id: 2, title: 'Recycling Initiative', description: 'Improving recycling efforts.' },
  ];

  return (
    <div className="bg-white p-6 shadow rounded-md">
      <h1 className="text-xl font-semibold mb-4">Idea List</h1>
      {ideas.map((idea) => (
        <div key={idea.id} className="mb-4 p-4 border rounded">
          <h2 className="font-bold">{idea.title}</h2>
          <p>{idea.description}</p>
        </div>
      ))}
    </div>
  );
};

export default IdeaList;