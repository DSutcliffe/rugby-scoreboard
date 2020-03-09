import React, { Component } from 'react'
import './css/App.css';

import Timer from './components/Timer.js'

class App extends Component {

  state = {
    stateTeamNumber: 0,

    team1TryCount: 0,
    team1TryScored: false,
    team1ConversionCount: 0,
    team1PenaltyCount: 0,
    team1DropGoalCount: 0,
    team1Score: 0,
    team1PlayerNumber: "",
    team1ScoreType: "",
    team1Time: [],
    team1Highlights: { time: "", player: "", scoreType: ""},

    team2TryCount: 0,
    team2TryScored: false,
    team2ConversionCount: 0,
    team2PenaltyCount: 0,
    team2DropGoalCount: 0,
    team2Score: 0,
    team2PlayerNumber: "",
    team2ScoreType: "",
    team2Time: [],
    team2Highlights: { time: "", player: "", scoreType: ""}
  }

  addToPenaltyCount = () => {
    console.log("IN addToPenaltyCount METHOD");

    if (this.state.teamNumber === 1) {
      this.setState({
        team1PenaltyCount: this.state.team1PenaltyCount + 1,
        team1Score: this.state.team1Score + 3,
        team1Time: [...this.state.team1Time, `12:00 | Player ${this.state.team1PlayerNumber} : Penalty Scored`]
      })
    } else {
      this.setState({
        team2PenaltyCount: this.state.team2PenaltyCount + 1,
        team2Score: this.state.team2Score + 3,
        team2Time: [...this.state.team2Time, `12:00 | Player ${this.state.team2PlayerNumber} : Penalty Scored`]
      })
    }
    
  }

  addToDropGoalCount = () => {
    console.log("IN addToDropGoalCount METHOD");

    if (this.state.teamNumber === 1) {
      this.setState({
        team1DropGoalCount: this.state.team1DropGoalCount + 1,
        team1Score: this.state.team1Score + 3,
        team1Time: [...this.state.team1Time, `12:00 | Player ${this.state.team1PlayerNumber} : Drop Goal Scored`]
      })
    } else {
      this.setState({
        team2DropGoalCount: this.state.team2DropGoalCount + 1,
        team2Score: this.state.team2Score + 3,
        team2Time: [...this.state.team2Time, `12:00 | Player ${this.state.team2PlayerNumber} : Drop Goal Scored`]
      })
    }
    
  }

  addToTryCount = () => {
    console.log("IN addToTryCount METHOD");
    
    if (this.state.teamNumber === 1) {
      this.setState({
        team1TryCount: this.state.team1TryCount + 1,
        team1Score: this.state.team1Score + 5,
        team1Time: [...this.state.team1Time, `12:00 | Player ${this.state.team1PlayerNumber} : Try Scored`],
        team1TryScored: true
      })
    } else {
      this.setState({
        team2TryCount: this.state.team2TryCount + 1,
        team2Score: this.state.team2Score + 5,
        team2Time: [...this.state.team2Time, `12:00 | Player ${this.state.team2PlayerNumber} : Try Scored`],
        team2TryScored: true
      })
    }
    
    
  }

  addToConversionCount = () => {
    console.log("IN addToConversionCount METHOD");

    if (this.state.teamNumber === 1) {
      if (this.state.team1TryScored === true) {
        this.setState({
          team1ConversionCount: this.state.team1ConversionCount + 1,
          team1Score: this.state.team1Score + 2,
          team1Time: [...this.state.team1Time, `12:00 | Player ${this.state.team1PlayerNumber} : Conversion Scored`],
          team1TryScored: false
        })
      }
    } else {
      if (this.state.team2TryScored === true) {
        this.setState({
          team2ConversionCount: this.state.team2ConversionCount + 1,
          team2Score: this.state.team2Score + 2,
          team2Time: [...this.state.team2Time, `12:00 | Player ${this.state.team2PlayerNumber} : Conversion Scored`],
          team2TryScored: false
        })
      }
    }
    
  }

  playerSelect = (teamNumber, playerNumber) => {
    console.log("IN playerSelect METHOD");

    if (teamNumber === 1){
      this.setState({
        teamNumber: 1,
        team1PlayerNumber: playerNumber
      })
    } else {
      this.setState({
        teamNumber: 2,
        team2PlayerNumber: playerNumber
      })
    }
    
  }

  createHighlights = (item) => {
    return (
      <li>{item}</li>
    )
  }

  render() {
    const t1Highlights = this.state.team1Time
    const listT1Highlights = t1Highlights.map(this.createHighlights)

    const t2Highlights = this.state.team2Time
    const listT2Highlights = t2Highlights.map(this.createHighlights)

    return (
      <div className="App">

        <div className="header">
          <h1>Rugby Scoreboard</h1>
        </div>

        <div className="middleSectionTop">

          <div className="teamScores">
            <h2>Team 1</h2>
            <h3>{this.state.team1Score}</h3>
          </div>

          <div className="timerScores">
            <Timer />
          </div>

          <div className="teamScores">
            <h2>Team 2</h2>
            <h3>{this.state.team2Score}</h3>
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
            <ul className="t1Highlights">{listT1Highlights}</ul>
          </div>

          <div className="teamPlayers">
            <button onClick={() => this.playerSelect(1, 1)}>Player 1</button>
            <button onClick={() => this.playerSelect(1, 2)}>Player 2</button>
            <button onClick={() => this.playerSelect(1, 3)}>Player 3</button>
            <button onClick={() => this.playerSelect(1, 4)}>Player 4</button>
            <button onClick={() => this.playerSelect(1, 5)}>Player 5</button>
            <button onClick={() => this.playerSelect(1, 6)}>Player 6</button>
            <button onClick={() => this.playerSelect(1, 7)}>Player 7</button>
            <button onClick={() => this.playerSelect(1, 8)}>Player 8</button>
            <button onClick={() => this.playerSelect(1, 9)}>Player 9</button>
            <button onClick={() => this.playerSelect(1, 10)}>Player 10</button>
            <button onClick={() => this.playerSelect(1, 11)}>Player 11</button>
            <button onClick={() => this.playerSelect(1, 12)}>Player 12</button>
            <button onClick={() => this.playerSelect(1, 13)}>Player 13</button>
            <button onClick={() => this.playerSelect(1, 14)}>Player 14</button>
            <button onClick={() => this.playerSelect(1, 15)}>Player 15</button>
          </div>

          <div className="footerCenter">

            <div className="scoreType">
              <button className="scoreButton" onClick={this.addToTryCount}>{this.state.team1TryCount}</button>
              <h3 className="scoreTypeName">Try</h3>
              <button className="scoreButton" onClick={this.addToTryCount}>{this.state.team2TryCount}</button>
            </div>

            <div className="scoreType">
              <button className="scoreButton" onClick={this.addToConversionCount}>{this.state.team1ConversionCount}</button>
              <h3 className="scoreTypeName">Conversion</h3>
              <button className="scoreButton" onClick={this.addToConversionCount}>{this.state.team2ConversionCount}</button>
            </div>

            <div className="scoreType">
              <button className="scoreButton" onClick={this.addToPenaltyCount}>{this.state.team1PenaltyCount}</button>
              <h3 className="scoreTypeName">Penalty</h3>
              <button className="scoreButton" onClick={this.addToPenaltyCount}>{this.state.team2PenaltyCount}</button>
            </div>

            <div className="scoreType">
              <button className="scoreButton" onClick={this.addToDropGoalCount}>{this.state.team1DropGoalCount}</button>
              <h3 className="scoreTypeName">Drop Goal</h3>
              <button className="scoreButton" onClick={this.addToDropGoalCount}>{this.state.team2DropGoalCount}</button>
            </div>

          </div>

          <div className="teamPlayers">
            <button onClick={() => this.playerSelect(2, 1)}>Player 1</button>
            <button onClick={() => this.playerSelect(2, 2)}>Player 2</button>
            <button onClick={() => this.playerSelect(2, 3)}>Player 3</button>
            <button onClick={() => this.playerSelect(2, 4)}>Player 4</button>
            <button onClick={() => this.playerSelect(2, 5)}>Player 5</button>
            <button onClick={() => this.playerSelect(2, 6)}>Player 6</button>
            <button onClick={() => this.playerSelect(2, 7)}>Player 7</button>
            <button onClick={() => this.playerSelect(2, 8)}>Player 8</button>
            <button onClick={() => this.playerSelect(2, 9)}>Player 9</button>
            <button onClick={() => this.playerSelect(2, 10)}>Player 10</button>
            <button onClick={() => this.playerSelect(2, 11)}>Player 11</button>
            <button onClick={() => this.playerSelect(2, 12)}>Player 12</button>
            <button onClick={() => this.playerSelect(2, 13)}>Player 13</button>
            <button onClick={() => this.playerSelect(2, 14)}>Player 14</button>
            <button onClick={() => this.playerSelect(2, 15)}>Player 15</button>
          </div>

          <div className="teamHighlights">
          <ul className="t1Highlights">{listT2Highlights}</ul>
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