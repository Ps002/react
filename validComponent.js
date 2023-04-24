import React from 'react';

const ValidComponent = ({ textLength }) => {
  const validationStyle = {
    margin: '10px 0',
    color: textLength >= 5 ? 'green' : 'red',
    fontWeight: 'bold',
  };

  return (
    <div style={validationStyle}>
      {textLength >= 5 ? 'Text is valid' : 'Text is too short'}
    </div>
  );
};

export default ValidComponent;
