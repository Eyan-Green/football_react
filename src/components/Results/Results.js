import React, {Component} from 'react';
import './Results.css';

class Results extends Component {
	render() {
		return (
			<div>
				<table className="ResultsTable" id='ResultsTableId'>
					<thead>
						<tr>
							<th>Home Team</th>
							<th>Away Team</th>
							<th>FT Score</th>
							<th>Match Date</th>
							<th>Match League/Cup</th>
						</tr>
					</thead>
					<tbody>
						{this.props.headToHead.map(function(team, index) {
							return (
								<tr key={index}>
									<td>{team.match_hometeam_name}</td>
									<td>{team.match_awayteam_name}</td>
									<td>{`${team.match_hometeam_score} - ${team.match_awayteam_score}`}</td>
									<td>{team.match_date}</td>
									<td>{team.league_name}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Results;