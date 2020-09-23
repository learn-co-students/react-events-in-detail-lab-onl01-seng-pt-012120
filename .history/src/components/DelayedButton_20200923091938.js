// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

    
    render(){
        let callback = () => this.props.onReceiveCoordinates
        
        return(
            <button
            onclick={console.log(this.props.onReceiveCoordinates)}>
                Delay
            </button>
        )
    }
}