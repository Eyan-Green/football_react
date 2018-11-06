import React, {Component} from 'react';
import './HeadToHead.css';

class HeadToHeadOne extends Component {
	render() {
		return (<select id='TeamOne'>{this.props.teams_one.map((x, y) => <option key={y}>{x}</option>)}</select>)
	}
}

export default HeadToHeadOne; 