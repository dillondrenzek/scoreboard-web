import { combineReducers } from 'redux';
import teams from './teams';
import { ClockResolution, START_CLOCK, STOP_CLOCK, RESET_CLOCK, RUN_CLOCK } from '../actions';

// IDEA:
// const initialState = {
  // total: {
  //   minutes: 15,
  //   seconds: 0,
  //   tenths: 0,
  // },
  // remaining: {
  //   minutes: 15,
  //   seconds: 0,
  //   tenths: 0,
  // },
  // resolution: ClockResolution.Tenths,
  // interval: null
// };


const initialState = {
  minutes: 1,
  seconds: 0,
  tenths: 0,
  resolution: ClockResolution.Tenths,
  _interval: null
};

const _runTenths = (clock) => {
  let tenths, newClock;
  if (clock.tenths === 0) {
    tenths = 9;
    newClock = _runSeconds(clock);
  } else {
    tenths = clock.tenths - 1;
    newClock = {...clock};
  }
  return {
    ...newClock,
    tenths
  };
};

const _runSeconds = (clock) => {
  let seconds, newClock;
  if (clock.seconds === 0) {
    seconds = 59;
    newClock = _runMinutes(clock);
  } else {
    seconds = clock.seconds - 1;
    newClock = {...clock};
  }
  return {
    ...newClock,
    seconds
  };
};

const _runMinutes = (clock) => {
  return {
    ...clock,
    minutes: clock.minutes - 1
  };
};

const _runClock = (clock, res) => {
  switch (res) {
    case ClockResolution.Tenths: {
      return _runTenths(clock);
    }
    case ClockResolution.Seconds: {
      return _runSeconds(clock);
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
