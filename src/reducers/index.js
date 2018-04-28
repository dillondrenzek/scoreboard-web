import { combineReducers } from 'redux';
import teams from './teams';
import clock from './clock';

const initialState = {
  period: {
    value: 1,
    type: 'quarter'
  }
};

export const data = (state = initialState, action) => {
  return state;
};

export const period = (state = initialState.period, action) => {
  return state;
};

const reducers = combineReducers({
  teams,
  period,
  clock
});

export default reducers;
