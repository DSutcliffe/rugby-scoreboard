import React, { Component } from 'react'
import './css/App.css';

import Timer from './components/Timer.js'

class App extends Component {

  render() {

    return (
      <div className="App">

        <div className="header">
          <h1>Rugby Scoreboard</h1>
        </div>

        <div className="teamNames">
          <h2>Team 1</h2>
          <h2>Team 2</h2>
        </div>

        <div className="timerScores">
          <h3>00</h3>
          <Timer />
          <h3>00</h3>
        </div>
        
      </div>
    )
  }

}

export default App;