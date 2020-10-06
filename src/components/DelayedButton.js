// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

delayClickHandler = event => {
    //  If you having trouble with this feature, remember event pooling in React. By the time the setTimeout fires, the event object will have already been returned to the pool. So how can we fix that?
    event.persist()
    // Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay.
    return window.setTimeout(this.props.onDelayedClick, this.props.delay, event)
}

render () {
    return (
        <div>
            <button onClick={this.delayClickHandler} > Delay </button>
        </div>
    )
}

}