// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

    handelClick = () => {
        // let callback = () => this.props.onReceiveCoordinates
        console.log(this)
        // return ([callback(e.clientX), callback(e.clientY)])
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