// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const SubmitIdea = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!title || !description) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/ideas', {
        title,
        description,
        employeeId: '12345', // Example employeeId; replace with actual data if available
      });

      setMessage('Your idea has been submitted successfully!');
      setTitle('');
      setDescription('');
      console.log('Response:', response.data);
    } catch (error) {
      setMessage('Failed to submit the idea. Please try again.');
      console.error('Error submitting idea:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-white to-gray-100 p-8 shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Submit Your Innovative Idea</h1>
      <div className="space-y-4">
        <input
          className="w-full p-3 text-black border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
          type="text"
          placeholder="Enter a captivating idea title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-4 text-black focus:ring-blue-300"
          placeholder="Provide a detailed description of your idea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
        ></textarea>
        <button
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          onClick={handleSubmit}
        >
          Submit Idea
        </button>
      </div>
      {message && (
        <p
          className={`mt-6 text-center font-medium ${
            message.includes('successfully') ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default SubmitIdea;
