/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

function WorkflowStatus({ status }) {
  const steps = ['Submit Idea', 'Validate Idea', 'Forward to Manager', 'Approve/Reject'];

  return (
    <div className="flex justify-between items-center mt-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex-1 text-center py-2 rounded-lg ${
            status === step
              ? 'bg-green-500 text-white font-semibold'
              : 'bg-gray-200 text-gray-600'
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}

export default WorkflowStatus;
