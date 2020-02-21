import React, { Component } from 'react'
import './css/App.css';

import Timer from './components/Timer.js'

class App extends Component {

  state = {
    team1TryCount: 0,
    team1ConversionCount: 0,
    team1PenaltyCount: 0,
    team1DropGoalCount: 0
  }

  addToTryCount = () => {
    console.log("IN addToTryCount METHOD");
    
    this.setState({
      team1TryCount: this.tryCount + 1
    })
  }

  addToConversionCount = () => {
    console.log("IN addToConversionCount METHOD");

  }

  addToPenaltyCount = () => {
    console.log("IN addToPenaltyCount METHOD");

  }

  addToDropGoalCount = () => {
    console.log("IN addToDropGoalCount METHOD");

  }

  render() {

    return (
      <div className="App">

        <div className="header">
          <h1>Rugby Scoreboard</h1>
        </div>

        <div className="middleSection">

          <div className="teamScores">
            <h2>Team 1</h2>
            <h3>00</h3>
          </div>

          <div className="timerScores">
            <Timer />
          </div>

          <div className="teamScores">
            <h2>Team 2</h2>
            <h3>00</h3>
          </div>

        </div>

        <div className="footerSection">

          <div className="">
            <p>Team Highlights</p>
          </div>

          <div className="teamPlayers">
            <button>Player 1</button>
            <button>Player 2</button>
            <button>Player 3</button>
            <button>Player 4</button>
            <button>Player 5</button>
            <button>Player 6</button>
            <button>Player 7</button>
            <button>Player 8</button>
            <button>Player 9</button>
            <button>Player 10</button>
            <button>Player 11</button>
            <button>Player 12</button>
            <button>Player 13</button>
            <button>Player 14</button>
            <button>Player 15</button>
          </div>

          <div className="footerCenter">

            <div className="scoreType">
              <button onClick={this.addToTryCount}>{this.team1TryCount}</button>
              <h3 className="scoreTypeName">Try</h3>
              <button>0</button>
            </div>

            <div className="scoreType">
              <button onClick={this.addToConversionCount}>{this.team1ConversionCount}</button>
              <h3 className="scoreTypeName">Conversion</h3>
              <button>0</button>
            </div>

            <div className="scoreType">
              <button onClick={this.addToPenaltyCount}>{this.team1PenaltyCount}</button>
              <h3 className="scoreTypeName">Penalty</h3>
              <button>0</button>
            </div>

            <div className="scoreType">
              <button onClick={this.addToDropGoalCount}>{this.team1DropGoalCount}</button>
              <h3 className="scoreTypeName">Drop Goal</h3>
              <button>0</button>
            </div>

          </div>

          <div className="teamPlayers">
            <button>Player 1</button>
            <button>Player 2</button>
            <button>Player 3</button>
            <button>Player 4</button>
            <button>Player 5</button>
            <button>Player 6</button>
            <button>Player 7</button>
            <button>Player 8</button>
            <button>Player 9</button>
            <button>Player 10</button>
            <button>Player 11</button>
            <button>Player 12</button>
            <button>Player 13</button>
            <button>Player 14</button>
            <button>Player 15</button>
          </div>

          <div className="">
            <p>Team Highlights</p>
          </div>

        </div>

        <div className="commentary">
          <p>COMMENTARY</p>
        </div>

      </div>
    )
  }

}

export default App;