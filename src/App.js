import React, { Component } from 'react';
import app from './App.css'
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
