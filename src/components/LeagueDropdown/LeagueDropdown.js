import React, {Component} from 'react';
import './LeagueDropdown.css';

class LeagueDropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		return (
			<select value={this.state.value} onChange={this.handleChange} className="col-12 col-md-8 col-lg-5 mb-2 mb-xl-auto" id="LeagueDropdown">
        		<option value="championship">Championship</option>
        		<option value="ligue2">Ligue 2</option>
			</select> 
		)
	}
}

export default LeagueDropdown;