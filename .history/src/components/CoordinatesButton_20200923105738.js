// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

    constructor (props){
        super(props)
        this.onReceiveCoordinates = this.onReceiveCoordinates.bind(this)
    }
    handelClick = (e) => {
        e.preventDefault()
        const {callback} = this.props
        callback(`${e.clientX}`)
        // let coor = [e.clientX,e.clientY]
        // return(coor.map(c => callback(c)))
        // console.log(this.props.onReceiveCoordinates)
        // return ([callback(e.clientX), callback(e.clientY)])
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