import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import LeagueTable from './components/LeagueTable/LeagueTable.js';
import Fixtures from './components/Fixtures/Fixtures.js';
import LeagueDropdown from './components/LeagueDropdown/LeagueDropdown.js';
import Teams from './components/Teams/Teams.js';
import Results from './components/Results/Results.js';

let leagueId = "";
const baseUrl = "https://apifootball.com/api/?action=";
const apiKey = "&APIkey=27f5156c09fd624044b909bbb277bcee922a03876c8838798f42ff55decaadd2";
let today = new Date();
let day = (today.getDate() < 10 ? '0' : '') + today.getDate();
let month = ((today.getMonth() + 1) < 10 ? '0' : '') + (today.getMonth() + 1);
let thisWeek = `${today.getFullYear()}-${month}-${day}` 
today.setDate(today.getDate() + 7);
let nextWeekDay = (today.getDate() < 10 ? '0' : '') + today.getDate();
let nextWeekMonth = ((today.getMonth() + 1) < 10 ? '0' : '') + (today.getMonth() + 1);
let nextWeekYear = today.getFullYear()
let nextWeek = `${nextWeekYear}-${nextWeekMonth}-${nextWeekDay}`


class App extends Component {
  constructor() {
    super()
    this.state = {
      tableData: [],
      fixtureData: [],
      leagues:[],
      teams: [],
      headToHead: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.setTableData = this.setTableData.bind(this)
    this.setFixtureData = this.setFixtureData.bind(this)
    this.setTeamData = this.setTeamData.bind(this)
    this.getHeadToHead = this.getHeadToHead.bind(this)
    this.setHeadToHeadData = this.setHeadToHeadData.bind(this)
  }
  // Event handler for submit
  handleClick() {
    const league = document.getElementById('LeagueDropdown')
    if (league.value === "championship") {
      leagueId = "63"
    } else {
      leagueId = "128"
    }
    // API call returns league standings 
    axios.get(`${baseUrl}get_standings&league_id=${leagueId}${apiKey}`)
    .then(response => {
      let table = response.data.sort((a,b) => (parseInt(a.overall_league_position) > parseInt(b.overall_league_position)) ? 1 : ((parseInt(b.overall_league_position) > parseInt(a.overall_league_position)) ? -1 : 0));
      this.setTableData(table)
      this.setTeamData(response.data)
    })
    // API call returns upcoming fixtures
    axios.get(`${baseUrl}get_events&from=${thisWeek}&to=${nextWeek}&league_id=${leagueId}${apiKey}`)
    .then(response => {
      this.setFixtureData(response.data)
    })
  }
  // API call returns head to head data
  getHeadToHead() {
    const one = document.getElementById('TeamOne').value
    const two = document.getElementById('TeamTwo').value
    
    axios.get(`${baseUrl}get_H2H&firstTeam=${one}&secondTeam=${two}${apiKey}`)
    .then(response => {
      this.setHeadToHeadData(response.data)
    })
  }
  // set tableData state in constructor
  setTableData(data) {
    this.setState({tableData: data})
  }
  // set fixtureData state in constructor
  setFixtureData(data) {
    this.setState({fixtureData: data})
  }
  // set teams state in constructor 
  setTeamData(data) {
    let array = []
    data.forEach(function(element){
      array.push(element.team_name)
    })
    this.setState({teams: array.sort()})
  }
  // set headToHead state in constructor
  setHeadToHeadData(data) {
    this.setState({headToHead: data.firstTeam_VS_secondTeam})
  }

  render () {
    return (
      <div className="App col-12 col-md-8 col-lg-5 mb-2 mb-xl-auto">
        <div className='button-container col-12 col-md-8 col-lg-5 mb-2 mb-xl-auto'>
          < LeagueDropdown leagues={this.state.leagues} /><button className='button' onClick={this.handleClick}>Submit</button>
        </div>
          <h1>League Standings</h1>
            < LeagueTable table={this.state.tableData} />
          <h1>Upcoming League Fixtures</h1>
            < Fixtures fixtures={this.state.fixtureData} />
          <h1>Head To Head</h1>
            < Teams teams={this.state.teams} /><button className='button' onClick={this.getHeadToHead}>Submit</button>
            < Results headToHead={this.state.headToHead} />
      </div>
    )
  }
}

export default App;
