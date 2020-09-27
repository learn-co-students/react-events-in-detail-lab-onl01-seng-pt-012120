import React, { Component } from 'react';


export default class DelayedButton extends Component {
  
 delayHandler = (event) => {
    event.persist()
    setTimeout(() => {
        this.props.onDelayedClick(event)
      }, this.props.delay);

 } 


  render() {
    return (
        <div>      
        <button onClick={this.delayHandler}>
        Click
        </button>
        </div>
    )
  }
}
