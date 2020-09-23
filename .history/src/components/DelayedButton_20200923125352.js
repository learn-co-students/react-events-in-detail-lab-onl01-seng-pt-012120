// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

    handelClick = (event) => {
        return(window.setTimeout(()=>this.props.onDelayedClick(event), this.props.delay))
        
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



