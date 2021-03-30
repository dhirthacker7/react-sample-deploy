import React from 'react';
import arsenalImage from './img/arsenal_emirates.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Victoria Concordia Crescit!</h1>
      <h2>Author: Dhir Thacker</h2>
      <img src={arsenalImage} alt="arsenal-image" />
    </div>
  );
}

export default App;
