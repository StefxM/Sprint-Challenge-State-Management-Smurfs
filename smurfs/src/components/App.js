import React, { Component } from "react";
import "./App.css";
import SmurfCard from './smurfCard';
import SmurfForm from './smurfForm';


class App extends Component {
  render() {
    return (
      <div className="App">
     <SmurfCard/>
     <SmurfForm/>
      </div>
    );
  }
}

export default App;
