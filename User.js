import React from 'react';

const User = ({ match }) => {
  const { userId, userName } = match.params;

  return (
    <div>
      <h1>User ID: {userId}</h1>
      <h2>User Name: {userName}</h2>
      
    </div>
  );
};

export default User;
