import React from 'react';
import { connect } from 'react-redux';
import TeamControl from './controls/TeamControl';
import ClockControl from './controls/ClockControl';

const ControlPanel = ({ teams, clock, period }) => {
  const homeTeam = teams[0];
  const awayTeam = teams[1];
  return (
    <div className="row p-3">
      <TeamControl className="col-4" index={0} team={homeTeam}/>
      <ClockControl className="col-4" clock={clock} />
      <TeamControl className="col-4" index={1} team={awayTeam}/>
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
