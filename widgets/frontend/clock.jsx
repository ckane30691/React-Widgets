import React from 'react';

export default class Clock extends React.Component {
  constructor() {
    super();

    this.state = { time: new Date()};
  }

  render() {
    return (
      <div id="clock">
        <h1>Clock</h1>
        <h3>Time: {this.state.time.getHours() }:{ this.state.time.getMinutes()}:{this.state.time.getSeconds()} PDT</h3>
        <h3>Date: {this.state.time.getMonth() }/{ this.state.time.getDay()}/{this.state.time.getFullYear()}</h3>
      </div>
    );
  }

  tick() {
    const time = new Date();
    this.setState({ time });
  }

  componentDidMount() {
    this.id = setInterval(()=>{
        this.tick();
      }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }
}
