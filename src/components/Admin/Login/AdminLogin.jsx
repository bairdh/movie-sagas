import React, { Component } from "react";
import { Box, Typography, Input, Button } from "@material-ui/core";
import { connect } from "react-redux";


class AdminLogin extends Component{

    state = {
        username: '',
        password: ''
    }

    handleChange = (event, prop) => {
        this.setState({
            [prop]: event.target.value
        })
    }

    handleClick = () => {
        console.log(this.state);
        this.props.dispatch({type:'VERIFICATION', payload:this.state}) 
    }

    render(){        
        return(
            <Box>
                <Typography variant="h1">Admin Login</Typography>
                <Box mx={20} my={5} bgcolor='white'>
                    <Input onChange={event => this.handleChange(event, 'username')} placeholder="Username" />
                    <br/>
                    <Input type="password" onChange={event => this.handleChange(event, 'password')} placeholder="Password" />
                    <br/>
                    <Button onClick={this.handleClick} variant="outlined">Login</Button>
                </Box>
            </Box>
        ) // return
    } // render
} // class

const reduxToProp = reduxState => ({reduxState})

export default connect(reduxToProp)(AdminLogin);