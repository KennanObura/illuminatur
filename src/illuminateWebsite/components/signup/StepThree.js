import React, {Component} from 'react';
import {
  Route,
  NavLink,
  IndexRoute,
  HashRouter
} from "react-router-dom";

export default class StepThree extends Component {
	render(){
		return(
				<div>
					<div id="pricing-plans-background-image">
				<div className="container">
						<div className="registration-steps-page-container">
							
		 					<div className="registration-billing-form">
				 				<div className="row">
				 					<div className="col-md">
						
				 						<div className="jumbotron jumbotron-fluid jumbotron-pro jumbotron-selected">
				 						  <div className="container">
											  <i className="fas fa-check-circle"></i>
				 							  <img src="images/demo/billing-credit-card.png" alt="Credit Card" />
				 							  <h6 className="light-weight-heading">Pay with Credit Card</h6>
				 						  </div>
				 						</div>
						
				 					</div>
				 					<div className="col-md">
						
				 						<div className="jumbotron jumbotron-fluid jumbotron-pro">
				 						  <div className="container">
				 							  <img src="images/demo/billing-paypal.png" alt="Credit Card" />
				 							  <h6 className="light-weight-heading">Pay with PayPal</h6>
				 						  </div>
				 						</div>
						
				 					</div>
				 				</div>
								
								
								<div className="row">
  			  					 	<div className="billing-form-pro">
	    			  					 <form>
	    			  						 <div className="form-group">
												 <label  className="col-form-label">Cardholder Name:</label>
	    			  							 <input type="text" className="form-control" id="cardholder" />
	    			  						 </div>
											 
	    			  						 <div className="form-group">
												 <label className="col-form-label">Card Number:</label>
	    			  							 <input type="text" className="form-control" id="cardnumber" />
	    			  						 </div>
											 
											 	<div className="row adjust-margin-top adjust-margin-bottom">
											 		<div className="col-sm">
  		  	    			  						 <div className="form-group">
  		  												 <label className="col-form-label">Expiration Date:</label>
  		  	    			  							 <input type="text" className="form-control" id="expire" placeholder="MM/YY" />
  		  	    			  						 </div>
											 		</div>
											 		<div className="col-sm">
  		  	    			  						 <div className="form-group">
  		  												 <label className="col-form-label">CVV:</label>
  		  	    			  							 <input type="text" className="form-control" id="ccv" placeholder="XXX" />
  		  	    			  						 </div>
											 		</div>
													
											 		<div className="col-sm">
  		  	    			  						 <div className="form-group">
  		  												 <label  className="col-form-label">Zip:</label>
  		  	    			  							 <input type="text" className="form-control" id="zip" placeholder="00000" />
  		  	    			  						 </div>
											 		</div>
													
											 	</div>
											 
	    			  						 <div className="form-group">
												 
												 <div className="billing-plan-container">
												 	<h5>Your Plan: <a href="signup-step1.html">Change plan</a></h5>
													<h3>Premium: <span className="total">$14</span><span className="duration">/month</span></h3>
												 </div>
												 
	    			  							 <a href="signup-step4.html" className="btn btn-green-pro">Sign Up</a>
		  										 <div className="clearfix"></div>
	    			  						 </div>
	    			  					 </form>
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