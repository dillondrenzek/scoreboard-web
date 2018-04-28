import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Clock from './components/clock/Clock';
import './App.css';

const Period = ({ period }) => (
  <div>
    <span>{ period.value } </span>
    <span>{ period.type }</span>
  </div>
);

const TeamName = ({ name }) => (
  <div>{ name }</div>
);

const TeamScore = ({ score }) => (
  <div>{ score }</div>
);

const Team = ({ team }) => {
  const {name, score} = team;
  return (
    <div>
      <TeamName name={ name }/>
      <TeamScore score={ score }/>
    </div>
  );
};

// Team.propTypes = PropTypes.shape({
//   name: PropTypes.string,
//   score: PropTypes.number
// });

const App = ({ clock, teams, period }) => {
  console.log('app', clock, teams, period);
  const { minutes, seconds, tenths } = clock || { minutes: [0,0], seconds: [0,0], tenths: 0 };
  const homeTeam = (teams) ? teams[0] : { name: 'Team A', score: 0 };
  const awayTeam = (teams) ? teams[1] : { name: 'Team B', score: 0 };
  period = period || { value: 1, type: 'QTR' };

  console.log('homeTeam', homeTeam);
  console.log('awayTeam', awayTeam);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Scoreboard</h1>
      </header>
      <div className="App-intro">
        <Clock minutes={minutes} seconds={seconds} tenths={tenths}/>
        <Period period={period} />
        <Team team={homeTeam}/>
        <Team team={awayTeam}/>
      </div>
    </div>
  );
};

App.propTypes = {
  clock: PropTypes.object,
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      score: PropTypes.number
    })
  ),
  period: PropTypes.shape({
    value: PropTypes.number,
    type: PropTypes.string
  })
};


const mapStateToProps = (state, props) => {
  console.log('state', state);
  console.log('props', props);
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
