import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Clock = ({ clock }) => {
  let { minutes, seconds, tenths } = clock;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return (
    <div>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
      <span>.</span>
      <span>{tenths}</span>
    </div>
  );
};

export default Clock;
