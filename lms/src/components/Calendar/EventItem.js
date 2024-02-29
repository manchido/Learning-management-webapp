import React from 'react';
import './EventItem.css'; // Import corresponding CSS file

const EventItem = ({ event }) => {
  return (
    <div className="event-item">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>{event.date}</p>
    </div>
  );
};

export default EventItem;
