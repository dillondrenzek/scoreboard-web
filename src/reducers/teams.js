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


const teams = (state = initialState, { type, data }) => {
  switch (type) {


    case INCREMENT_TEAM_SCORE: {
      const { team, amount } = data;
      const oldTeam = state[team];
      const score = oldTeam.score + amount;
      const newTeam = {
        ...oldTeam,
        score
      };
      let newTeams = [...state];
      newTeams[team] = newTeam;
      return newTeams;
    }

    case SET_TEAM_SCORE: {
      const { team, score } = data;
      const oldTeam = state[team];
      const newTeam = {
        ...oldTeam,
        score
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

const reducers = teams;

export default reducers;
