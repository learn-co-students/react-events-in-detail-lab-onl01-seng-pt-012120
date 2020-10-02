// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
    
    handleButton = (event) => {
        const coordinates = [
            event.clientX,
            event.clientY
        ]
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return (
            <button onClick={this.handleButton}>
                Coordinates
            </button>
        )
    }
       
        







}