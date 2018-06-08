import React, {Component} from 'react';
import {
  Route,
  NavLink,
  withRouter
} from "react-router-dom";

import DashboardSidebar from './dashboardSidebar';

 class DashboardToolbar extends Component {
 	render(){
 		return (
 			<withRouter>
 			<div id="sidebar-bg">
				<header id="videohead-pro" className="sticky-header">
				    <div id="video-logo-background"><a href="dashboard-home.html"><img src="images/logo-video-layout.png" alt="Logo" /></a></div>
				    <div id="video-search-header">
				        <div id="search-icon-more"></div>
				        <input type="text" placeholder="Search for Movies or TV Series" aria-label="Search" />
				        <div id="video-search-header-filtering">
				            <form id="video-search-header-filtering-padding">
				                <div className="row">
				                    <div className="col-sm extra-padding">
				                        <h5>Type:</h5>
				                        <div className="row">
				                            <div className="col-sm">
				                                <label className="checkbox-pro-container">Movies
				                                    <input type="checkbox" checked="checked" id="movies-type" />
				                                    <span className="checkmark-pro"></span>
				                                </label>
				                                <label className="checkbox-pro-container">TV Series
				                                    <input type="checkbox" id="tv-type" />
				                                    <span className="checkmark-pro"></span>
				                                </label>
				                            </div>
				                            <div className="col">
				                                <label className="checkbox-pro-container">New Arrivals
				                                    <input type="checkbox" id="movie-type" />
				                                    <span className="checkmark-pro"></span>
				                                </label>
				                                <label className="checkbox-pro-container">Documentary
				                                    <input type="checkbox" id="documentary-type" />
				                                    <span className="checkmark-pro"></span>
				                                </label>
				                            </div>
				                        </div>
				                        <div className="dotted-dividers-pro"></div>
				                    </div>
				                    <div className="col-sm extra-padding">
				                        <h5>Genres:</h5>
				                        <select className="custom-select">
				                            <option selected>All Genres</option>
				                            <option value="1">Action</option>
				                            <option value="2">Adventure</option>
				                            <option value="3">Drama</option>
				                            <option value="4">Animation</option>
				                            <option value="5">Documentary</option>
				                            <option value="6">Drama</option>
				                            <option value="7">Horror</option>
				                            <option value="8">Thriller</option>
				                            <option value="9">Fantasy</option>
				                            <option value="10">Romance</option>
				                            <option value="11">Sci-Fi</option>
				                            <option value="12">Western</option>
				                        </select>
				                        <div className="dotted-dividers-pro"></div>
				                    </div>
				                    <div className="col-sm extra-padding">
				                        <h5>Country:</h5>
				                        <select className="custom-select">
				                            <option selected>All Countries</option>
				                            <option value="1">Argentina</option>
				                            <option value="2">Australia</option>
				                            <option value="3">Bahamas</option>
				                            <option value="4">Belgium</option>
				                            <option value="5">Brazil</option>
				                            <option value="6">Canada</option>
				                            <option value="7">Chile</option>
				                            <option value="8">China</option>
				                            <option value="9">Denmark</option>
				                            <option value="10">Ecuador</option>
				                            <option value="11">France</option>
				                            <option value="12">Germany</option>
				                            <option value="13">Greece</option>
				                            <option value="14">Guatemala</option>
				                            <option value="15">Italy</option>
				                            <option value="16">Japan</option>
				                            <option value="17">asdfasdf</option>
				                            <option value="18">Korea</option>
				                            <option value="19">Malaysia</option>
				                            <option value="20">Monaco</option>
				                            <option value="21">Morocco</option>
				                            <option value="22">New Zealand</option>
				                            <option value="23">Panama</option>
				                            <option value="24">Portugal</option>
				                            <option value="25">Russia</option>
				                            <option value="26">United Kingdom</option>
				                            <option value="27">United States</option>
				                        </select>
				                        <div className="dotted-dividers-pro"></div>
				                    </div>
				                    <div className="col-sm extra-padding extra-range-padding">
				                        <h5>Average Rating:</h5>
				                        <input className="range-example-rating-input" type="text" min="0" max="10" value="4,10" step="1" />
				                    </div>
				                </div>
				                <div id="video-search-header-buttons">
				                    <a href="#!" className="btn btn-green-pro">Filter Search</a>
				                    <a href="#!" className="btn">Reset</a>
				                </div>
				            </form>
				        </div>
				    </div>
				    <div id="mobile-bars-icon-pro" className="noselect"><i className="fas fa-bars"></i></div>
				    <div id="header-user-profile">
				        <div id="header-user-profile-click" className="noselect">
				            <img src="images/demo/user-profile.jpg" alt="Suzie" />
				            <div id="header-username">Suzie Smith</div><i className="fas fa-angle-down"></i>
				        </div>
				        <div id="header-user-profile-menu">
				            <ul>
				                <li><a href="dashboard-profile.html"><span className="icon-User"></span>My Profile</a></li>
				                <li><a href="dashboard-favorites.html"><span className="icon-Favorite-Window"></span>My Favorites</a></li>
				                <li><a href="dashboard-account.html"><span className="icon-Gears"></span>Account Details</a></li>
				                <li><a href="#!"><span className="icon-Life-Safer"></span>Help/Support</a></li>
				                <li><a href="index-2.html"><span className="icon-Power-3"></span>Log Out</a></li>
				            </ul>
				        </div>
				    </div>
				    <div id="header-user-notification">
				        <div id="header-user-notification-click" className="noselect">
				            <i className="far fa-bell"></i>
				            <span className="user-notification-count">3</span>
				        </div>
				        <div id="header-user-notification-menu">
				            <h3>Notifications</h3>
				            <div id="header-notification-menu-padding">
				                <ul id="header-user-notification-list">
				                    <li><a href="#!"><img src="images/demo/user-profile-2.jpg" alt="Profile" />Lorem ipsum dolor sit amet, consec tetur adipiscing elit. <div className="header-user-notify-time">21 hours ago</div></a></li>
				                    <li><a href="#!"><img src="images/demo/user-profile-3.jpg" alt="Profile" />Donec vitae lacus id arcu molestie mollis. <div className="header-user-notify-time">3 days ago</div></a></li>
				                    <li><a href="#!"><img src="images/demo/user-profile-4.jpg" alt="Profile" />Aenean vitae lectus non purus facilisis imperdiet. <div className="header-user-notify-time">5 days ago</div></a></li>
				                </ul>
				                <div className="clearfix"></div>
				            </div>
				        </div>
				    </div>
				    <div className="clearfix"></div>
				    <nav id="mobile-navigation-pro">
				        <ul id="mobile-menu-pro">
				            <li className="current-menu-item">
				                <a href="dashboard-home.html">
				                        <span className="icon-Old-TV"></span>
				                    TV Series
				                  </a>
				            </li>
				            <li>
				                <a href="dashboard-movies.html">
				                        <span className="icon-Reel"></span>
				                    Movies
				                  </a>
				            </li>
				            <li>
				                <a href="dashboard-playlists.html">
				                        <span className="icon-Movie"></span>
				                    Playlists
				                  </a>
				            </li>
				            <li>
				                <a href="dashboard-new-arrivals.html">
				                        <span className="icon-Movie-Ticket"></span>
				                    New Arrivals
				                  </a>
				            </li>
				            <li>
				                <a href="dashboard-coming-soon.html">
				                        <span className="icon-Clock"></span>
				                    Coming Soon
				                  </a>
				            </li>
				            <li>
				                <a href="#!">
				                        <i className="far fa-bell"></i>
				                        <span className="user-notification-count">3</span>
				                    Notifications
				                  </a>
				            </li>
				        </ul>
				        <div className="clearfix"></div>
				        <div id="search-mobile-nav-pro">
				            <input type="text" placeholder="Search for Movies or TV Series" aria-label="Search" />
				        </div>
				    </nav>
				</header>
				<DashboardSidebar/>
 				
				 			</div>
 			</withRouter>
 			)
 	}

 }

export default withRouter(DashboardToolbar) 


