import React, { useState } from 'react';
import { Calendar as BigCalendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const Calendar = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Meeting', description: 'Discuss project updates', date: '2024-03-15' },
    { id: 2, title: 'Presentation', description: 'Client presentation', date: '2024-03-20' }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', date: '' });

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const editEvent = (eventId, updatedEvent) => {
    setEvents(events.map(event => (event.id === eventId ? updatedEvent : event)));
  };

  const deleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addEvent({ ...newEvent, id: events.length + 1 });
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} placeholder="Event Title" />
          <input type="text" value={newEvent.description} onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} placeholder="Event Description" />
          <input type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
          <button type="submit">Add Event</button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>Add Event</button>
      )}
      <BigCalendar
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Calendar;
