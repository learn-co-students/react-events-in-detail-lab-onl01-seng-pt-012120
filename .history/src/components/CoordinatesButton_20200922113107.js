// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

    
    
    render(){
        let callback =() => this.props.onReceiveCoordinates
        return(
            <button
            onClick={callback}>
                Mouse coordinates
            </button>
        )
    }
}