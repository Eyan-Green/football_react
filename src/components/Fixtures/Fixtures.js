import React, {Component} from 'react';
import './Fixtures.css';

class Fixtures extends React.Component {
	render() {
		return (
			<div className="FixturesDiv col-12 col-md-8 col-lg-5 mb-2 mb-xl-auto">
        		<table className="FixturesTable col-12 col-md-8 col-lg-5 mb-2 mb-xl-auto">
          			<thead>
            			<tr>
			              	<th>Home Team</th>
			              	<th>Away Team</th>
			              	<th>Match Time</th>
			              	<th>Match Date</th>
            			</tr>
          			</thead>
          			<tbody>
            			{this.props.fixtures.map(function(team, index) {
              				return (
                				<tr key={index}>
                  					<td>{team.match_hometeam_name}</td>
                  					<td>{team.match_awayteam_name}</td>
                  					<td>{team.match_time}</td>
                  					<td>{team.match_date}</td>
               					</tr>
              				)
            			})}
          			</tbody>
        		</table>
			</div>
		)
	}
}

export default Fixtures;