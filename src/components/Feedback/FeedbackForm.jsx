// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); // Retrieve token from local storage
    if (!token) {
      setError('You must be logged in to submit feedback.');
      return;
    }

    if (feedback.length > 500) {
      setError('Feedback must be less than 500 characters.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://taks-managment-backend-1.onrender.com/api/feedback/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ feedback }), // Send feedback data
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setFeedback('');
        setError('');

        // Redirect to home page after submitting feedback
        navigate('/'); // Navigate to home (or any other route you want)
      } else {
        setError(data.error || 'Failed to submit feedback.');
        setMessage('');
      }
    } catch (err) {
      setError('An error occurred while submitting feedback.');
      setMessage('');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r  from-blue-500 to-green-500 ">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Submit Your Feedback</h1>
        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            className="w-full p-4 text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            placeholder="Your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            rows="5"
          ></textarea>

          <button
            type="submit"
            className={`w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
