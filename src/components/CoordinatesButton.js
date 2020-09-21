import React from 'react';

export default class CoordinatesButton extends React.Component {
    handleClick = (event) => {
        const xy = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(xy)
    }
    
    render() {
        return (
            <button onClick={this.handleClick} />
        )
    }
}