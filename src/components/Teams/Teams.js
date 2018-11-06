import React, {Component} from 'react';
import HeadToHeadOne from '../HeadToHead/HeadToHeadOne.js';
import HeadToHeadTwo from '../HeadToHead/HeadToHeadTwo.js';

class Teams extends Component {
	render() {
    return (
      <div className="SelectTeamsDiv">
        < HeadToHeadOne teams_one={this.props.teams} />
        < HeadToHeadTwo teams_two={this.props.teams} />
      </div>
    )
	}
}

export default Teams;