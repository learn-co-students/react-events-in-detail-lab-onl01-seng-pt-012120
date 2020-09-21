import React, { Component } from 'react';

export default class CoordinateButton extends Component {

  clickHandler = e => {
    return this.props.onReceiveCoordinates([ e.clientX, e.clientY ])
  }

  render() {
    return(
      <div>
        <button onClick={this.clickHandler} >Coords Button</button>
      </div>
    )
  }
}