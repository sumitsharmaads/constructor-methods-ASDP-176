import React, { Component } from 'react';
import './App.css';
import Child from './Child';
import Lifecycle from './Lifecycle';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {color:""} 
  }

  redColor = () =>{
    console.log('This is Red Color');
    this.setState({color:"red"});
  }

  greenColor = () =>{
    console.log('This is Red Color');
    this.setState({color:"green"});
  }

  blueColor = () =>{
    console.log('This is Red Color');
    this.setState({color:"blue"});
  }

  render() {
    return (
      <div className="App">
        <button className="Change" onClick={this.redColor}>Red</button>
        <button className="Change" onClick={this.greenColor}>Green</button>
        <button className="Change" onClick={this.blueColor}>Blue</button><br/>
        <h1 className="Heading" style={{backgroundColor: this.state.color}}>This is my App.js</h1>
        <Child  changeColor={this.state.color} />
        <hr/>
        <Lifecycle />
      </div>
    );
  }
}

export default App;
