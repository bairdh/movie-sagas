import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Typography, TextField, Input } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import { HashRouter, Link } from "react-router-dom";


class Details extends Component{
    state = {
        edit: false,
        title: this.props.reduxState.oneMovie.title,
        description: this.props.reduxState.oneMovie.description
    }

    componentDidMount(){
        this.props.dispatch({ type: 'GET_MOVIE_INFO', payload: this.props.match.params.id })        
    }

    handleChange = (event, prop) =>{
        this.setState({
            [prop]: event.target.value
        })
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

    render(){
        console.log(`state:`, this.state);
        console.log(`redux:`, this.props.reduxState.oneMovie.title);

        let title;
        let description;

        if(this.state.edit){
            title =(<TextField 
                onChange={event => this.handleChange(event, 'title')}
                defaultValue={this.props.reduxState.oneMovie.title}
                variant="filled" 
                fullWidth={true}
                margin="dense"/>)

            description = (<Box><TextField 
                onChange={event => this.handleChange(event, 'description')}
                mb={4}
                id="outlined-basic" 
                label="Description" 
                variant="outlined"
                multiline={true}
                fullWidth={true}
                defaultValue={this.props.reduxState.oneMovie.description} />
                <br/>
                <Button onClick={this.handleSubmit}>Save Changes</Button>
                <Button onClick={this.handleCancel}>Cancel</Button>
                </Box>)
        }
        else{
            title = (<Typography onClick={this.handleClick} variant="h2">{this.props.reduxState.oneMovie.title}</Typography>)
            description = (<Typography onClick={this.handleClick}>
                {this.props.reduxState.oneMovie.description}
            </Typography>);
        }        

        return(
            <div>
                <HashRouter>
                    <Link to={`/`}><Button>Back to list</Button></Link>
                </HashRouter>
                    <Box className='detailsBox' border={1}>
                        <Box m={2}>
                            {title}
                        </Box>
                        <Typography>
                            {this.props.reduxState.oneMovie.genres.map((item, index) => 
                            {if(index < this.props.reduxState.oneMovie.genres.length - 1){
                                return <span key={index}>{item} <span className="divider">|</span> </span>
                            }
                            else{                    
                                return <span key={index}>{item} </span>
                            }
                        }
                        )}
                            </Typography>   
                        <Box my={3}>
                            <img src={this.props.reduxState.oneMovie.poster}/>
                        </Box>
                        <Box mx={8} my={4}>
                            {description}
                        </Box>
                    </Box>
            </div>
        ) //return
    } //render
} //class

const reduxToProps = reduxState => ({reduxState});

export default connect(reduxToProps)(Details);