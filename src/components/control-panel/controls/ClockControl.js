import React from 'react';
import { connect } from 'react-redux';
import { startClock, stopClock, runClock, ClockResolution } from '../../../actions';

// TODO: when clock reaches 0, send stopClock action

const ClockControl = ({
  clock,
  onStartClock,
  onStopClock,
  onResetClock
}) => {
  return (
    <div className="col">
      <h4>Clock</h4>
      <div className="btn-group">
        <button className="btn btn-success" onClick={() => onStartClock(clock)}>Start</button>
        <button className="btn btn-danger" onClick={() => onStopClock()}>Stop</button>
        <button className="btn btn-secondary" onClick={() => onResetClock()}>Reset</button>
      </div>
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
    onStartClock: ({_interval, resolution}) => {
      // if we already have an interval, don't start another one
      if (_interval) return;
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
