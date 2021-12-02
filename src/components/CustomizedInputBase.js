import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

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
      
       
           <TextField
          id="standard-read-only-input"
         
          defaultValue="Hello World"
          InputProps={{
            startAdornment: (
                <InputAdornment position = "start">
                    <SearchIcon />
                </InputAdornment>
            )
          }}
          variant="outlined"
        />
         
         
      );

   } 
  
}