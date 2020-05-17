import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";
import { Box } from "@material-ui/core";
import { Transition, CSSTransition } from 'react-transition-group';

class MovieList extends Component{

    state = {
        appear: true
    }

    componentDidMount(){
        this.props.dispatch({ type:'FETCH_MOVIELIST'});
    }

    

    render(){
        // console.log(this.props.reduxState.movies);
        const {appear, property} = this.state;
        return(
            <Box m={4}>
                <h2>Movie List</h2>
                {this.props.reduxState.movies.map(movie => 
                    <CSSTransition in={this.appear} timeout={1000} classNames='slide'>
                        <MovieItem key={movie.id} movie={movie} dispatch={this.props.dispatch}/>
                    </CSSTransition>)}
            </Box>
        ) //return
    } //render
} //class

const ReduxToProp = reduxState => ({reduxState});

export default connect(ReduxToProp)(MovieList);