import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { incrementTeamScore, setTeamScore } from '../../actions';

import TeamControl from './controls/TeamControl';
import ClockControl from './controls/ClockControl';

const ControlPanel = ({ teams, clock, period }) => {
  return (
    <div>
      {teams.map((team, i) => <TeamControl key={i} index={i} team={team}/>)}
      <ClockControl clock={clock} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
