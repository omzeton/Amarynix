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

  nameChangeHandler = (event, idee) => {
    // find a thing inside state that has the same id as the second argument in the function 'idee'
    const personIndex = this.state.persons.findIndex(p => {
      // if the 'id' from state is the same as 'idee' passed in function return it
      return p.id === idee;
    });

    // never mutate the state, always copy. other way to do it is like this
    // const person = Object.assign({}, this.state.persons[personIndex]);
    const personStateCopy1 = {
      ...this.state.persons[personIndex] // it's personIndex because it's not the entire state, only one element that is the same with idee
    };

    // Now that we have a copy of the state it's fine to assign it a new value, in this case whatever is being typed
    personStateCopy1.name = event.target.value;

    // now copy the entire state
    const personStateCopy2 = [...this.state.persons];
    // merge the updated state with the copy
    personStateCopy2[personIndex] = personStateCopy1;

    // push the copy to the origin of the state
    this.setState({persons: personStateCopy2 });
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((thing, index) => {
            return <Person 
            name={thing.name} 
            age={thing.age} 
            click={this.deletePersonHandler.bind(this, index)} 
            key={thing.id}
            changed={(event) => this.nameChangeHandler(event, thing.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <p className={classes.join(' ')}></p>
        <button onClick={this.togglePersons} style={style}>show persons</button>
        {persons}
      </div>
    );
  }
}

export default App;

//17.02.2019

// DYNAMIC CONTENT

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