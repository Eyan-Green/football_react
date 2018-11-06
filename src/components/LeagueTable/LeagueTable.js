import React, {Component} from 'react';
import './LeagueTable.css';

class LeagueTable extends Component {
	render() {
		return (
			<div className="LeagueTableDiv col-12 col-md-8 col-lg-5 mb-2 mb-xl-auto">
				{
					<table className="LeagueTable col-12 col-md-8 col-lg-5 mb-2 mb-xl-auto" id="LeagueTableId">
						<thead>
				            <tr className="LeagueTableHead">
				              <th>Position</th>
				              <th>Team</th>
				              <th>Played</th>
				              <th>Won</th>
				              <th>Drawn</th>
				              <th>Lost</th>
				              <th>For</th>
				              <th>Against</th>
				              <th>Points</th>
				            </tr>
			          	</thead>
			          	<tbody>
			            	{this.props.table.map(function(team, index) {
			              		return (
			                		<tr key={index}>
					                	<td>{team.overall_league_position}</td>
					                  	<td>{team.team_name}</td>
					                  	<td>{team.overall_league_payed}</td>
					                  	<td>{team.overall_league_W}</td>
					                  	<td>{team.overall_league_D}</td>
					                  	<td>{team.overall_league_L}</td>
					                  	<td>{team.overall_league_GF}</td>
					                  	<td>{team.overall_league_GA}</td>
					                  	<td>{team.overall_league_PTS}</td>
			                		</tr>
			              		)
			            	})}
			          	</tbody>
			        </table>
				}
			</div>
		);
	}
}

export default LeagueTable;