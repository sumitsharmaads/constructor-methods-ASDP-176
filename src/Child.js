import React, { Component } from 'react';
import './App.css';


class Child extends Component {
  render() {
    return (
      <div className="Child">
        <h1 style={{color: this.props.changeColor}}>This is my component</h1>
      </div>
    );
  }
}

export default Child;
