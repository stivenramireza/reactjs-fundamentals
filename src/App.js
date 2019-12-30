import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation title="My first navigation" />
      <Navigation title="My second navigation" />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
