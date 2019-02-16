import React, { Component } from 'react';
import Person from './components/Person/Person';
import './App.css';

class App extends Component {

  state = {
    name: ''
  }

  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.nameChangeHandler.bind(this)} value={this.state.name}/>
        <Person name={this.state.name} />
      </div>
    );
  }
}

export default App;

/*
Why does arrow function not work?
<input type="text" onChange={() => this.nameChangeHandler()}/>
*/