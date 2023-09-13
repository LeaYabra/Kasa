import React from 'react';
import logo from '../logo.svg';
import Emoji from './Emoji/Emoji.jsx'
import '../App.css';

function App() {
  const test= 'monTest';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit {test} <code>bonjour lea<Emoji emoji="💕" description='coeur' /> src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
