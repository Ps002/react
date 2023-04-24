import React from 'react';

const Course = ({ match }) => {
  const { courseId, courseTitle } = match.params;

  return (
    <div>
      <h1>Course ID: {courseId}</h1>
      <h2>Course Title: {courseTitle}</h2>
    </div>
  );
};

export default Course;
