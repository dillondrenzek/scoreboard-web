import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { incrementTeamScore, setTeamScore, startClock, stopClock, runClock, ClockResolution } from '../../actions';

// const TeamControl = ({ team })

const ControlPanel = ({
  teams,
  clock,
  period,
  onIncrementScore,
  onSetScore,
  onStartClock,
  onStopClock,
  onResetClock
}) => {
  const {resolution} = clock;
  return (
    <div>
    <div>{teams.map((team, i) => {return (
      <div key={i}>
        <h4>{team.name}</h4>
        <button onClick={() => onIncrementScore(i, 1)}>+1</button>
        <button onClick={() => onIncrementScore(i, 2)}>+2</button>
        <button onClick={() => onIncrementScore(i, 3)}>+3</button>
        <button onClick={() => onSetScore(i, 0)}>Reset</button>
      </div>
    );})}</div>

    <div>
      <h4>Clock</h4>
      <button onClick={() => onStartClock(resolution)}>Start</button>
      <button onClick={() => onStopClock()}>Stop</button>
      <button onClick={() => onResetClock()}>Reset</button>
    </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrementScore: (teamIndex, amount) => {
      dispatch(incrementTeamScore(teamIndex, amount));
    },
    onSetScore: (teamIndex, score) => {
      dispatch(setTeamScore(teamIndex, score));
    },
    onStartClock: (res) => {
      const dur = (res === ClockResolution.Seconds) ? 1000 : 100;
      const fn = () => dispatch(runClock(res));
      let interval = setInterval(fn, dur);
      dispatch(startClock(interval));
    },
    onStopClock: () => {
      dispatch(stopClock());
    },
    onResetClock: () => {

    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
