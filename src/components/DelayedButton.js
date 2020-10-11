import React, { Component } from "react";

class DelayedButton extends Component{
    onClick = event => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event) }, this.props.delay)
    }

    render() {
        return <button onClick={this.onClick}>Delayed</button>
    }
} 

export default DelayedButton
