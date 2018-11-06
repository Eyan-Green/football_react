import React, {Component} from 'react';
import './HeadToHead.css';

class HeadToHeadTwo extends Component {
	render() {
		return (<select id='TeamTwo'>{this.props.teams_two.map((x, y) => <option key={y}>{x}</option>)}</select>)
	}
}

export default HeadToHeadTwo; 