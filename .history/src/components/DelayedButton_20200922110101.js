// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

    handelClick = (e) => {
        
    }

    render(){
        return(
            <button
            onclick={this.handelClick}>
                Delay
            </button>
        )
    }
}