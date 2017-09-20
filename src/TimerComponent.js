import React from 'react';

export default class TimerComponent extends React.Component {
  state = {
    on: false
  }

  runTimer = () => {
    setTimeout(() => {
      this.props.foo();
    }, 1000);
  }

  render () {
    return <button onClick={this.runTimer}>Hello World</button>;
  }
}
