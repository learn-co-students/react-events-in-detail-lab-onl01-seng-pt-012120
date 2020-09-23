// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

    
    callback =() => this.props.onReceiveCoordinates
    
    render(){
        return(
            <button
            onClick={callback}>
                Mouse coordinates
            </button>
        )
    }
}