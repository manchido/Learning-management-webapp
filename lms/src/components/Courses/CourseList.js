import React from 'react';
import './CourseList.css'; // Import corresponding CSS file
import CourseCard from './CourseCard'; // Assuming CourseCard component is already defined

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
