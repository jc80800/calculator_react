import { Component } from 'react';
import './App.css';
import Display from './componenets/Display';
import Keypad from './componenets/Keypad';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:"",
    } 
    this.inputKey = this.inputKey.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.evaluate = this.evaluate.bind(this);
    this.backspace = this.backspace.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset(){
    this.setState({
      value: ""
    })
  }
  backspace(){
    this.setState({
      value: this.state.value.slice(0, -1)
    })
  }

  evaluate(){
    const result = eval(this.state.value);
    this.setState({
      value: result.toString()
    })
  }

  inputKey(name){
    const check = this.checkInput(name);
    if (!check){
      this.setState({
        value: this.state.value.concat(name)
      })
    }
  }

  checkInput(name){
    const operation = ["+", "-", "*", "/"];
    if (operation.includes(name)){
      if (!operation.includes(this.state.value.slice(-1))){
        console.log("true")
        return false;
      }
    } else{
      return false;
    }
    return true;
  }
  
  render(){
    return (
      <div className="App">
        <Display value={this.state.value}></Display>
        <Keypad reset={this.reset} backspace={this.backspace} eval={this.evaluate} inputKey={this.inputKey}></Keypad>
      </div>
    );
  }
  
}

export default App;
