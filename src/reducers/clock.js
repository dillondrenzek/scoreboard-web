import { combineReducers } from 'redux';
import teams from './teams';
import { ClockResolution, START_CLOCK, STOP_CLOCK, RESET_CLOCK, RUN_CLOCK } from '../actions';

const initialState = {
  minutes: 10,
  seconds: 0,
  tenths: 0,
  resolution: ClockResolution.Tenths,
  _interval: null
};

const CLOCK_RESOLUTION = 100;

const _runClock = (clock, res) => {
  switch (res) {
    case ClockResolution.Tenths:{
      const tenths = (clock.tenths === 0) ? 9 : clock.tenths - 1;
      const seconds = (clock.tenths === 0) ? clock.seconds - 1 : clock.seconds;
      return {
        ...clock,
        seconds,
        tenths
      };
    }
    case ClockResolution.Seconds:{
      const seconds = (clock.seconds === 0) ? 59 : clock.seconds - 1;
      const minutes = (clock.seconds === 0) ? clock.minutes - 1 : clock.minutes;
      return {
        ...clock,
        minutes,
        seconds
      };
    }
    default:
      return clock;
  }
};


export const clock = (state = initialState, { type, data }) => {
  switch (type) {
    case START_CLOCK: {
      return {
        ...state,
        _interval: data
      };
    }
    case STOP_CLOCK:
      clearInterval(state._interval);
      return {
        ...state,
        _interval: null
      };
    case RESET_CLOCK:
      return state;
    case RUN_CLOCK:
      return _runClock(state, data);
    default:
      return state;
  }
};


const reducers = clock;

export default reducers;
