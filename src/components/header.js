import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Button from 'material-ui/Button';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';	
import IconButton from 'material-ui/IconButton';

class SearchBar extends Component {


  render() {
    return (
    	<div>

	    <div className="mtb-20">
		  <AppBar position="static">
	        <Toolbar className="bg-color-primary">
			  <img className="mr-10" src="img/superball.png"/>
	          <Typography variant="title" color="inherit" className="flex-1">
			    Pokemon Gallary
	          </Typography>
	          <Link to="/home" className="no-underline color-white">
	          	<Button color="inherit">Home</Button>
	          </Link>
	          <Link to="/backpack" className="no-underline color-white">
	          	<Button color="inherit">Backpack</Button>
	          </Link>
	          <Link to="/about" className="no-underline color-white">
	          	<Button color="inherit">About</Button>
	          </Link>
	        </Toolbar>
	      </AppBar>
        </div>  

        </div> 
    );
}



}
export default SearchBar;
