import React, {Component} from 'react';
import PricingToolbar from './PricingToolbar';


export default class SignupWelcome extends Component {
	render(){
		return(
			<div> 
				<PricingToolbar></PricingToolbar>

				<div id="pricing-plans-background-image">
					<div className="container">
							<div className="registration-steps-page-container">
								

								<div className="registration-step-final-padding welcome-page-styles">
									
									<div className="centered-headings-pro pricing-plans-headings">
										<h6>Sign up complete!</h6>
										<h1>Welcome to SKRN!</h1>
									</div>
									
									<h6 className="welcome-style-summary">You can now start watching Movies and TV shows.</h6>
									<h6 className="welcome-style-summary">Your next billing information will be sent on your email on July 30, 2017</h6>
									
									<h3 className="welcome-plan-title">Your Plan: <span>Premium</span></h3>
									
									<ul className="welcome-features">
										<li>Ultra HD Available</li>
										<li>70 movies and shows</li>
										<li>Watch on any Device</li>
										<li>Download Available</li>
									</ul>
									<div className="clearfix"></div>
									
									<div className="registration-step-final-footer">
										<a href="dashboard-home.html" className="btn btn-green-pro">Start Watching</a>
										<a href="#!" className="btn">Verify Your Email</a>
									</div>
									
								</div>
								 
								
							</div>
						
					</div>
				</div>

				
			</div>
			)
	}
}