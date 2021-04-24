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
    const operation = ["+", "-"];
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
        <Keypad inputKey={this.inputKey}></Keypad>
      </div>
    );
  }
  
}

export default App;
