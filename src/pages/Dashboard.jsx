// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import WorkflowStatus from '../components/WorkflowStatus';

function Dashboard() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const dummyIdeas = [
      { id: 1, title: 'Reduce Plastic Waste', description: 'Replace plastic with biodegradable materials.', status: 'Validate Idea' },
      { id: 2, title: 'Solar-Powered Workspaces', description: 'Implement solar panels for offices.', status: 'Submit Idea' },
      { id: 3, title: 'Paperless Operations', description: 'Digitize all documents and workflows.', status: 'Forward to Manager' },
    ];
    setIdeas(dummyIdeas);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Idea Dashboard</h1>
      <ul className="space-y-4">
        {ideas.map((idea) => (
          <li key={idea.id} className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold text-gray-700">{idea.title}</h2>
            <p className="text-gray-600">{idea.description}</p>
            <WorkflowStatus status={idea.status} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
