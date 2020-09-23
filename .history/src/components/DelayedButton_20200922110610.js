// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

    handelClick = (e) => {
        console.log(this.props)
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