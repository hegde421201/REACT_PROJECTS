import React, { Component } from "react";

export default class ClassComponent extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    let temp = this.state.counter;
    temp++;

    this.setState(
      (state, props) => {
        return {
          counter: temp,
        };
      },
      () => {
        console.log("Rendered");
      }
    );
  };

  componentDidMount() {
    console.log("CDM");
  }

  render() {
    return (
      <div className="ClassComponent">
        <h1>I am a class component. What about you</h1>
        <h1>The counter increments {this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

//In the class component the return statement is inside a render() method. render() is a lifecycle method
//
/**
  () => {
        console.log("Rendered");
      }

      This is the callback function. state object is react-defined. we cannot have customised state objects as 
      in functional components
 */
