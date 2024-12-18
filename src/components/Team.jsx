// eslint-disable-next-line no-unused-vars
import React from 'react';

const Team = () => {
  const teams = [
    {
      id: 1,
      name: 'Green Innovators',
      members: [
        { id: 1, name: 'Alice Johnson', role: 'Project Manager' },
        { id: 2, name: 'Bob Smith', role: 'Frontend Developer' },
      ],
      ideas: ['Renewable Energy Initiative', 'Recycling Innovation'],
    },
    {
      id: 2,
      name: 'Sustainability Champions',
      members: [
        { id: 3, name: 'Charlie Davis', role: 'Data Scientist' },
        { id: 4, name: 'Dana White', role: 'Backend Developer' },
      ],
      ideas: ['Water Conservation Plan', 'Solar-Powered Offices'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Team Overview</h1>
        <p className="text-lg text-gray-600">
          View team members and their contributions to innovation.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {teams.map((team) => (
          <div key={team.id} className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{team.name}</h2>

            {/* Team Members */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Team Members
              </h3>
              <ul className="space-y-2">
                {team.members.map((member) => (
                  <li
                    key={member.id}
                    className="flex items-center space-x-4 p-2 bg-gray-50 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full font-bold">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Team Ideas */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Contributed Ideas
              </h3>
              <ul className="space-y-2">
                {team.ideas.map((idea, index) => (
                  <li
                    key={index}
                    className="p-2 bg-blue-50 text-blue-700 rounded-lg font-medium"
                  >
                    {idea}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Team;
