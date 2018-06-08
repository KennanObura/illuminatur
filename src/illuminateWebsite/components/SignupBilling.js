import React, {Component} from 'react';
import PricingToolbar from './PricingToolbar';
import StepThree from './signup/StepThree';

import {
  Route,
  NavLink,
  HashRouter,
  IndexRoute
} from "react-router-dom";


export default class SignupBilling extends Component {
	render(){
		return(
			<div> 
				<PricingToolbar></PricingToolbar>
				<Route exact path="/user/billing" component={StepThree}/>
			</div>
			)
	}
}