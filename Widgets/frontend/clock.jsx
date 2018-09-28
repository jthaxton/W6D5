import React from 'react';
import ReactDom from 'react-dom';

class Clock extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This clock works!</h1>

      </div>
    );
  }
}

// module.exports = Clock;
export default Clock;
