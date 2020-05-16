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
                id="outlined-basic" 
                label="Outlined" 
                variant="outlined"
                multiline={true}
                fullWidth={true}
                defaultValue={this.props.reduxState.oneMovie.description} />
                <Button onClick={this.handleClick}>Submit</Button></Box>)
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
                <Box >
                    <Typography variant="h2">{this.props.reduxState.oneMovie.title}</Typography>
                    <Box my={3}>
                        <img src={this.props.reduxState.oneMovie.poster}/>
                    </Box>
                    <Box mx={{ sx: 8, sm: 8, md: 16, lg: 20 }} my={4}>
                        {description}
                    </Box>
                </Box>
            </div>
        ) //return
    } //render
} //class

const ReduxToProps = reduxState => ({reduxState});
export default connect(ReduxToProps)(Details)