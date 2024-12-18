// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const SubmitIdea = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    console.log('Submit clicked');
  };

  return (
    <div className="bg-white p-6 shadow rounded-md mb-6">
      <h1 className="text-xl font-semibold mb-4">Submit Your Idea</h1>
      <input
        className="w-full p-2 mb-4 border rounded"
        type="text"
        placeholder="Idea Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 mb-4 border rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitIdea;