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
      team1TryCount: this.team1TryCount + 1
      // team1TryCount: 999
    })
    console.log(this.state.team1TryCount);
    
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

        <div className="middleSectionTop">

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

        <div className="middleSectionMiddle">

          <div>
            <h4>Team Highlights</h4>
          </div>

          <div></div>
          <div></div>
          <div></div>

          <div>
            <h4>Team Highlights</h4>
          </div>

        </div>

        <div className="middleSectionBottom">

          <div className="teamHighlights">
            <ul>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
            </ul>
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
              {/* <button onClick={this.addToTryCount}>{this.team1TryCount}</button> */}
              <button className="scoreButton" onClick={this.addToTryCount} value={this.team1TryCount} id="team1TryCount"></button>
              <h3 className="scoreTypeName">Try</h3>
              <button className="scoreButton">9999</button>
            </div>

            <div className="scoreType">
              <button className="scoreButton" onClick={this.addToConversionCount}>{this.team1ConversionCount}</button>
              <h3 className="scoreTypeName">Conversion</h3>
              <button className="scoreButton">0</button>
            </div>

            <div className="scoreType">
              <button className="scoreButton" onClick={this.addToPenaltyCount}>{this.team1PenaltyCount}</button>
              <h3 className="scoreTypeName">Penalty</h3>
              <button className="scoreButton">0</button>
            </div>

            <div className="scoreType">
              <button className="scoreButton" onClick={this.addToDropGoalCount}>{this.team1DropGoalCount}</button>
              <h3 className="scoreTypeName">Drop Goal</h3>
              <button className="scoreButton">0</button>
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

          <div className="teamHighlights">
            <ul>
            <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
              <li>00:00 Score</li>
          </ul>
          </div>

        </div>

        <div className="commentary">
          <h4>COMMENTARY</h4>
          <ul>
            <li>00:00 Score</li>
            <li>00:00 Score</li>
            <li>00:00 Score</li>
            <li>00:00 Score</li>
            <li>00:00 Score</li>
          </ul>
        </div>

      </div>
    )
  }

}

export default App;