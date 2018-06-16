import React from 'react';
import { connect } from 'react-redux';
import { incrementTeamScore, setTeamScore } from '../../../actions';

import { Button, ButtonGroup } from '../../shared';



const TeamControl = ({
  team,
  index,
  incrementTeamScore,
  setTeamScore
}) => {
  return (
    <div className='TeamControl'>
      <h4>{team.name}</h4>
      <ButtonGroup>
        <Button type='success' onClick={() => incrementTeamScore(index, 1)}>+1</Button>
        <Button type='success' onClick={() => incrementTeamScore(index, 2)}>+2</Button>
        <Button type='success' onClick={() => incrementTeamScore(index, 3)}>+3</Button>
        <Button type='secondary' onClick={() => setTeamScore(index, 0)}>Reset</Button>
      </ButtonGroup>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    incrementTeamScore: (teamIndex, amount) => {
      dispatch(incrementTeamScore(teamIndex, amount));
    },
    setTeamScore: (teamIndex, score) => {
      dispatch(setTeamScore(teamIndex, score));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamControl);
