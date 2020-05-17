import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";
import { Box, TextField, Button } from "@material-ui/core";

class MovieList extends Component{

    state = {
        search: ''
    }

    componentDidMount(){
        this.props.dispatch({ type:'FETCH_MOVIELIST'});
    }

    handleChange = event => {
        this.setState({
            search: event.target.value
        })        
    }

    handleClick = () =>{
        this.props.dispatch({type: 'SEARCH_MOVIES', payload: this.state.search});
    }

    render(){
        // console.log(this.props.reduxState.movies);
        
        return(
            <Box m={4}>
                <h2>Movie List</h2>
                <Box>
                    <TextField 
                        onChange={event => this.handleChange(event)}
                        className="genreInput"
                        color="secondary"
                        label='Search'/>
                        <Button onClick={this.handleClick} size='small' color="secondary" variant="outlined">Submit</Button>
                </Box>
                <br/>    
                {this.props.reduxState.movies.map(movie => <MovieItem key={movie.id} movie={movie} dispatch={this.props.dispatch}/>)}
            </Box>
        ) //return
    } //render
} //class

const ReduxToProp = reduxState => ({reduxState});

export default connect(ReduxToProp)(MovieList);