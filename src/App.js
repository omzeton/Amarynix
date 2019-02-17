import React, { Component } from 'react';
import Person from './components/Person/Person';
import './App.css';

class App extends Component {

  state = {
    name: '',
    persons: [
      {id: 'fasd23', name: 'Ior', age: '1235245*10'},
      {id: 'afsf54', name: 'Doria', age: '153464545*10'},
      {id: 'hdfg53', name: 'Stref', age: '534f756645*10'},
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
          {this.state.persons.map((thing, index) => {
            return <Person name={thing.name} age={thing.age} click={this.deletePersonHandler.bind(this, index)} key={thing.id}/>
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
Why is it splicing the wrong item from state??

Answer: because if you assign a key to the index attribute 
the index changes! Every time person is given a different 
key which is why they behave in different way.
"So what we could do is use index, because after all index
changes for every element in the array, right? That's right,
but index also is part of the list itself. If the list changes,
every element will receive a new index, at least every element after the change"
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