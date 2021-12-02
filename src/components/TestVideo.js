import React from 'react';
import ReactPlayer from 'react-player';
import video1 from '../assets/files/test.mp4';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


export default class TestVideo extends React.Component {
  constructor(props){
      super(props);

  }
  render(){
    return (
      <div>
        {/* <h1>test video</h1> */}
        {/* <video autoPlay controls src='https://www.youtube.com/watch?v=qVbeqmYSAag' width="750" height="500" ></video> */}
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=i0p1bmr0EmE' /> */}

      
        <video autoPlay controls width="600" height="450" src={video1}></video>
        {/* <video autoPlay controls width="320" height="240" src="../assets/files/test.mp4"></video> */}
      </div>
      
    )}
}
