import React, {Component} from 'react';
import Connections from '../../../data/connections.js';
import {
  Route,
  NavLink,
  IndexRoute,
  HashRouter
} from "react-router-dom";

export default class StepFour extends Component {
	constructor(props){
		super(props)
		this.state = {
            input: '',
			connections: [
			 {
            "id": 1,
            "name": "Michael Mattas",
            "image": "images/demo/user-1.jpg",
            "social_network": "Facebook"
        },
        {
            "id": 2,
            "name": "Frank Mole",
            "image": "images/demo/user-2.jpg",
            "social_network": "Facebook"
        },
        {
            "id": 3,
            "name": "Kennan Obura",
            "image": "images/demo/user-3.jpg",
            "social_network": "Facebook"
        },
        {
            "id": 4,
            "name": "Michael Mattas",
            "image": "images/demo/user-4.jpg",
            "social_network": "Facebook"
        },
        {
            "id": 5,
            "name": "Michael Mattas",
            "image": "images/demo/user-5.jpg",
            "social_network": "Facebook"
        },
        {
            "id": 6,
            "name": "Michael Mattas",
            "image": "images/demo/user-6.jpg",
            "social_network": "Facebook"
        },
        {
            "id": 7,
            "name": "Michael Mattas",
            "image": "images/demo/user-7.jpg",
            "social_network": "Twitter"
        }
        ],
        genreCollection : [
        {
        	"id": 1,
        	"name" : "Drama",
        	"image" : "images/genres/drama.png"

        },
        {
        	"id": 2,
        	"name" : "Comedy",
        	"image" : "images/genres/comedy.png"

        },
        {
        	"id": 3,
        	"name" : "Action",
        	"image" : "images/genres/action.png"

        },
        {
        	"id": 4,
        	"name" : "Romance",
        	"image" : "images/genres/romance.png"

        },
        {
        	"id": 5,
        	"name" : "Horror",
        	"image" : "images/genres/horror.png"

        },
        {
        	"id": 6,
        	"name" : "Fantasy",
        	"image" : "images/genres/fantasy.png"

        },
        {
        	"id": 7,
        	"name" : "Sci-Fi",
        	"image" : "images/genres/sci-fi.png"

        },
        {
        	"id": 8,
        	"name" : "Animation",
        	"image" : "images/genres/animation.png"

        },
        {
        	"id": 9,
        	"name" : "Documentary",
        	"image" : "images/genres/documentary.png"

        }

       

        ]
		}
		this.eachConnections = this.eachConnections.bind(this);
		this.eachGenreCollection = this.eachGenreCollection.bind(this);
		this.getSelectedGenre = this.getSelectedGenre.bind(this);
        this.onConnectionFilterHandler = this.onConnectionFilterHandler.bind(this);
        this.onFilter = this.onFilter.bind(this);
	}

	eachConnections(Connections, i){
		return(

				<li  key={i} id={Connections.id}>
					<i className="fas fa-check-circle"></i>
					<img src={Connections.image} alt="Friends" />
					<h6>{Connections.name}</h6>
					<div className="friends-social-media">{Connections.social_network}</div>
				</li>
			)
	}

	getSelectedGenre(e){
		return(
alert('ok')
		)
	}

	eachGenreCollection(Genre, i) {
		return(
			<li key={i} id={Genre.id}>
				<i className="fas fa-check-circle"></i>
				<img src={Genre.image} alt={Genre.name} />
				<h6>{Genre.name}</h6>
			</li>

		)
	}
    onConnectionFilterHandler(e){
         this.setState({
          input: e.target.value
          
        })
        this.onFilter(this.state.connections, "name", this.state.input)
    }

    onFilter(array, prop, value){
        var filtered = [];
      for (var i = 0; i < array.length; i++) {
        if (array[i][prop] === value) {
            filtered = array[i];
            return filtered;
        }
    }
    console.log(filtered)
    return null;    

    }





	


	render(){
        const list = this.state.connections.map(this.eachConnections);
        


		return(
				<div>
				<div id="pricing-plans-background-image">
				<div className="container">
						<div className="registration-steps-page-container">
							
							
							<div className="registration-step-final-padding">
								<h2 className="registration-final-heading">Welcome <span>{Connections.connections}!</span> Just a few more steps to complete your account</h2>
								
								<div className="registration-invite-friends">
																		
									<form className="registration-invite-friends-form">
										<div className="form-group">
											<label className="col-form-label">Invite your friends</label>
											<input value={this.state.input} onChange={this.onConnectionFilterHandler.bind(this)} type="text" className="form-control" id="full-name" placeholder="Enter email separated by commas" />
										</div>
										
										<div className="form-group-invite-friends">
											<ul className="registration-invite-friends-list">
											
                                                {list}
											</ul>
											<div className="clearfix"></div>
										</div>
										</form>
								 
								</div>
								
								<div className="registration-genres-step">
									<h5>Pick your preferred Genres:</h5>
									<ul className="registration-genres-choice">
										{this.state.genreCollection.map(this.eachGenreCollection)}
									</ul>
									<div className="clearfix"></div>
								</div>
								
								<div className="registration-step-final-footer">
									<a href="signup-welcome.html" className="btn btn-green-pro">Finish</a>
									<a href="signup-welcome.html" className="btn">Skip This Step</a>
								</div>
								
							</div>
	  					 
							
						</div>
					
				</div>
			</div>
					

				</div>
				
			)
	}
}