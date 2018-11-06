const apiKey = "APIkey=27f5156c09fd624044b909bbb277bcee922a03876c8838798f42ff55decaadd2";

export const LeagueStandings = {
	search() {
		return fetch(`https://apifootball.com/api/?action=get_standings&league_id=63&${apiKey}`, {
			method: 'GET'
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			return jsonResponse.map(team => {
				return {
					league_name: team.league_name,
					team_name: team.team_name,
					team_position: team.overall_league_position,
					games_played: team.overall_league_payed,
					games_won: team.overall_league_W,
					games_drawn: team.overall_league_D,
					games_lost: team.overall_league_L,
					goals_for: team.overall_league_GF,
					goals_against: team.overall_league_GA,
					team_points: team.overall_league_PTS
				}
			});
		});
	}
};

export const HeadToHead = {
	search(teamOne, teamTwo) {
		const one = encodeURIComponent(teamOne);
		const two = encodeURIComponent(teamTwo);
		return fetch(`https://apifootball.com/api/?action=get_H2H&firstTeam=${teamOne}&secondTeam=${teamTwo}&${apiKey}`, {
			method: 'GET'
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if (jsonResponse.firstTeam_VS_secondTeam) {
				return jsonResponse.firstTeam_VS_secondTeam.map(match => {
					return {
						home_team: match.match_hometeam_name,
						away_team: match.match_awayteam_name,
						home_team_goals: match.match_hometeam_score,
						away_team_goals: match.match_awayteam_score,
						match_time: match.match_time,
						match_date: match.match_date
					}
				})
			} else {
				alert("Please select teams first");
			}
		});
	}
};