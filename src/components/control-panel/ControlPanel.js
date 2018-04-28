import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { incrementTeamScore } from '../../actions';

const ControlPanel = ({ teams, clock, period, onIncrementScore }) => {
  return (
    <div>
      <h4>{teams[0].name}</h4>
      <button onClick={() => onIncrementScore(0, 1)}>+1</button>
      <button onClick={() => onIncrementScore(0, 2)}>+2</button>
      <button onClick={() => onIncrementScore(0, 3)}>+3</button>
      <h4>{teams[1].name}</h4>
      <button onClick={() => onIncrementScore(1, 1)}>+1</button>
      <button onClick={() => onIncrementScore(1, 2)}>+2</button>
      <button onClick={() => onIncrementScore(1, 3)}>+3</button>
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
