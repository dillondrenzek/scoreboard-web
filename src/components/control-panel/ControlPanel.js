import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { incrementTeamScore, setTeamScore } from '../../actions';

import TeamControl from './controls/TeamControl';
import ClockControl from './controls/ClockControl';

const ControlPanel = ({ teams, clock, period }) => {
  return (
    <div className="row">
      {teams.map((team, i) => <TeamControl className="col-4" key={i} index={i} team={team}/>)}
      <ClockControl className="col-4" clock={clock} />
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
