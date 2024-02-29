import React from 'react';
import './CourseCard.css'; // Import corresponding CSS file

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
      <button>Enroll</button>
    </div>
  );
};

export default CourseCard;
