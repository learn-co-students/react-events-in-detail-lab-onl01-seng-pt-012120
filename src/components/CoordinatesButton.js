import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
    where = (event) => {
        let local = [event.clientX, event.clientY];
        return this.props.onReceiveCoordinates(local)
    }
    render() {
        return(<button onClick={this.where}></button>)
    }
}