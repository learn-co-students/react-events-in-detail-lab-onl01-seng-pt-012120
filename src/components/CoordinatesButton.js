// Code CoordinatesButton Component Here
import React, { Component } from 'react';

// In the components/CoordinatesButton.js file, create a CoordinatesButton React component.
export default class CoordinatesButton extends Component {

    // Within CoordinatesButton, render a button. On click of the button, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.
    // Pass this event data in as the argument for the onReceiveCoordinates prop.
    // If successful, the current x,y position of your mouse should be logged.
    clickHandler = event => {
        return this.props.onReceiveCoordinates([ event.clientX, event.clientY ])
    }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler} > Coords Button </button>
            </div>

        )

    }

}