// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

    handelClick = (e) => {
        let callback = () => e.mouseCoordinates
        return(console.log(callback))
    }

    render(){
        return(
            <button
            onClick={this.handelClick}>
                Mouse coordinates
            </button>
        )
    }
}