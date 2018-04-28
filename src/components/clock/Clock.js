import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Clock = ({ clock }) => {
  const { minutes, seconds, tenths } = clock;
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
