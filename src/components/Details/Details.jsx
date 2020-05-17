import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Typography, TextField, Input, MenuItem } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import { HashRouter, Link } from "react-router-dom";
import swal from "sweetalert";


class Details extends Component{
    state = {
        edit: false,
        title: this.props.reduxState.oneMovie.title,
        description: this.props.reduxState.oneMovie.description,
        genre: 0
    }

    componentDidMount(){
        this.props.dispatch({ type: 'GET_MOVIE_INFO', payload: this.props.match.params.id })        
        this.props.dispatch({ type:'FETCH_GENRES'});

    }

    handleChange = (event, prop) =>{
        this.setState({
            [prop]: event.target.value
        })
    }

    handleGenreChange = event =>{
        this.setState({
            genre: event.target.value
        })
    }

    AddGenre = () =>{
        console.log(this.state.genre);

        let isGenreOnMovie = false;

        this.props.reduxState.oneMovie.genres.map(onMovie =>{
             if(this.state.genre === onMovie.id){
                return isGenreOnMovie = true;
             }
        })
        if(!isGenreOnMovie){
            this.props.dispatch({type:"ADD_GENRE_TO_MOVIE", payload: {movie_id: this.props.reduxState.oneMovie.id ,genre_id:this.state.genre}});
        }
       
    }

    handleClick = () =>{
        this.setState({
            edit: true
        })
    }

    handleSubmit = () =>{  
        this.props.dispatch({type: 'UPDATE_MOVIE', payload: {id: this.props.reduxState.oneMovie.id, title: this.state.title, description: this.state.description}})
        this.setState({
            edit: !this.state.edit
        })
    }
    handleCancel = () =>{
        this.setState({
            edit: !this.state.edit
        })
    }

    removeGenre = (event, prop) => {
        swal({
            title: 'Would you like to delete this genre?',
            text: 'Deleting it will remove it from this movie.',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if(willDelete){
                this.props.dispatch({type: 'DELETE_GENRE_FROM_MOVIE', payload:{movie_id: this.props.reduxState.oneMovie.id, genre_id:prop}})
                swal({
                    title: 'Genre Removed',
                    icon: 'success'
                })
            }
            else{
                return;
            }
        })
    }

    render(){
        console.log(`state:`, this.props.reduxState.oneMovie.genres);
        // console.log(`redux:`, this.props.reduxState.oneMovie.title);

        let title;
        let description;
        let genreBtn;

        if(this.state.edit){
            title =(<TextField 
                onChange={event => this.handleChange(event, 'title')}
                defaultValue={this.props.reduxState.oneMovie.title}
                color="secondary"
                fullWidth={true}
                margin="dense"/>)

            description = (<Box mx={8}><TextField 
                onChange={event => this.handleChange(event, 'description')}
                mb={4}
                id="outlined-basic" 
                label="Description" 
                color="secondary"
                variant="outlined"
                multiline={true}
                fullWidth={true}
                defaultValue={this.props.reduxState.oneMovie.description} />
                <br/>
                <Button onClick={this.handleSubmit}>Save Changes</Button>
                <Button onClick={this.handleCancel}>Cancel</Button>
                </Box>)

            genreBtn = (
            <Box>
                <TextField 
                    onChange={event =>this.handleGenreChange(event)}
                    select
                    variant="outlined"
                    className="genreInput"
                    label="Genre"
                    size="small"
                    color="secondary"
                    placeholder="Genre"
                    width="100px"
                    defaultValue={0}> 
                    {this.props.reduxState.genres.map(genre =>(
                       <MenuItem key={genre.name} value={genre.id}>
                            {genre.name}
                        </MenuItem>)
                          
                    )}    
                </TextField>
                <Button variant="outlined" onClick={this.AddGenre}>Add Genre</Button>
            </Box>)
        }
        else{
            title = (<Typography onClick={this.handleClick} variant="h2">{this.props.reduxState.oneMovie.title}</Typography>)
            description = (
                <Box mx={8} my={4}>
                    <Typography onClick={this.handleClick}>
                        {this.props.reduxState.oneMovie.description}
                    </Typography>
                </Box>);
            genreBtn = (<Box></Box>);
        }        

        return(
            <Box>
                <HashRouter>
                    <Link to={`/`}><Button>Back to list</Button></Link>
                </HashRouter>
                    <Box className='detailsBox' border={1} mb={4} bgcolor="white">
                        <Box m={2}>
                            {title}
                        </Box>
                        <Typography>
                            {this.props.reduxState.oneMovie.genres.map((item, index) => 
                                {if(index < this.props.reduxState.oneMovie.genres.length - 1){
                                    return <span onClick={(event) => this.removeGenre(event, item.id)} key={item.id}>{item.name} <span className="divider">|</span> </span>
                                }else{                    
                                return <span onClick={(event) => this.removeGenre(event, item.id)} key={item.id}>{item.name} </span>
                                }})}
                        </Typography>  
                        <br/> 
                        {genreBtn}
                        <Box mb={3} mt={2}>
                            <img src={this.props.reduxState.oneMovie.poster}/>
                        </Box>
                        {description}
                        <Box mr={1} fontStyle="italic" textAlign="right">
                            <Typography variant="caption" className="captionText">*Click description or title to make edits</Typography>
                        </Box>
                    </Box>
            </Box>
        ) //return
    } //render
} //class

const reduxToProps = reduxState => ({reduxState});

export default connect(reduxToProps)(Details);