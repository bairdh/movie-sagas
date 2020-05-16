import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Typography, TextField } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import { HashRouter, Link } from "react-router-dom";


class Details extends Component{
    state = {
        edit: false
    }

    componentDidMount(){
        this.props.dispatch({ type: 'GET_MOVIE_INFO', payload: this.props.match.params.id })        
    }

    handleClick = () =>{
        this.setState({
            edit: !this.state.edit
        })
    }

    render(){
        
        let description;

        if(this.state.edit){
            description = (<Box><TextField
                mb={4}
                id="outlined-basic" 
                label="Outlined" 
                variant="outlined"
                multiline={true}
                fullWidth={true}
                defaultValue={this.props.reduxState.oneMovie.description} />
                <br/>
                <Button onClick={this.handleClick}>Save Changes</Button></Box>)
        }
        else{
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
                        <Typography variant="h2">{this.props.reduxState.oneMovie.title}</Typography>
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