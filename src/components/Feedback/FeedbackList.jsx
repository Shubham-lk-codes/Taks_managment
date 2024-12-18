// eslint-disable-next-line no-unused-vars
import React from 'react';

const FeedbackList = () => {
  const feedbacks = [
    { id: 1, comment: 'Great system!' },
    { id: 2, comment: 'Needs improvement in user interface.' },
  ];

  return (
    <div className="bg-white p-6 shadow rounded-md">
      <h1 className="text-xl font-semibold mb-4">Feedback List</h1>
      {feedbacks.map((fb) => (
        <div key={fb.id} className="mb-4 p-4 border rounded">
          <p>{fb.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;