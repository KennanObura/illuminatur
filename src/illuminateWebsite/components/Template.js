import React, {Component} from 'react';
import ExternalToolbar from './ExternalToolbar';
import SignupHome from './SignupHome';
import SignupAccount  from './SignupAccount';
import SignupBilling from './SignupBilling';
import SignupInviteFriends from './SignupInviteFriends';
import SignupWelcome from './SignupWelcome';
import DahsboardTemplate from '../../illuminateDashboard/DashboardTemplate' ;
import Home from './Home';

import {
  Route,
  NavLink,
  HashRouter,
  IndexRoute,
  withRouter
} from "react-router-dom";


class Template extends Component {
	constructor(props){
		super(props)
		this.state = {	
		}
	}
	render(){
		return(
			<HashRouter>
			<div>
			<ExternalToolbar></ExternalToolbar>
			<div className="page-container"> 
					<Route exact path="/" component={Home}/>
					<Route  path="/user/plan" component={SignupHome}/>
					<Route  path="/user/signup" component={SignupAccount}/>
					<Route  path="/user/billing" component={SignupBilling}/>
					<Route  path="/user/invitefriends" component={SignupInviteFriends}/>
					<Route  path="/user/welcome" component={SignupWelcome}/>

					<Route  exact path="/browse/" component={DahsboardTemplate}/>

			</div>
			</div>
			</HashRouter>
			)
	}
}

export default Template