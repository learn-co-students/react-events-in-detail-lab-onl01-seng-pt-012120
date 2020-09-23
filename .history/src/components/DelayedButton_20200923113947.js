// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

    handelClick = (e) => {
      this.props.onDelayedClick(e)
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