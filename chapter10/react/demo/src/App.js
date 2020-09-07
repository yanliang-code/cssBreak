import React, { Component } from 'react';
import Demo from './Demo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // jsx（react-dom支持直接写div）
      <div className="App">
        <Demo></Demo>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
