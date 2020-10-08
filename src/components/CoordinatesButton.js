import React, { Component } from 'react';

class CoordinatesButton extends Component {
    render() {
        return (
            <div>
               <button 
                onClick={(e) => this.props.onReceiveCoordinates([e.clientX, e.clientY])}
               >
                Click Me!
               </button> 
            </div>
        );
    }
}

export default CoordinatesButton;
