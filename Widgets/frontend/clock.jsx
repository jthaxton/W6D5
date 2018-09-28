import React from 'react';
import ReactDom from 'react-dom';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {time: new Date()};
    this.state.hours = this.state.time.getHours();
    this.state.minutes = this.state.time.getMinutes();
    this.state.seconds = this.state.time.getSeconds();
    setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    return (
      <div>
        <h1>This clock works!</h1>
        <h2>{this.state.time.toDateString()}</h2>
      </div>
    );
  }
}

// module.exports = Clock;
export default Clock;
