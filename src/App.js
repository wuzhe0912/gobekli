import React from 'react';
import logo from './logo.svg';
import './App.css';
// import NameCard from './components/NameCard'
import LikesButton from './components/LikesButton'
// const tags = ['尼安德塔人', '智人', '元謀人']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <NameCard name="Pitt" number={12345} isHuman tags={tags} /> */}
      <LikesButton />
    </div>
  );
}

export default App;
