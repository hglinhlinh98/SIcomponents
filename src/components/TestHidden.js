import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
  
export default class CustomizedInputBase extends React.Component {
    constructor(props){
        super(props);
        this.onChangeInputBase = this.onChangeInputBase.bind(this);

    }
    onChangeInputBase(event){
        console.log("input: ", event.target.value);
    }
   render(){
        return (
            <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            }}>
            <div style={{ width: '100%', float: 'left' }}>
                <h3>How to use Hidden Component in ReactJS?</h3> <br />
            </div>
            <Hidden mdDown>
                <Paper >Small Down</Paper>
            </Hidden>
            <Hidden smDown>
                <Paper >Medium Down</Paper>
            </Hidden>
            <Hidden xsDown>
                <Paper>Large Down</Paper>
            </Hidden>
            </div>
        );
   }
}
  