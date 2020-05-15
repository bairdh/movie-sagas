import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";

class MovieList extends Component{

    componentDidMount(){
        this.props.dispatch({ type:'FETCH_MOVIELIST'});
    }

    render(){
        // console.log(this.props.reduxState.movies);
        
        return(
            <div>
                <h2>Movie List</h2>
                {this.props.reduxState.movies.map(movie => <MovieItem key={movie.id} movie={movie} />)}
            </div>
        ) //return
    } //render
} //class

const ReduxToProp = reduxState => ({reduxState});

export default connect(ReduxToProp)(MovieList);