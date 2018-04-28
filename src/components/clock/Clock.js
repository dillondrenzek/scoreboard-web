import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ClockResolution } from '../../actions';

const Clock = ({ clock }) => {
  let { minutes, seconds, tenths, resolution } = clock;

  minutes = (minutes > 10 || minutes === 0)
    ? minutes
    : '0' + minutes;

  seconds = (seconds < 10) ? '0' + seconds : seconds;
  const showTenths = resolution === ClockResolution.Tenths;
  return (
    <h2>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
      {(showTenths) ? (<span>.</span>) : ''}
      {(showTenths) ? (<span>{tenths}</span>) : ''}
    </h2>
  );
};

export default Clock;
