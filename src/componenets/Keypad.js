import React, { Component } from 'react'

export default class Keypad extends Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.eval = this.eval.bind(this);
    }

    eval(){
        this.props.eval();
    }

    handleChange(event){
        console.log("working")
        this.props.inputKey(event.target.value);
    }

    render() {
        return (
            <div>
                <button value="0" onClick={this.handleChange}>0</button>
                <button value="1" onClick={this.handleChange}>1</button>
                <button value="2" onClick={this.handleChange}>2</button>
                <button value="3" onClick={this.handleChange}>3</button>
                <button value="4" onClick={this.handleChange}>4</button>
                <button value="5" onClick={this.handleChange}>5</button>
                <button value="6" onClick={this.handleChange}>6</button>
                <button value="7" onClick={this.handleChange}>7</button>
                <button value="8" onClick={this.handleChange}>8</button>
                <button value="9" onClick={this.handleChange}>9</button>
                <button value="+" onClick={this.handleChange}>+</button>
                <button value="-" onClick={this.handleChange}>-</button>
                <button onClick={this.eval}>=</button>
            </div>
        )
    }
}
