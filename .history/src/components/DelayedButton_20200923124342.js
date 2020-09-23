// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

    handelClick = (event) => {
        setTimeout(()=>{return this.props.onDelayedClick(event)}, this.props.delay)
        
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



const timer = setTimeout(() => {console.log('This will run after 1 second!')}, 1000);
