import React, {Component} from 'react';
import TVShows from './components/TVSeries';


import {
  Route,
  NavLink,
  HashRouter,
  IndexRoute
} from "react-router-dom";


export default class DashboardTemplate extends Component {
	render(){
		return(
			<div> 
				<TVShows/>
			</div>
			)
	}
}