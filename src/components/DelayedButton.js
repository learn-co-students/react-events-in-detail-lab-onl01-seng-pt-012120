import React, {Component} from 'react';

export default class DelayedButton extends Component {
    
    render() {
        let timer = (e) => {
            e.persist()
            setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
        }
    
        return (<button onClick={timer}></button>)
    }
}