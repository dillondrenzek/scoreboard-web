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
      <button onClick={() => onStartClock(clock)}>Start</button>
      <button onClick={() => onStopClock()}>Stop</button>
      <button onClick={() => onResetClock()}>Reset</button>
    </div>
  );
};

const getDuration = (resolution) => {
  switch (resolution) {
    case ClockResolution.Seconds:
      return 1000;
    case ClockResolution.Tenths:
      return 100;
    default:
      return 1000;
  }
};

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // TODO: prevent second start click
    onStartClock: ({_interval, resolution}) => {
      const dur = getDuration(resolution);
      const fn = () => dispatch(runClock(resolution));
      const interval = setInterval(fn, dur);
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
