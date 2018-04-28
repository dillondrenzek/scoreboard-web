import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Clock = ({ minutes, seconds, tenths }) => {
  minutes = minutes || [0,0];
  seconds = seconds || [0,0];
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

//
// class Clock extends Component {
//
//   constructor(props) {
//     super(props);
//
//     console.log('clock props', props);
//   }
//
//
//   render() {
//     const minutes = [2,0];
//     const seconds = [0,0];
//
//     return (
//
//     );
//   }
// }
//
// export default Clock;
