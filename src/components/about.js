import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { withStyles } from 'material-ui/styles';
import Card, { CardTitle, CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Header from './header';


class DashBoard extends Component {


  render() {
    return (
        <div>
        	<Header/>
        	<div className="row">
        	<div className="col-md-12">
	        	<div className="col-md-2">
			    </div>
			    <div className="col-md-8">
		       	<Card className="homeCard">
			        <CardContent>
			          <Typography gutterBottom variant="headline" component="h2">
			           <img className="mb-5" src="img/pokeball.png" alt="compare"/> About Pokemon-Gallery
			          </Typography>
			          <Typography component="p">
			            Top 52 Pokemons with the Features of Comparison, Sort and Backpack
			          </Typography>
			        </CardContent>
			        <CardActions>
			          <Button size="small" color="primary">
			            By Nitin Uprety with <img className="ml-5" height="32" src="img/heart.png" alt="compare"/>
			          </Button>
			          <Button href="https://github.com/nitinuprety" size="small" color="primary">
			            GitHub Page <img className="ml-5" height="32" src="img/pokebag.png" alt="compare"/>
			          </Button>
			        </CardActions>
			    </Card>
			    </div>
	        	<div className="col-md-2">
			    </div>
		      </div>
		      </div>
        </div>   
    );
}



}
export default DashBoard;
