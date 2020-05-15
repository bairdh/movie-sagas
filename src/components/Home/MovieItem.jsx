import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Button } from "@material-ui/core";

import { HashRouter, Link } from 'react-router-dom';


import Details from '../Details/Details';

class MovieItem extends Component{

    handleClick = () =>{
        // this.props.history.push('details');
        console.log(`In clich handle`);
        
    }
    
    render(){

        console.log(this.props.movie.poster);
        return(
                <Card className='card' >
                    <CardMedia 
                        component="img"
                        src={this.props.movie.poster}
                        title={this.props.movie.title} />
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {this.props.movie.title}
                        </Typography>
                        <HashRouter>
                        <Link to="/details"><Button variant="outlined" component="div" onClick={this.handleClick}>Details</Button></Link>
                        </HashRouter>
                    </CardContent>
                </Card>
        ) // return
    } // render
} //class

export default MovieItem;