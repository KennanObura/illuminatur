import React, {Component} from 'react';
import Landing from './Landing';
import LandingBody from './LandingBody';

export default class Home extends Component {
	render(){
		return(
			<div>
            <Landing></Landing>
            <LandingBody></LandingBody>
  
			</div>
			)
	}
}