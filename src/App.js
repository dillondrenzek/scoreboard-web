import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Clock from './components/clock/Clock';
import Team from './components/team/Team';
import ControlPanel from './components/control-panel/ControlPanel';
import './App.css';

const Period = ({ period }) => (
  <div>
    <span>{ period.value } </span>
    <span>{ period.type }</span>
  </div>
);





const Nav = ({}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Scoreboard</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  )
};

const App = ({ clock, teams, period }) => {
  clock = clock || { minutes: [0,0], seconds: [0,0], tenths: 0 };
  period = period || { value: 1, type: 'QTR' };
  teams = teams || [
    { name: 'Team A', score: 0 },
    { name: 'Team B', score: 0 }
  ];
  const homeTeam = teams[0];
  const awayTeam = teams[1];

  return (
    <div className="App">
      <Nav />
      <div className="scoreboard container-fluid">
        <div className="row">
          <div className="col-4 text-center">
            <Team team={homeTeam} />
          </div>
          <div className="col-4 text-center">
            <Period period={period} />
            <Clock clock={clock} />
          </div>
          <div className="col-4 text-center">
            <Team team={awayTeam} />
          </div>
        </div>
      </div>
      <div className="control-panel container">
        <ControlPanel clock={clock} teams={teams} period={period}/>
      </div>
    </div>
  );
};

App.propTypes = {
  clock: PropTypes.object,
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      score: PropTypes.number
    })
  ),
  period: PropTypes.shape({
    value: PropTypes.number,
    type: PropTypes.string
  })
};


const mapStateToProps = (state, props) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
