// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

    
    handelClick = (event) => {
        const callBack = () => this.props.onDelayedClick
        // console.log(this.props.delay)
        setTimeout(()=>callBack(event), this.props.delay)
        
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



