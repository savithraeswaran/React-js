import React, { Component } from 'react'

export class Lifecycle extends Component {
    componentDidMount(){
console.log("componentdidmount=====>>>>>")
alert("Welcome students!!")
    }
    componentDidUpdate(){
console.log("componentdidupdate====>>>")
    }
    componentWillUnmount(){
console.log("componentwillunamount====>>>>>>>>")
    }
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    incrementCounter = () =>{
        this.setState({count:this.state.count+1})
    }
    decrementCounter = () =>{
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.componentDidMount}>Increment</button>
        <button onClick={this.componentWillUnmount}>decrement</button>
      </div>
    )
  }
}


