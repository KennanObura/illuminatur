import React, {Component} from 'react';
import {
  Route,
  NavLink,
  IndexRoute,
  HashRouter
} from "react-router-dom";

export default class StepTwo extends Component {
	render(){
		return(
				<div>
				<div id="pricing-plans-background-image">
				<div className="container">
						<div className="registration-steps-page-container">
							
	  					 <form className="registration-steps-form">
							 
							 <div className="registration-social-login-container">

    	  						 <div className="form-group">
    								 <label className="col-form-label">Full Name</label>
    	  							 <input type="text" className="form-control" id="full-name" placeholder="John Doe" />
    	  						 </div>
    	  						 <div className="form-group">
    								 <label className="col-form-label">Email</label>
    	  							 <input type="text" className="form-control" id="email" placeholder="jondoe@gmail.com" />
    	  						 </div>
    	  						 <div className="form-group">
    								 <div className="row">
    									<div className="col">
    	  								 <label className="col-form-label">Password</label>
    	  	  							 <input type="password" className="form-control" id="password" placeholder="&middot;&middot;&middot;&middot;&middot;&middot;" />
    									</div>
    									<div className="col">
    	  								 <label  className="col-form-label">&nbsp;</label>
    	  	  							 <input type="password" className="form-control" id="confirm-password" placeholder="Confirm Password" />
    									</div>
    								 </div>
    	  						 </div>
								 
								 <div className="registration-social-login-or">or</div>
								 
							 </div>
							 
							 <div className="registration-social-login-options">
							 	<h6>Sign up with one of your social accounts</h6>
								<div className="social-icon-login facebook-color"><i className="fab fa-facebook-f"></i> Facebook</div>
								<div className="social-icon-login twitter-color"><i className="fab fa-twitter"></i> Twitter</div>
								<div className="social-icon-login google-color"><i className="fab fa-google-plus-g"></i> Google</div>
							 </div>
							 
							 <div className="clearfix"></div>
	  						 <div className="form-group last-form-group-continue">
	  							 <a href="signup-step3.html" className="btn btn-green-pro">Continue</a>
								 <span className="checkbox-remember-pro"><input type="checkbox" id="checkbox-terms" /><label  className="col-form-label">By clicking "Continue", you agree to our <a href="#!">Terms of Use</a> and 
<a href="#!">Privacy Policy</a> including the use of cookies.</label></span>
								 <div className="clearfix"></div>
	  						 </div>
	  					 </form>
							
						</div>
					
				</div>
			</div>
			
				

				</div>
				
			)
	}
}