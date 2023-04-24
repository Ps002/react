import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Course from './Course';
import NotFound from './notFound';

const Courses = () => {
  return (
    <div>
      <h1>Courses</h1>
      <nav>
        <ul>
          <li>
            <Link to='/courses/123/React'>React</Link>
          </li>
          <li>
            <Link to='/courses/456/Node'>Node</Link>
          </li>
          {/* Add more courses as needed */}
        </ul>
      </nav>
      <Routes>
        <Route
          exact
          path='/courses/:courseId/:courseTitle'
          component={Course}
        />
        {/* Add more nested routes for specific courses as needed */}
        <Route component={NotFound} />
      </Routes>
    </div>
  );
};

export default Courses;
