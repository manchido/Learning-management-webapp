import React from 'react';
import './ChatWindow.css'; // Import corresponding CSS file
import ChatMessage from './ChatMessage'; // Assuming ChatMessage component is already defined

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      <h2>Chat</h2>
      <div className="message-container">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;
