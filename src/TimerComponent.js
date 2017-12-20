import React from 'react';

export default class TimerComponent extends React.Component {
  runTimer = () => {
    setTimeout(() => {
      if (this.props.throwError) {
        throw new Error('error');
      }
    }, 1000);
  }

  render () {
    return <button onClick={this.runTimer}>Hello World</button>;
  }
}
