import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  IndexRoute
} from "react-router-dom";

export default class Landing extends Component {
	render(){
		return(
			<div>
            	<div className="flexslider progression-studios-slider">
			      <ul className="slides">
						<li className="progression_studios_animate_in">
							<div className="progression-studios-slider-image-background slideOne">
								<div className="progression-studios-slider-display-table">
									<div className="progression-studios-slider-vertical-align">
										
										<div className="container">
											
											<div className="progression-studios-slider-caption-width">
												<div className="progression-studios-slider-caption-align">
													<h2>Welcome to SKRN<span className="slideOne-span" >.</span></h2>
													<h6>Watch the largest collection of Movies and TV series anytime anywhere!</h6>
													<NavLink role="button" className="btn btn-green-pro btn-slider-pro btn-shadow-pro" to ="/user/plan">Start Your Free Trial </NavLink>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								
								<div className="progression-studios-slider-mobile-background-cover"></div>
							</div>
						</li>
						<li className="progression_studios_animate_right">
							<div className="progression-studios-slider-image-background slideTwo" >
								<div className="progression-studios-slider-display-table">
									<div className="progression-studios-slider-vertical-align">
										
										<div className="container">
											
											<div className="progression-studios-slider-caption-width">
												<div className="progression-studios-slider-caption-align">
													<h2 className="light-fonts-pro">Central Intelligence</h2>
													<h6 className="light-fonts-pro">Let users watch videos on any page via the built-in video player.</h6>
													<a className="btn btn-green-pro btn-slider-pro" href="dashboard-home.html" role="button">View The Video Library</a>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								
							</div>
						</li>
						<li className="progression_studios_animate_left">
							<div className="progression-studios-slider-image-background slideThree" >
								<div className="progression-studios-slider-display-table">
									<div className="progression-studios-slider-vertical-align">
										
										<div className="container">
											
											<div className="progression-studios-slider-caption-width">
												<div className="progression-studios-slider-caption-align">
													<h2>Ultimate Video Theme</h2>
													<h6>Watch the largest collection of Movies and TV series anytime anywhere!</h6>
													<NavLink role="button" className="btn btn-green-pro btn-slider-pro btn-shadow-pro" to ="/user/plan">Start Your Free Trial </NavLink>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								
								<div className="progression-studios-slider-mobile-background-cover"></div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			)
	}
}