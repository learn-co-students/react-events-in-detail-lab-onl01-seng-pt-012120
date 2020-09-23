// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

    handelClick = () => {
        let callback = () => this.props.onReceiveCoordinates
        let coor = [e.clientX,e.clientY]
        coor.map(c => callback(c))
        console.log(this.props.onReceiveCoordinates)
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