import React from 'react';

const CharComponent = ({ letter, onDelete }) => {
  const charStyle = {
    display: 'inline-block',
    padding: '10px',
    margin: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: 'lightblue',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div style={charStyle} onClick={() => onDelete(letter)}>
      {letter}
    </div>
  );
};

export default CharComponent;
