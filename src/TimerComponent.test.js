import React from 'react';
import { shallow } from 'enzyme';

import TimerComponent from './TimerComponent';

jest.useFakeTimers();

describe('TimerComponent', () => {
  it('should runTimer without foo prop', () => {
    const wrapper = shallow(
      <TimerComponent />
    );

    wrapper.instance().runTimer();

    expect(true).toBe(true);
  });

  it('should runTimer with foo prop', () => {
    const wrapper = shallow(
      <TimerComponent foo={f => f} />
    );

    wrapper.instance().runTimer();

    jest.runAllTimers();

    expect(true).toBe(true);
  });
});
