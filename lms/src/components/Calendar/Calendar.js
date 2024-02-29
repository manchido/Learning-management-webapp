import React from 'react';
import './Calendar.css'; // Import corresponding CSS file

const Calendar = ({ events }) => {
  return (
    <div className="calendar">
      <h2>Calendar</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
