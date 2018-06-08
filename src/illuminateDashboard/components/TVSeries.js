import React, {Component} from 'react';


import {
  Route,
  NavLink,
  HashRouter,
  IndexRoute
} from "react-router-dom";


const CustomStyle = {
	cover : {
		'background-image': 'url(images/demo/dashboard-slide-1.jpg)'
	},
	cover2 : {
		'background-image': 'url(images/demo/dashboard-slide-2.jpg)'
	},
	coverCol : {
		'color':'#42b740'
	},
	coverCol2 : {
		'color':'#ff4141'
	}
}

export default class DashboardTemplate extends Component {
	render(){
		return(
			<div>
			<main id="col-main">
            <div className="flexslider progression-studios-dashboard-slider">
                <ul className="slides">
                    <li className="progression_studios_animate_left">
                        <div className="progression-studios-slider-dashboard-image-background" style={CustomStyle.cover}>
                            <div className="progression-studios-slider-display-table">
                                <div className="progression-studios-slider-vertical-align">
                                    <div className="container">
                                        <a className="progression-studios-slider-play-btn afterglow" href="#VideoLightbox-1"><i className="fas fa-play"></i></a>
                                        <video id="VideoLightbox-1" poster="../../cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD6654.jpg?v1" width="960" height="540">
                                            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4" type="video/mp4"/>
                                            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.webm" type="video/webm"/>
                                        </video>
                                        <div className="circle-rating-pro" data-value="0.86" data-animation-start-value="0.86" data-size="70" data-thickness="6" data-fill="{
                                          &quot;color&quot;: &quot;#42b740&quot;
                                        }" data-empty-fill="#def6de" data-reverse="true"><span className="ratingGreen">8.6</span></div>
                                        <div className="progression-studios-slider-dashboard-caption-width">
                                            <div className="progression-studios-slider-caption-align">
                                                <h6>TV Series</h6>
                                                <ul className="progression-studios-slider-rating">
                                                    <li>PG-13</li>
                                                    <li>HD</li>
                                                </ul>
                                                <h2><a href="dashboard-movie-profile.html">Seven Days in Ibiza</a></h2>
                                                <ul className="progression-studios-slider-meta">
                                                    <li>15 August, 2016 (UK)</li>
                                                    <li>163 min.</li>
                                                    <li>Documentary</li>
                                                </ul>
                                                <p className="progression-studios-slider-description">A sex columnist, Carrie Bradshaw, and her three friends Samantha, Charlotte and Miranda explore Manhattan's dating scene, chronicling the mating habits of single New Yorkers.</p>
                                                <a className="btn btn-green-pro btn-slider-pro btn-shadow-pro afterglow" href="#VideoLightbox-1"><i className="fas fa-play"></i> Watch Trailer</a>
                                                <div className="progression-studios-slider-more-options">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                    <ul>
                                                        <li><a href="#!">Add to Favorites</a></li>
                                                        <li><a href="#!">Add to Watchlist</a></li>
                                                        <li><a href="#!">Add to Playlist</a></li>
                                                        <li><a href="#!">Share...</a></li>
                                                        <li><a href="#!">Write A Review</a></li>
                                                    </ul>
                                                </div>
                                                <div className="clearfix"></div>
                                                <h5>Starring</h5>
                                                <ul className="progression-studios-staring-slider">
                                                    <li><a href="#!"><img src="images/demo/user-1.jpg" alt="Starring"/></a></li>
                                                    <li><a href="#!"><img src="images/demo/user-2.jpg" alt="Starring"/></a></li>
                                                    <li><a href="#!"><img src="images/demo/user-3.jpg" alt="Starring"/></a></li>
                                                    <li><a href="#!"><img src="images/demo/user-4.jpg" alt="Starring"/></a></li>
                                                    <li><a href="#!"><img src="images/demo/user-5.jpg" alt="Starring"/></a></li>
                                                    <li><a href="#!"><img src="images/demo/user-6.jpg" alt="Starring"/></a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="progression-studios-slider-mobile-background-cover"></div>
                        </div>
                    </li>
                    <li className="progression_studios_animate_in">
                        <div className="progression-studios-slider-dashboard-image-background" style={CustomStyle.cover2}>
                            <div className="progression-studios-slider-display-table">
                                <div className="progression-studios-slider-vertical-align">
                                    <div className="container">
                                        <a className="progression-studios-slider-play-btn afterglow" href="#VideoLightbox-2"><i className="fas fa-play"></i></a>
                                        <video id="VideoLightbox-2" poster="../../cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD6654.jpg?v1" width="960" height="540" >
                                            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4" type="video/mp4"/>
                                            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.webm" type="video/webm"/>
                                        </video>
                                        <div className="circle-rating-pro" data-value="0.82" data-animation-start-value="0.82" data-size="70" data-thickness="6" data-fill="{
                                          &quot;color&quot;: &quot;#42b740&quot;
                                        }" data-empty-fill="#203521" data-reverse="true"><span className="ratingGreen">8.2</span></div>
                                        <div className="progression-studios-slider-dashboard-caption-width">
                                            <div className="progression-studios-slider-caption-align">
                                                <h6 className="light-fonts-pro">TV Series</h6>
                                                <ul className="progression-studios-slider-rating">
                                                    <li>PG-13</li>
                                                    <li>HD</li>
                                                </ul>
                                                <h2 className="light-fonts-pro"><a href="dashboard-movie-profile.html">Made In America</a></h2>
                                                <ul className="progression-studios-slider-meta">
                                                    <li>15 August, 2016 (UK)</li>
                                                    <li>163 min.</li>
                                                    <li>Documentary</li>
                                                </ul>
                                                <p className="progression-studios-slider-description light-fonts-pro">A sex columnist, Carrie Bradshaw, and her three friends Samantha, Charlotte and Miranda explore Manhattan's dating scene, chronicling the mating habits of single New Yorkers.</p>
                                                <a className="btn btn-green-pro btn-slider-pro afterglow" href="#VideoLightbox-2"><i className="fas fa-play"></i> Watch Trailer</a>
                                                <div className="progression-studios-slider-more-options">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                    <ul>
                                                        <li><a href="#!">Add to Favorites</a></li>
                                                        <li><a href="#!">Add to Watchlist</a></li>
                                                        <li><a href="#!">Add to Playlist</a></li>
                                                        <li><a href="#!">Share...</a></li>
                                                        <li><a href="#!">Write A Review</a></li>
                                                    </ul>
                                                </div>
                                                <div className="clearfix"></div>
                                                <h5 className="light-fonts-pro">Starring</h5>
                                                <ul className="progression-studios-staring-slider">
                                                    <li><a href="#!"><img src="images/demo/user-1.jpg" alt="Starring"/></a></li>
                                                    <li><a href="#!"><img src="images/demo/user-2.jpg" alt="Starring"/></a></li>
                                                    <li><a href="#!"><img src="images/demo/user-3.jpg" alt="Starring"/></a></li>
                                                    <li><a href="#!"><img src="images/demo/user-4.jpg" alt="Starring"/></a></li>
                                                    <li><a href="#!"><img src="images/demo/user-5.jpg" alt="Starring"/></a></li>
                                                    <li><a href="#!"><img src="images/demo/user-6.jpg" alt="Starring"/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="progression-studios-slider-mobile-background-cover-dark"></div>
                        </div>
                    </li>
                </ul>
            </div>
            <ul className="dashboard-genres-pro">
                <li>
                    <img src="images/genres/drama.png" alt="Drama"/>
                    <h6>Drama</h6>
                </li>
                <li className="active">
                    <img src="images/genres/comedy.png" alt="Comedy"/>
                    <h6>Comedy</h6>
                </li>
                <li>
                    <img src="images/genres/action.png" alt="Action"/>
                    <h6>Action</h6>
                </li>
                <li>
                    <img src="images/genres/romance.png" alt="Romance"/>
                    <h6>Romance</h6>
                </li>
                <li>
                    <img src="images/genres/horror.png" alt="Horror"/>
                    <h6>Horror</h6>
                </li>
                <li>
                    <img src="images/genres/fantasy.png" alt="Fantasy"/>
                    <h6>Fantasy</h6>
                </li>
                <li>
                    <img src="images/genres/sci-fi.png" alt="Sci-Fi"/>
                    <h6>Sci-Fi</h6>
                </li>
                <li>
                    <img src="images/genres/thriller.png" alt="Thriller"/>
                    <h6>Thriller</h6>
                </li>
                <li>
                    <img src="images/genres/western.png" alt="Western"/>
                    <h6>Western</h6>
                </li>
                <li>
                    <img src="images/genres/adventure.png" alt="Adventure"/>
                    <h6>Adventure</h6>
                </li>
                <li>
                    <img src="images/genres/animation.png" alt="Animation"/>
                    <h6>Animation</h6>
                </li>
                <li>
                    <img src="images/genres/documentary.png" alt="Documentary"/>
                    <h6>Documentary</h6>
                </li>
            </ul>
            <div className="clearfix"></div>
            <div className="dashboard-container">
                <h4 className="heading-extra-margin-bottom">Comedies</h4>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="item-listing-container-skrn">
                            <a href="dashboard-movie-profile.html"><img src="images/demo/listing-1.jpg" alt="Listing"/></a>
                            <div className="item-listing-text-skrn">
                                <div className="item-listing-text-skrn-vertical-align">
                                    <h6><a href="dashboard-movie-profile.html">The Wild Things Are</a></h6>
                                    <div className="circle-rating-pro" data-value="0.86" data-animation-start-value="0.86" data-size="32" data-thickness="3" data-fill="{
                                      &quot;color&quot;: &quot;#42b740&quot;
                                    }" data-empty-fill="#def6de" data-reverse="true"><span className="ratingGreen">8.6</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="item-listing-container-skrn">
                            <a href="dashboard-movie-profile.html"><img src="images/demo/listing-2.jpg" alt="Listing"/></a>
                            <div className="item-listing-text-skrn">
                                <div className="item-listing-text-skrn-vertical-align">
                                    <h6><a href="dashboard-movie-profile.html">Central Intelligence</a></h6>
                                    <div className="circle-rating-pro" data-value="0.6" data-animation-start-value="0.6" data-size="32" data-thickness="3" data-fill="{
                                      &quot;color&quot;: &quot;#ff4141&quot;
                                    }" data-empty-fill="#ffe1e1" data-reverse="true"><span style={CustomStyle.coverCol}>6.0</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="item-listing-container-skrn">
                            <a href="dashboard-movie-profile.html"><img src="images/demo/listing-3.jpg" alt="Listing" /></a>
                            <div className="item-listing-text-skrn">
                                <div className="item-listing-text-skrn-vertical-align">
                                    <h6><a href="dashboard-movie-profile.html">Zoolander No. 2</a></h6>
                                    <div className="circle-rating-pro" data-value="0.86" data-animation-start-value="0.86" data-size="32" data-thickness="3" data-fill="{
                                      &quot;color&quot;: &quot;#42b740&quot;
                                    }" data-empty-fill="#def6de" data-reverse="true"><span style={CustomStyle.coverCol}>8.6</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="item-listing-container-skrn">
                            <a href="dashboard-movie-profile.html"><img src="images/demo/listing-4.jpg" alt="Listing" /></a>
                            <div className="item-listing-text-skrn">
                                <div className="item-listing-text-skrn-vertical-align">
                                    <h6><a href="dashboard-movie-profile.html">Bad Neighbors 2</a></h6>
                                    <div className="circle-rating-pro" data-value="0.72" data-animation-start-value="0.72" data-size="32" data-thickness="3" data-fill="{
                                      &quot;color&quot;: &quot;#42b740&quot;
                                    }" data-empty-fill="#def6de" data-reverse="true"><span style={CustomStyle.coverCol}>7.2</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="item-listing-container-skrn">
                            <a href="dashboard-movie-profile.html"><img src="images/demo/listing-5.jpg" alt="Listing" /></a>
                            <div className="item-listing-text-skrn">
                                <div className="item-listing-text-skrn-vertical-align">
                                    <h6><a href="dashboard-movie-profile.html">Star Wars: Rogue One</a></h6>
                                    <div className="circle-rating-pro" data-value="0.86" data-animation-start-value="0.86" data-size="32" data-thickness="3" data-fill="{
                                      &quot;color&quot;: &quot;#42b740&quot;
                                    }" data-empty-fill="#def6de" data-reverse="true"><span className="ratingGreen">8.6</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="item-listing-container-skrn">
                            <a href="dashboard-movie-profile.html"><img src="images/demo/listing-6.jpg" alt="Listing" /></a>
                            <div className="item-listing-text-skrn">
                                <div className="item-listing-text-skrn-vertical-align">
                                    <h6><a href="dashboard-movie-profile.html">The Imitation Game</a></h6>
                                    <div className="circle-rating-pro" data-value="0.6" data-animation-start-value="0.6" data-size="32" data-thickness="3" data-fill="{
                                      &quot;color&quot;: &quot;#ff4141&quot;
                                    }" data-empty-fill="#ffe1e1" data-reverse="true"><span style={CustomStyle.coverCol2}>6.0</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="item-listing-container-skrn">
                            <a href="dashboard-movie-profile.html"><img src="images/demo/listing-7.jpg" alt="Listing" /></a>
                            <div className="item-listing-text-skrn">
                                <div className="item-listing-text-skrn-vertical-align">
                                    <h6><a href="dashboard-movie-profile.html">Fantastic Beasts</a></h6>
                                    <div className="circle-rating-pro" data-value="0.86" data-animation-start-value="0.86" data-size="32" data-thickness="3" data-fill="{
                                      &quot;color&quot;: &quot;#42b740&quot;
                                    }" data-empty-fill="#def6de" data-reverse="true"><span style={CustomStyle.coverCol}>8.6</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="item-listing-container-skrn">
                            <a href="dashboard-movie-profile.html"><img src="images/demo/listing-8.jpg" alt="Listing" /></a>
                            <div className="item-listing-text-skrn">
                                <div className="item-listing-text-skrn-vertical-align">
                                    <h6><a href="dashboard-movie-profile.html">Edge of Tomorrow</a></h6>
                                    <div className="circle-rating-pro" data-value="0.72" data-animation-start-value="0.72" data-size="32" data-thickness="3" data-fill="{
                                      &quot;color&quot;: &quot;#42b740&quot;
                                    }" data-empty-fill="#def6de" data-reverse="true"><span style={CustomStyle.coverCol}>7.2</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="item-listing-container-skrn">
                            <a href="dashboard-movie-profile.html"><img src="images/demo/listing-9.jpg" alt="Listing" /></a>
                            <div className="item-listing-text-skrn">
                                <div className="item-listing-text-skrn-vertical-align">
                                    <h6><a href="dashboard-movie-profile.html">Allegiant</a></h6>
                                    <div className="circle-rating-pro" data-value="0.86" data-animation-start-value="0.86" data-size="32" data-thickness="3" data-fill="{
                                      &quot;color&quot;: &quot;#42b740&quot;
                                    }" data-empty-fill="#def6de" data-reverse="true"><span style={CustomStyle.coverCol}>8.6</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="item-listing-container-skrn">
                            <a href="dashboard-movie-profile.html"><img src="images/demo/listing-10.jpg" alt="Listing" /></a>
                            <div className="item-listing-text-skrn">
                                <div className="item-listing-text-skrn-vertical-align">
                                    <h6><a href="dashboard-movie-profile.html">Lo and Behold</a></h6>
                                    <div className="circle-rating-pro" data-value="0.6" data-animation-start-value="0.6" data-size="32" data-thickness="3" data-fill="{
                                      &quot;color&quot;: &quot;#ff4141&quot;
                                    }" data-empty-fill="#ffe1e1" data-reverse="true"><span style={CustomStyle.coverCol2}>6.0</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="item-listing-container-skrn">
                            <a href="dashboard-movie-profile.html"><img src="images/demo/listing-11.jpg" alt="Listing" /></a>
                            <div className="item-listing-text-skrn">
                                <div className="item-listing-text-skrn-vertical-align">
                                    <h6><a href="dashboard-movie-profile.html">Drive</a></h6>
                                    <div className="circle-rating-pro" data-value="0.86" data-animation-start-value="0.86" data-size="32" data-thickness="3" data-fill="{
                                      &quot;color&quot;: &quot;#42b740&quot;
                                    }" data-empty-fill="#def6de" data-reverse="true"><span style={CustomStyle.coverCol}>8.6</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="item-listing-container-skrn">
                            <a href="dashboard-movie-profile.html"><img src="images/demo/listing-12.jpg" alt="Listing" /></a>
                            <div className="item-listing-text-skrn">
                                <div className="item-listing-text-skrn-vertical-align">
                                    <h6><a href="dashboard-movie-profile.html">Nightcrawler</a></h6>
                                    <div className="circle-rating-pro" data-value="0.72" data-animation-start-value="0.72" data-size="32" data-thickness="3" data-fill="{
                                      &quot;color&quot;: &quot;#42b740&quot;
                                    }" data-empty-fill="#def6de" data-reverse="true"><span style={CustomStyle.coverCol}>7.2</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="page-numbers">
                    <li><a className="previous page-numbers" href="#!"><i className="fas fa-chevron-left"></i></a></li>
                    <li><span className="page-numbers current">1</span></li>
                    <li><a className="page-numbers" href="#!">2</a></li>
                    <li><a className="page-numbers" href="#!">3</a></li>
                    <li><a className="page-numbers" href="#!">4</a></li>
                    <li><a className="next page-numbers" href="#!"><i className="fas fa-chevron-right"></i></a></li>
                </ul>
            </div>
        </main> 
				
			</div>
			)
	}
}