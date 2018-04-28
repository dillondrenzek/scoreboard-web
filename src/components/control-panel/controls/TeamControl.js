import React from 'react';
import { connect } from 'react-redux';
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
      <div className="btn-group">
        <button className="btn btn-success" onClick={() => onIncrementScore(index, 1)}>+1</button>
        <button className="btn btn-success" onClick={() => onIncrementScore(index, 2)}>+2</button>
        <button className="btn btn-success" onClick={() => onIncrementScore(index, 3)}>+3</button>
        <button className="btn btn-secondary" onClick={() => onSetScore(index, 0)}>Reset</button>
      </div>
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
