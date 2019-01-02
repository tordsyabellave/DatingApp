import React, { Component } from 'react';
import './App.css';
import Values from './components/value';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Dating App</h1>
        <Values />
      </div>
    );
  }
}

export default App;
