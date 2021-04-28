import React, { Component } from 'react'
import './Display.css'

export default class Display extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="display">
                <input value={this.props.value} disabled />
            </div>
            
        )
    }
}
