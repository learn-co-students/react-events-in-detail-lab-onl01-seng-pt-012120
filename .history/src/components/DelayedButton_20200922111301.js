// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{

    handelClick = (e) => {
        let callback = () => [this.props.event,this.props.delay]
        console.log(callback)
        return(<div>{callback[0]}, {callback[1]}</div>)
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