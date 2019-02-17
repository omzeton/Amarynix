import React, { Component } from 'react';
import Person from './components/Person/Person';
import './App.css';

class App extends Component {

  state = {
    name: '',
    persons: [
      {name: 'Ior', age: '1235245*10'},
      {name: 'Doria', age: '153464545*10'},
      {name: 'Stref', age: '534f756645*10'},
    ],
    showPersons: false
  }

  nameChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  togglePersons = () => {
    let boolea = this.state.showPersons;
    this.setState({showPersons: !boolea});
  }

  deletePersonHandler = (personIndex) => {
    // const newArr = this.state.persons.slice();
    const newArr = [...this.state.persons];
    newArr.splice(personIndex, 1);
    this.setState({persons: newArr})
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((thing, val, index) => {
            return <Person name={thing.name} age={thing.age} click={this.deletePersonHandler.bind(this, index)} key={val}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <button onClick={this.togglePersons}>show persons</button>
        {persons}
      </div>
    );
  }
}

export default App;

// 16.02.2019
/*
Why does arrow function not work?
<input type="text" onChange={() => this.nameChangeHandler()}/>

Why is it splicing the wrong item from state??

deletePersonHandler = (personIndex) => {
  // const newArr = this.state.persons.slice();
  const newArr = [...this.state.persons];
  newArr.splice(personIndex, 1);
  this.setState({persons: newArr})
}
*/

//17.02.2019

// DYNAMIC CONTENT

/*
One NOT JS way to handle dynamic content
{ 
  this.state.showPersons ?
  <div>
    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
  </div>
  : null
}
*/

/* 
One JS way to handle dynamic content

let persons = null;

if (this.state.showPersons) {
  persons = (
    <div>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
    </div>
  );
}
//
and then just declare { persons } somewhere!
*/

// MAP
/*
let persons = null;

if (this.state.showPersons) {
  persons = (
    <div>
      {this.state.persons.map(thing => {
        return <Person name={thing.name} age={thing.age}/>
      })}
    </div>
  );
}
*/

// COPY STATE BEFORE YOU UPDATE IT!
/*

    const newArr = this.state.persons.slice();
    OR
    const = newArr = [...this.state.persons];

*/