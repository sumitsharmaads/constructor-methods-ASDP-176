import React, { Component } from 'react';
import './App.css';


class Lifecycle extends Component {
  constructor(props) {
  	super(props);
  	console.log('Lifecycle:This is constructor');
  	this.state={counter:1, change:false};
  }	

  Inrementer = () => {
  	var TempCounter=this.state.counter;
  	this.setState({counter:TempCounter+1});
  	console.log('this is Incrementer');

  	if(TempCounter>10){
  		this.setState({change:true});
  	}
  }

  componentWillMount(){
  	console.log('Lifecycle This is Will mount');
  }

  componentDidMount(){
  	console.log('Lifecycle:This is Did mount');
  }

  componentWillReceiveProps(props){
  	console.log('Lifecycle:This is Will Receive Props');
  }

  shouldComponentUpdate(){
  	console.log('Lifecycle:This is Should Update');
  	return this.state.change;
  }

  componentWillUpdate(){
  	console.log('Lifecycle:This is Will Update');
  }

  componentDidUpdate(){
  	console.log('Lifecycle:This is Did Update');
  }

  componentWillUnmount(){
  	console.log('Lifecycle:This is Willunmount');
  }

  render() {
  	console.log('I am in render');
    return (
      <div className="Lifecycle">
        <h3>This is life Cycle div</h3>
        <p>This is my counter {this.state.counter}</p><br/>
        <button onClick={this.Inrementer}>Inrementer</button>
      </div>
    );
  }
}

export default Lifecycle;
