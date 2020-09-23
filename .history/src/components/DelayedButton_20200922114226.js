// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

    
    render(){
        let callback = () => this.props.onReceiveCoordinates
        console.log(call)
        return(
            <button
            onclick={callback}>
                Delay
            </button>
        )
    }
}