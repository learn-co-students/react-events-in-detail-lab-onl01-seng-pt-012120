// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

    handelClick = (event) => {
      this.props.onDelayedClick(event)
    }
    
    render(){
        return(
            <button
            onClick={this.handelClick}
            >
                Delay
            </button>
        )
    }
}