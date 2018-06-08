import React, {Component} from 'react';
import {
  Route,
  NavLink,
  IndexRoute,
  HashRouter
} from "react-router-dom";

export default class StepOne extends Component {
	render(){
		return(
				<div>
				<div id="pricing-plans-background-image">
						<div className="container">
								<div className="pricing-plans-page-container">
									
									<div className="row">
										<div className="col-sm">
											<div className="pricing-table-col">
												<h6>FREE TRIAL</h6>
												<h2>Free</h2>
												<ul>
													<li>720p Available</li>
													<li>Watch on any Device</li>
													<li>20 Movies and Shows</li>
													<li>Download Available</li>
												</ul>
												<p><a className="btn" href="signup-step2.html" role="button">Choose Plan</a></p>
											</div>
										</div>
										<div className="col-sm">
											<div className="pricing-table-col">
												<h6>STARTER</h6>
												<h2><sup>$</sup>10<span> / month</span></h2>
												<ul>
													<li>HD Available</li>
													<li>Watch on any Device</li>
													<li>70 Movies and Shows</li>
													<li>Download Available</li>
												</ul>
												<p><a className="btn btn-green-pro" href="signup-step2.html" role="button">Choose Plan</a></p>
											</div>
										</div>
										<div className="col-sm">
											<div className="pricing-table-col">
												<h6>PREMIUM</h6>
												<h2><sup>$</sup>14<span> / month</span></h2>
												<ul>
													<li>Ultra HD Available</li>
													<li>Watch on any Device</li>
													<li>Unlimited Movies and Shows</li>
													<li>Download Available</li>
												</ul>
												<p><a className="btn" href="signup-step2.html" role="button">Choose Plan</a></p>
											</div>
										</div>
									</div>
									
								</div>
							
						</div>
					</div>

				</div>
				
			)
	}
}