import { combineReducers } from 'redux';
import { SET_TEAM_SCORE, INCREMENT_TEAM_SCORE } from '../actions';

const initialState = [
  {
    name: 'Team A',
    score: 0
  },
  {
    name: 'Team B',
    score: 0
  }
];

const teamReducer = (state = {}, {type, data}) => {
  switch (type) {
    case INCREMENT_TEAM_SCORE: {
      const score = state.score + data.amount;
      return {
        ...state,
        score
      };
    }
    case SET_TEAM_SCORE:{
      const score = data.score;
      return {
        ...state,
        score
      }
    }
    default:
      return state;
  }
}


const teams = (state = initialState, { type, data }) => {
  switch (type) {
    case INCREMENT_TEAM_SCORE:
    case SET_TEAM_SCORE: {
      const { team } = data;
      const oldTeam = state[team];
      let newTeams = [...state];
      newTeams[team] = teamReducer(oldTeam, {type, data});
      return newTeams;
    }

    default:
      return state;
  }

  return state;
};

const reducers = teams;

export default reducers;
