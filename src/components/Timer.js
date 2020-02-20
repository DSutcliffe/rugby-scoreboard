import React, { Component } from 'react'

class Timer extends Component {
    
  state = {
    count: 0
  }

  formatTime = (count) => {
    // Format to mm:ss
    const secs = Math.floor(count / 1);
    const s = secs % 60;
    // const m = Math.floor(secs / 60) % 60;    // Rollover into hours
    const m = Math.floor(secs / 60);
    
    const ss = s < 10 ? `0${s}` : `${s}`;
    const mm = m < 10 ? `0${m}` : `${m}`;    // Rollover into hours

    return `${mm}:${ss}`
  }

  startTimer = () => {
      // setInterval built in
      this.myInterval = setInterval(() => {
          this.updateTimer()
      }, 1)  // 100 gives real time seconds
  }

  updateTimer = () => {
    this.checkTime()
    this.setState({
        count: this.state.count + 1
    })
  }

  checkTime = () => {
      console.log(typeof 'this.count');
      console.log(this.count);
      
      if(this.count === 5) {
          console.log("Half Time!!!");
      }
  }

  stopTimer = () => {
      this.clearTimer()
  }

  resetTimer = () => {
    this.clearTimer()
      this.setState({
          count: 0
      })
  }

  clearTimer = () => {
    clearInterval(this.myInterval)
  }

  componentWillUnmount = () => {
    this.clearTimer()
  }

  render() {

    // const {count} = this.state;
    const time = this.formatTime(this.state.count)

    return (
      <div>
        {/* <h2>Timer {count} </h2> */}
        <h2 className="timer">{time} </h2>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    )
  }

}

export default Timer;