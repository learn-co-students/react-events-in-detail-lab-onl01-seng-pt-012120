// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

    handelClick = (event) => {
        console.log(this.props.onDelayedClick(event))
      this.props.onDelayedClick([event])
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