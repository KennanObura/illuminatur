import React, {Component} from 'react';
import DahsboardTemplate from '../../illuminateDashboard/components/dashboardToolbar' ;
import {
  Route,
  NavLink
} from "react-router-dom";



 class ExternalToolbar extends Component {

 	constructor(props){
 		super(props);
 		this.state = {
 			isToggleOn: false,
 			isUser: false
 		}
 		this.handleToggleLogInForm = this.handleToggleLogInForm.bind(this);
 		this.isUserLogIn = this.isUserLogIn.bind(this);
 		this.renderMainToolbar = this.renderMainToolbar.bind(this);
 		this.renderUserToolbar = this.renderUserToolbar.bind(this);

 	}

 	handleToggleLogInForm(){
 		this.setState({
 			isToggleOn : !this.state.isToggleOn
 		})

 	}
 	isUserLogIn(){
 		this.setState({
 			isUser : true
 		})
 		
 	}

 	renderUserToolbar(){
 		return(
 			<div>
 				<DahsboardTemplate/>
 			</div>

 			)
 	}

 	renderMainToolbar(){
 		return(
 				<div>

			<header id="masthead-pro">
					<div className="container">
						<h1><NavLink to="/"><img src="images/logo.png" alt="Logo"></img></NavLink></h1>
						
						<nav id="site-navigation-pro">
							<ul className="sf-menu">
								<li className="normal-item-pro current-menu-item">
									<NavLink to="/">Home</NavLink>
								</li>
								<li className="normal-item-pro">
									<NavLink to="/browse">New Releases</NavLink>
								</li>
								<li className="normal-item-pro">
									<NavLink to="/user/plan">Pricing Plans</NavLink>
								</li>
								<li className="normal-item-pro">
									<a href="faqs.html">FAQs</a>
								</li>
							</ul>
						</nav>
						
						<button onClick={this.handleToggleLogInForm} className="btn btn-header-pro noselect" data-toggle={this.state.isToggleOn ? 'modal' : ''}  data-target="#LoginModal" role="button"> {this.state.isToggleOn ? 'Sign Out' : 'Sign In'}</button>
						
						<div id="mobile-bars-icon-pro" className="noselect"><i className="fas fa-bars"></i></div>
						
						<div className="clearfix"></div>
					</div>
					
					<nav id="mobile-navigation-pro">
					
						<ul id="mobile-menu-pro">
							<li>
								<a href="index-2.html">Home</a>
							</li>
							<li>
								<a href="dashboard-home.html">New Releases</a>
						
							</li>
							<li>
								<a href="signup-step1.html">Pricing Plans</a>
							</li>
							<li>
								<a href="faqs.html">FAQs</a>
							</li>
						</ul>
					
					</nav>
					
				</header>

  		
  					<div className="modal fade" id="LoginModal" role="dialog" aria-labelledby="LoginModal" aria-hidden="true">
			 <button type="button" className="close float-close-pro" data-dismiss="modal" aria-label="Close">
			           <span aria-hidden="true">&times;</span>
			</button>
		  <div className="modal-dialog modal-dialog-centered modal-md" role="document">
		    <div className="modal-content">
				 <div className="modal-header-pro">
					 <h2>Welcome Back</h2>
					 <h6>Sign in to your account to continue using SKRN</h6>
				 </div>
				 <div className="modal-body-pro social-login-modal-body-pro">
			 
					 <div className="registration-social-login-container">
						 <form>
							 <div className="form-group">
								 <input type="text" className="form-control" id="username" placeholder="Username" />
							 </div>
							 <div className="form-group">
								 <input type="password" className="form-control" id="password" placeholder="Password" />
							 </div>
							 <div className="form-group">
								 <button type="button" className="btn btn-green-pro btn-display-block">Sign In</button>
							 </div>
							 <div className="container-fluid">
								 <div className="row no-gutters">
							 		<div className="col checkbox-remember-pro"><input type="checkbox" id="checkbox-remember" /><label  className="col-form-label">Remember me</label></div>
									<div className="col forgot-your-password"><a href="#!">Forgot your password?</a></div>
								</div>
							</div>
				
						 </form>
			 
						 <div className="registration-social-login-or">or</div>
				 
					 </div>
			 
					 <div className="registration-social-login-options">
					 	<h6>Sign in with your social account</h6>
						<div className="social-icon-login facebook-color"><i className="fab fa-facebook-f"></i> Facebook</div>
						<div className="social-icon-login twitter-color"><i className="fab fa-twitter"></i> Twitter</div>
						<div className="social-icon-login google-color"><i className="fab fa-google-plus-g"></i> Google</div>
					 </div>
			 
					 <div className="clearfix"></div>
			 

 		      </div>
		
			 <a className="not-a-member-pro" href="signup-step2.html">Not a member? <span>Join Today!</span></a>
		    </div>
		  </div>
		</div>
			</div>

 			)
 	}


	render(){

		return(
		<div>{this.state.isUser ? this.renderUserToolbar() : this.renderMainToolbar()} </div>
			
			)
	}
}

export default ExternalToolbar