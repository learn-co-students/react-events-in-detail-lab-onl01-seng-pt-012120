// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

    
    render(){
        let callback = () => props.onReceiveCoordinates
        console.log(call)
        return(
            <button
            onclick={callback}>
                Delay
            </button>
        )
    }
}