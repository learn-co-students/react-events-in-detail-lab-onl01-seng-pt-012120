// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

   
    handelClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
       
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