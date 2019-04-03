import './App.css';

import React, { Component } from 'react';

import Countdown from './components/Countdown';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Countdown date="apr 20, 2019 21:00:00"/>
      </div>
    );
  }
}

export default App;
