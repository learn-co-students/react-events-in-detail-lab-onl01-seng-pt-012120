// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

    handelClick = (e) => {
        let callback = () => this.props.onReceiveCoordinates
        return (this.props.onReceiveCoordinates)
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