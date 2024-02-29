import React from 'react';
import './ChatMessage.css'; // Import corresponding CSS file

const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
