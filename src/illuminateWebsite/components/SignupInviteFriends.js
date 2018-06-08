import React, {Component} from 'react';
import PricingToolbar from './PricingToolbar';
import StepFour from './signup/StepFour';

import {
  Route,
  NavLink,
  HashRouter,
  IndexRoute
} from "react-router-dom";


export default class SignupInviteFriends extends Component {
	render(){
		return(
			<div> 
				<PricingToolbar></PricingToolbar>
				<Route exact path="/user/invitefriends" component={StepFour}/>
			</div>
			)
	}
}