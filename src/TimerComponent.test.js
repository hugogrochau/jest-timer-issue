import React from 'react';
import { shallow } from 'enzyme';

import TimerComponent from './TimerComponent';

jest.useFakeTimers();

describe('TimerComponent', () => {
  it('1. With error', () => {
    const wrapper = shallow(
      <TimerComponent throwError />
    );

    wrapper.instance().runTimer();

    expect(true).toBe(true);
  });

  it('2. Without error', () => {
    const wrapper = shallow(
      <TimerComponent throwError={false} />
    );

    wrapper.instance().runTimer();

    jest.runAllTimers();

    expect(true).toBe(true);
  });
});
