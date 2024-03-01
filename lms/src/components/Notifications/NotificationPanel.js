import React, { useState } from 'react';
import './NotificationPanel.css'; // Import corresponding CSS file

const NotificationPanel = ({ notifications }) => {
  const [dismissedNotifications, setDismissedNotifications] = useState([]);

  const handleDismissNotification = (index) => {
    const updatedDismissedNotifications = [...dismissedNotifications, index];
    setDismissedNotifications(updatedDismissedNotifications);
  };

  const filteredNotifications = notifications.filter((notification, index) => !dismissedNotifications.includes(index));

  return (
    <div className="notification-panel">
      <h2>Notifications</h2>
      <ul>
        {filteredNotifications.map((notification, index) => (
          <li key={index}>
            {notification}
            <button onClick={() => handleDismissNotification(index)}>Dismiss</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPanel;
