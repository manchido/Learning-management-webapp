import React, { useState } from 'react';
import './EventItem.css';

const EventItem = ({ event, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState({ ...event });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(event.id, editedEvent);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(event.id);
  };

  return (
    <div className="event-item-container">
      {isEditing ? (
        <div className="edit-container">
          <input type="text" value={editedEvent.title} onChange={(e) => setEditedEvent({ ...editedEvent, title: e.target.value })} />
          <input type="text" value={editedEvent.description} onChange={(e) => setEditedEvent({ ...editedEvent, description: e.target.value })} placeholder="Event Description" />
          <input type="date" value={editedEvent.date} onChange={(e) => setEditedEvent({ ...editedEvent, date: e.target.value })} />
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <div className="display-container">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>{event.date}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default EventItem;
