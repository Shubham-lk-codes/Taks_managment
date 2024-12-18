// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Alice', text: 'Hi, team! Any updates on the project?' },
    { id: 2, user: 'Bob', text: 'Yes, I just submitted the latest draft!' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMessageObj = {
        id: messages.length + 1,
        user: 'You', // Replace with the actual user name if available
        text: newMessage,
      };
      setMessages([...messages, newMessageObj]);
      setNewMessage('');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Collaboration Chat</h2>

      {/* Chat Messages */}
      <div className="h-64 overflow-y-auto bg-gray-50 p-4 border rounded-lg">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-2 ${
              message.user === 'You' ? 'text-right' : 'text-left'
            }`}
          >
            <span
              className={`inline-block px-4 py-2 rounded-lg ${
                message.user === 'You'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              <strong>{message.user}:</strong> {message.text}
            </span>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="mt-4 flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
