import React, { Component } from 'react';

export default class DelayedButton extends Component {
    
    handleDelay = e => {
        e.persist()
        return window.setTimeout(this.props.onDelayedClick, this.props.delay, e)
      }
    
      render() {
        return(
          <div>
            <button onClick={this.handleDelay} >Delayed Click Button</button>
          </div>
        )
      }

}