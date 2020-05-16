import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";
import { Box } from "@material-ui/core";

class MovieList extends Component{

    componentDidMount(){
        this.props.dispatch({ type:'FETCH_MOVIELIST'});
    }

    render(){
        // console.log(this.props.reduxState.movies);
        
        return(
            <Box>
                <h2>Movie List</h2>
                {this.props.reduxState.movies.map(movie => <MovieItem key={movie.id} movie={movie} dispatch={this.props.dispatch}/>)}
            </Box>
        ) //return
    } //render
} //class

const ReduxToProp = reduxState => ({reduxState});

export default connect(ReduxToProp)(MovieList);