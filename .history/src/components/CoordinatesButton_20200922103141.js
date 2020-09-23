// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{
    constructor(){
        super()
        this.state = {
            coordinates: ['x','y']
        }
    }

    handelClick = (e) => {

    }

    render(){
        return(
            <button
            onClick={this.handelClick}>

            </button>
        )
    }
}