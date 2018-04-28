import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { incrementTeamScore, setTeamScore } from '../../../actions';

const TeamControl = ({
  team,
  index,
  onIncrementScore,
  onSetScore
}) => {
  return (
    <div>
      <h4>{team.name}</h4>
      <button onClick={() => onIncrementScore(index, 1)}>+1</button>
      <button onClick={() => onIncrementScore(index, 2)}>+2</button>
      <button onClick={() => onIncrementScore(index, 3)}>+3</button>
      <button onClick={() => onSetScore(index, 0)}>Reset</button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamControl);
