// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         coordinates: ['x','y']
    //     }
    // }

    handelClick = (e) => {
        // this.setState({
        //     coordinates: [e.clientX, e.clientY]
        // })
        let callback =() => this.props.onReceiveCoordinates
        callback()
    }

    render(){
        return(
            <button
            onClick={this.handelClick}>
                Mouse coordinates
            </button>
        )
    }
}