import React, { Component } from 'react';
import { IoCodeSlash } from "react-icons/io5";
import './App.css';
import ShoutInput from './ShoutInput/ShoutInput';
import ShoutOutput from './ShoutOutput/ShoutOutput';

class App extends Component {

  state = {
   currentshout: ""
  }


updateShoutHandler = (event) => {
  this.setState({currentshout: event.target.value})
  };


  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={<IoCodeSlash />} className="App-logo" alt="logo" />
          <h1>31 days of React</h1>
          <h2>Day Two / Let's Shout</h2>
          <h2>#Codegust</h2>
        </header>


        <ShoutInput 
        changed={this.updateShoutHandler}
        />
      
        <ShoutOutput
        shout={(this.state.currentshout).toUpperCase()}
        />

      </div>
    );
  }
}

export default App;