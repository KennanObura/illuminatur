import React, {Component} from 'react';
import PricingToolbar from './PricingToolbar';
import StepTwo from './signup/StepTwo';

import {
  Route,
  NavLink,
  HashRouter,
  IndexRoute
} from "react-router-dom";


export default class SignupHome extends Component {
	render(){
		return(
			<div> 
				<PricingToolbar></PricingToolbar>
				<Route exact path="/user/signup" component={StepTwo}/>
			</div>
			)
	}
}