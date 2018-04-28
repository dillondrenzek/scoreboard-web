import React from 'react';
import ReactDOM from 'react-dom';

// Test Subject
import clockReducer from './clock';

import * as Actions from '../actions';

describe('clock', () => {
  describe('startClock', () => {

    let preState,
      action,
      postState,
      result,
      expected,
      _interval;

    beforeEach(() => {
      _interval = setInterval(() => {}, 1000);
      preState = {
        minutes: 10,
        seconds: 0,
        tenths: 0,
        _interval: null
      };
      action = Actions.startClock(_interval);
      postState = clockReducer(preState, action);
    });

    it('should add an interval id', () => {
      expect(postState._interval).not.toBeNull();
    });
  });
  describe('stopClock', () => {

    let preState,
      action,
      postState,
      result,
      expected,
      _interval;

    beforeEach(() => {
      _interval = setInterval(() => {}, 1000);
      const preState = {
        minutes: 10,
        seconds: 0,
        tenths: 0,
        _interval: _interval
      };
      action = Actions.stopClock();
      postState = clockReducer(preState, action);
    });

    it('should remove interval id', () => {
      expect(postState._interval).toBeNull();
    });
  });
  describe('runClock', () => {

    const { ClockResolution } = Actions;

    let preState,
      action,
      postState,
      result,
      expected,
      repeater = (times, fn, ...args) => {
        for (let i = 0; i < times; i++) {
          fn(...args);
        }
      };

    beforeEach(() => {
      preState = {
        minutes: 15,
        seconds: 5,
        tenths: 9,
        _interval: null
      };
    });

    it('should run tenths', () => {
      action = Actions.runClock(ClockResolution.Tenths);
      postState = clockReducer(preState, action);
      result = postState.tenths;
      expected = preState.tenths - 1;

      expect(result).toBe(expected);
    });

    it('should reset tenths to 9 when tenths is 0', () => {
      preState = {
        ...preState,
        tenths: 0
      };
      action = Actions.runClock(ClockResolution.Tenths);
      postState = clockReducer(preState, action);
      result = postState.tenths;
      expected = 9;

      expect(result).toBe(expected);
    });

    it('should decrement seconds when tenths is 0', () => {
      preState = {
        ...preState,
        seconds: 7,
        tenths: 0
      };
      action = Actions.runClock(ClockResolution.Tenths);
      postState = clockReducer(preState, action);
      result = postState.seconds;
      expected = preState.seconds - 1;

      expect(result).toBe(expected);
    });

    it('should run seconds', () => {
      action = Actions.runClock(ClockResolution.Seconds);
      postState = clockReducer(preState, action);
      result = postState.seconds;
      expected = preState.seconds - 1;

      expect(result).toBe(expected);
    });

    it('should reset seconds to 59 when seconds is 0', () => {
      preState = {
        ...preState,
        seconds: 0
      };
      action = Actions.runClock(ClockResolution.Seconds);
      postState = clockReducer(preState, action);
      result = postState.seconds;
      expected = 59;

      expect(result).toBe(expected);
    });

    it('should decrement minutes when seconds is 0', () => {
      preState = {
        ...preState,
        minutes: 7,
        seconds: 0
      };
      action = Actions.runClock(ClockResolution.Seconds);
      postState = clockReducer(preState, action);
      result = postState.minutes;
      expected = preState.minutes - 1;

      expect(result).toBe(expected);
    });
  });
});
