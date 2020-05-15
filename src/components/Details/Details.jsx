import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, Typography } from "@material-ui/core";

class Details extends Component{

    

    componentDidMount(){
        
    }

    render(){
        return(
            <div>
                Hello!
            </div>

            // <Dialog >
            //     <DialogTitle>Subscribe</DialogTitle>
            //     <DialogContent>
            //         <DialogContentText>
            //             <Typography>Hello From Details</Typography>
            //         </DialogContentText>
            //     </DialogContent>
            //     <DialogActions>
            //         <Button color="primary">Cancel</Button>
            //         <Button color="primary">Subscribe</Button>
            //     </DialogActions>
            // </Dialog>
        ) //return
    } //render
} //class

export default Details