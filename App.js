import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CharComponent from './components/charComponent';
import ValidComponent from './components/validComponent';
import Users from './components/Users';
import Courses from './components/Courses';
import NotFound from './components/notFound';

const App = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleCharDelete = (letter) => {
    const updatedText = inputText
      .split('')
      .filter((char) => char !== letter)
      .join('');
    setInputText(updatedText);
  };

  return (
    <>
      <div className='app-container'>
        <h1>React Components with Styling</h1>
        <input
          type='text'
          className='input-field'
          onChange={handleInputChange}
          value={inputText}
          placeholder='Enter text'
        />
        <p className='text-length'>
          Length of entered text: {inputText.length}
        </p>
        <ValidComponent textLength={inputText.length} />
        <div className='char-components-container'>
          {inputText.split('').map((letter, index) => (
            <CharComponent
              key={index}
              letter={letter}
              onDelete={handleCharDelete}
            />
          ))}
        </div>
      </div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/users'>Users</Link>
              </li>
              <li>
                <Link to='/courses'>Courses</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/users' element={<Users />} />
            <Route path='/courses' element={<Courses />} />
            <Route component={NotFound} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
