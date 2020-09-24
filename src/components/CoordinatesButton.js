import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        return this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render () {
        return (
            <div>
                <button onClick={this.handleClick}>Coords Button</button>
            </div>
        )
    }
}