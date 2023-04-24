import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import User from './User';
import NotFound from './notFound';

const Users = () => {
  return (
    <div>
      <h1>Students</h1>
      <nav>
        <ul>
          <li>
            <Link to='/users/123/Tushar'>Tushar</Link>
          </li>
          <li>
            <Link to='/users/456/Mangesh'>Mangesh</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path='/users/:userId/:userName' component={User} />
        <Route component={NotFound} />
      </Routes>
    </div>
  );
};

export default Users;
