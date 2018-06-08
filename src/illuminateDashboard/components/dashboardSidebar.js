import React, {Component} from 'react';
import {
  Route,
  NavLink,
  withRouter
} from "react-router-dom";



 class DashboardSidebar extends Component {
 	render(){
 		return (
 			<withRouter>
 			<div>
 			<nav id="sidebar-nav">
				    <ul id="vertical-sidebar-nav" className="sf-menu">
				        <li className="normal-item-pro current-menu-item">
				            <a href="dashboard-home.html">
				                        <span className="icon-Old-TV"></span>
				                  TV Series
				                </a>
				        </li>
				        <li className="normal-item-pro">
				            <a href="dashboard-movies.html">
				                        <span className="icon-Reel"></span>
				                  Movies
				                </a>
				        </li>
				        <li className="normal-item-pro">
				            <a href="dashboard-playlists.html">
				                        <span className="icon-Movie"></span>
				                  Playlists
				                </a>
				        </li>
				        <li className="normal-item-pro">
				            <a href="dashboard-new-arrivals.html">
				                        <span className="icon-Movie-Ticket"></span>
				                  New Arrivals
				                </a>
				        </li>
				        <li className="normal-item-pro">
				            <a href="dashboard-coming-soon.html">
				                        <span className="icon-Clock"></span>
				                  Coming Soon
				                </a>
				        </li>
				    </ul>
				    <div className="clearfix"></div>
				</nav>
 			</div>
 			</withRouter>
 			)
 	}

 }

export default withRouter(DashboardSidebar) 


