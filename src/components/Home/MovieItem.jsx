import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from "@material-ui/core";
import GridListTile from '@material-ui/core/GridListTile';

import Details from '../Details/Details';

class MovieItem extends Component{

    handleClick = () =>{
        
    }
    
    render(){
        console.log(this.props.movie.poster);
        return(
                <Card className='card' onClick={this.handleClick}>
                    <CardMedia 
                        component="img"
                        src={this.props.movie.poster}
                        title={this.props.movie.title} />
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {this.props.movie.title}
                        </Typography>
                    </CardContent>
                </Card>
        ) // return
    } // render
} //class

export default MovieItem;