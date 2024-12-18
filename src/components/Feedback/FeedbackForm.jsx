// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    console.log('Feedback submitted');
  };

  return (
    <div className="bg-white p-6 shadow rounded-md">
      <h1 className="text-xl font-semibold mb-4">Submit Feedback</h1>
      <textarea
        className="w-full p-2 mb-4 border rounded"
        placeholder="Your feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default FeedbackForm;