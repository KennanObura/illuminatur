import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  IndexRoute
} from "react-router-dom";
export default class Register extends Component {
	render(){
		return(
			<HashRouter>
			<div>
			<div className="login-page">
				    <div className="login-main">  	
				    	 <div className="login-head">
								<h1>Login</h1>
							</div>
							<div className="login-block">
								<form>
									<input type="text" name="email" placeholder="Email" required="" />
									<input type="password" name="password" className="lock" placeholder="Password" />
									<div className="forgot-top-grids">
										<div className="forgot-grid">
											<ul>
												<li>
													<input type="checkbox" id="brand1" value="" />
													<label for="brand1"><span></span>Remember me</label>
												</li>
											</ul>
										</div>
										<div className="forgot">
											<a href="#">Forgot password?</a>
										</div>
										<div className="clearfix"> </div>
									</div>
									<input type="submit" name="Sign In" value="Login" />	
									<h3>Not a member?<NavLink to="/"> Sign up now</NavLink></h3>				
									<h2>or login with</h2>
									<div className="login-icons">
										<ul>
											<li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
											<li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
											<li><a href="#" className="google"><i className="fa fa-google-plus"></i></a></li>						
										</ul>
									</div>
								</form>
								<h5><NavLink to="/"> Go Back to Home</NavLink></h5>
							</div>
				      </div>
				</div>

				<div className="copyrights">
					 <p>© 2016 Shoppy. All Rights Reserved | Design by  <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
				</div>	
								
			</div>	
			</HashRouter>
			)
	}
}