import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Clock from './components/clock/Clock';
import Team from './components/team/Team';
import ControlPanel from './components/control-panel/ControlPanel';
import './App.css';

const Period = ({ period }) => (
  <div>
    <span>{ period.value } </span>
    <span>{ period.type }</span>
  </div>
);


const App = ({ clock, teams, period }) => {
  clock = clock || { minutes: [0,0], seconds: [0,0], tenths: 0 };
  period = period || { value: 1, type: 'QTR' };
  teams = teams || [
    { name: 'Team A', score: 0 },
    { name: 'Team B', score: 0 }
  ];
  const homeTeam = teams[0];
  const awayTeam = teams[1];

  return (
    <div className="App">
      <div className="scoreboard container-fluid">
        <div className="row">
          <div className="col-4 text-center">
            <Team team={homeTeam} />
          </div>
          <div className="col-4 text-center">
            <Period period={period} />
            <Clock clock={clock} />
          </div>
          <div className="col-4 text-center">
            <Team team={awayTeam} />
          </div>
        </div>
      </div>
      <div className="control-panel container">
        <ControlPanel clock={clock} teams={teams} period={period}/>
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
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
