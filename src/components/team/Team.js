import React from 'react';
import { Component } from 'react';

const TeamName = ({ name }) => (
  <div>{ name }</div>
);

const TeamScore = ({ score }) => (
  <div>{ score }</div>
);

const Team = ({ team }) => {
  const {name, score} = team;
  return (
    <div>
      <TeamName name={ name }/>
      <TeamScore score={ score }/>
    </div>
  );
};

export default Team;
