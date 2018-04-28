import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startClock, stopClock, runClock, ClockResolution } from '../../../actions';

// TODO: when clock reaches 0, send stopClock action

const ClockControl = ({
  clock,
  onStartClock,
  onStopClock,
  onResetClock
}) => {
  const {resolution} = clock;
  return (
    <div>
      <h4>Clock</h4>
      <button onClick={() => onStartClock(resolution)}>Start</button>
      <button onClick={() => onStopClock()}>Stop</button>
      <button onClick={() => onResetClock()}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // TODO: prevent second start click
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

export default connect(mapStateToProps, mapDispatchToProps)(ClockControl);
