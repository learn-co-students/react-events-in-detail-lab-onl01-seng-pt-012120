// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    

    createArray = (event) => {
       let array = [event.clientX, event.clientY]
       this.props.onReceiveCoordinates(array)
    }

    render() {
        return (
            <div>
                <button onClick={this.createArray}>
                </button>
            </div>
        )
    }
}

export default CoordinatesButton;