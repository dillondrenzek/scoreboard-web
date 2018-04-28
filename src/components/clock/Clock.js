import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Clock = ({ clock }) => {
  const { minutes, seconds, tenths } = clock;
  return (
    <div>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <span>:</span>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
      <span>.</span>
      <span>{tenths}</span>
    </div>
  );
};

export default Clock;
