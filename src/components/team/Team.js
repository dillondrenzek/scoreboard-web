import React, { Component } from 'react';

class Team extends Component {

    renderTeamScore(score) {
        return <div>{ score }</div>;
    }

    renderTeamName(name) {
        return <div>{ name }</div>;
    }

    render() {
        const { team } = this.props;
        const { name, score } = team;

        return <div className="Team">
            { this.renderTeamName(name) }
            { this.renderTeamScore(score) }
            </div>;
    }
}

export default Team;
