import './App.css';

import React, { Component } from 'react';

import Countdown from './components/Countdown';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Countdown  date="apr 3,  2019 15:05:30"/>
      </div>
    );
  }
}

export default App;
