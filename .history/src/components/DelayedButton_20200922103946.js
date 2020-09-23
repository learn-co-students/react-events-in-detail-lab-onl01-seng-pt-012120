// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{
    constructor (props){
        super()
    }

    handelClick = (e) => {
        
    }

    render(){
        return(
            <button
            onclick={this.handelClick}>

            </button>
        )
    }
}