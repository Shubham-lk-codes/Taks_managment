// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

function AuditPage() {
  const [auditLogs, setAuditLogs] = useState([]);

  useEffect(() => {
    // Simulated data for audit logs
    const dummyLogs = [
      { id: 1, entity: 'Idea', changeType: 'Created', timestamp: '2024-12-01 10:45:00' },
      { id: 2, entity: 'Idea', changeType: 'Updated', timestamp: '2024-12-02 14:30:00' },
      { id: 3, entity: 'Team', changeType: 'Deleted', timestamp: '2024-12-03 09:15:00' },
    ];
    setAuditLogs(dummyLogs);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Audit Logs</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Entity</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Change Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {auditLogs.map((log) => (
              <tr key={log.id} className="border-b">
                <td className="px-6 py-4 text-gray-700">{log.entity}</td>
                <td className="px-6 py-4 text-gray-700">{log.changeType}</td>
                <td className="px-6 py-4 text-gray-500">{log.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AuditPage;
