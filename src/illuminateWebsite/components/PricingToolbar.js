import React, {Component} from 'react';


import {
  Route,
  NavLink,
  IndexRoute,
  HashRouter,
  BrowserRouter,
  withRouter
} from "react-router-dom";

 class PricingToolbar extends Component {
	constructor(props){
		super(props)
		this.state = {
			active: false
			
		}
		this.handleLinkActive = this.handleLinkActive.bind(this)
		this.renderActiveLink = this.renderActiveLink.bind(this)
	}

	handleLinkActive(){
		this.setState({
			active: !this.handleLinkActive.state
		})
	}

	renderActiveLink(e){
		if(this.props.location.pathname === e){
			return true
		}else{
			return false
		}
	}

	render(){
		let 
			className= 'current-menu-item ';
			let non = 'nothing';
	
		


		return(
			<HashRouter>
			<div>	

					<div className="container">
							<div className="centered-headings-pro pricing-plans-headings">
								<h6>For one low monthly price</h6>
								<h1>Instantly watch TV shows &amp; Movies</h1>
							</div>
					</div>

					<div className="container">
						<ul id="registration-steps-pro" >
							<li  className={(this.renderActiveLink(this.props.location.pathname)) ? "current-menu-item " : !this.renderActiveLink(this.props.location.pathname)}>
								<NavLink to="/user/plan/" >
									<div className="registration-step-circle-icon">01</div>
									<div className="registration-step-number">Step 1</div>
									<h5 className="registration-step-title">Choose your plan</h5>
								</NavLink>
							</li>
							<li  className={(this.renderActiveLink(this.props.location.pathname)) ? "current-menu-item " : !this.renderActiveLink(this.props.location.pathname)}>
								<NavLink to="/user/signup">
									<div className="registration-step-circle-icon">02</div>
									<div className="registration-step-number">Step 2</div>
									<h5 className="registration-step-title">Create your account</h5>
								</NavLink>
							</li>
							<li  className={(this.renderActiveLink(this.props.location.pathname)) ? "current-menu-item " : ""}>
								<NavLink to="/user/billing">
									<div className="registration-step-circle-icon">03</div>
									<div className="registration-step-number">Step 3</div>
									<h5 className="registration-step-title">Billing information</h5>
								</NavLink>
							</li>
							<li>
								<NavLink to="/user/invitefriends">
									<div className="registration-step-circle-icon">04</div>
									<div className="registration-step-number">Step 4</div>
									<h5 className="registration-step-title">Welcome to Illuminatur!</h5>
								</NavLink>
							</li>
						</ul>
						<div className="clearfix"></div>
					</div>

</div>
</HashRouter>
				
			)
	}
}
export default withRouter(PricingToolbar)