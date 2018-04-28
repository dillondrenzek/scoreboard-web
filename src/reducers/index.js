import { combineReducers } from 'redux';
import { INCREMENT_TEAM_SCORE } from '../actions';

const initialState = {
  teams: [
    {
      name: 'Team A',
      score: 0
    },
    {
      name: 'Team B',
      score: 0
    }
  ],
  period: {
    value: 1,
    type: 'quarter'
  },
  clock: {
    minutes: [1,0],
    seconds: [0,0],
    tenths: 0
  }
};

export const data = (state = initialState, action) => {
  return state;
};

export const teams = (state = initialState.teams, { type, data }) => {
  switch (type) {
    case INCREMENT_TEAM_SCORE: {
      const { team, amount } = data;
      const oldTeam = state[team];
      const newTeam = {
        ...oldTeam,
        score: oldTeam.score += amount
      };
      let newTeams = [...state];
      newTeams[team] = newTeam;
      return newTeams;
    }
    default:
      return state;
  }

  return state;
};

export const period = (state = initialState.period, action) => {
  return state;
};


export const clock = (state = initialState.clock, action) => {
  return state;
};

const reducers = combineReducers({
  teams,
  period,
  clock
});

export default reducers;
