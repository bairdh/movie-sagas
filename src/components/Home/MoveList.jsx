import React, { Component } from "react";
import { connect } from "react-redux";

class MovieList extends Component{

    componentDidMount(){
        this.props.dispatch({ type:'FETCH_MOVIELIST'});
    }

    render(){
        console.log(this.props.reduxState.movies);
        
        return(
            <div>
                <h2>Movie List</h2>
            </div>
        ) //return
    } //render
} //class

const ReduxToProp = reduxState => ({reduxState});

export default connect(ReduxToProp)(MovieList);