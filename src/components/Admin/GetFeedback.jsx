import React, { useState, useEffect } from 'react';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch feedback from the backend
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch('https://taks-managment-backend-1.onrender.com/api/feedback/feedback');

        if (!response.ok) {
          throw new Error('Failed to fetch feedback.');
        }

        const data = await response.json();
        setFeedbacks(data.feedbacks);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 p-8 rounded-xl shadow-lg max-w-3xl mx-auto mt-8">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">All Submitted Feedback</h1>
      {isLoading && <p className="text-center text-gray-600">Loading feedback...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {feedbacks.length > 0 ? (
        <ul className="space-y-4">
          {feedbacks.map((feedback) => (
            <li key={feedback._id} className="border rounded-lg p-4 bg-gray-50 shadow-sm hover:shadow-lg transition duration-200">
              <div className="mb-2">
                <p className="font-semibold text-lg text-gray-700">Feedback:</p>
                <p className="text-gray-600">{feedback.feedback}</p>
              </div>
              {feedback.userId && (
                <p className="text-sm text-gray-500">
                  Submitted by: <span className="font-semibold">{feedback.userId.name}</span> ({feedback.userId.email})
                </p>
              )}
              <p className="text-xs text-gray-400 mt-2">{new Date(feedback.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">No feedback available.</p>
      )}
    </div>
  );
};

export default FeedbackList;
