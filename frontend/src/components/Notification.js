// src/components/Notification.js

import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setError('Error fetching notifications.');
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="notification-container">
      <button className="notification-button">Notifications</button>
      <div className="notification-dropdown">
        {error && <div className="error-message">{error}</div>}
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div key={index} className="notification-item">
              {notification.message}
            </div>
          ))
        ) : (
          <div className="notification-item">No new notifications</div>
        )}
      </div>
    </div>
  );
};

export default Notification;
