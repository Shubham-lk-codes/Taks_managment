// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const SubmitIdea = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!title || !description) {
      setMessage('Please fill in all fields.');
      return;
    }

    // Mock submission logic
    console.log('Idea Submitted:', { title, description });

    setMessage('Your idea has been submitted successfully!');
    setTitle('');
    setDescription('');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg mb-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Submit Your Idea</h1>
      <input
        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        type="text"
        placeholder="Idea Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
      ></textarea>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {message && (
        <p
          className={`mt-4 text-center ${
            message.includes('successfully')
              ? 'text-green-600'
              : 'text-red-600'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default SubmitIdea;
