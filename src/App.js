import React, { Component } from 'react';
import classes from './App.css';

import Person from './Person/Person'
import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOutput/UserOutput"


class App extends Component {
  // property
  state = {
    persons: [
      { id: "101", name: "Meet", age: 22},
      { id: "102", name: "Jeel", age: 18},
      { id: "103", name: "Darshit", age: 20},
    ],
    username: "BhaiBhai",
    showPersons: false
  }

  /*switchNameHaandler = (newName) => {
    // console.log("Clicked")
    // DON'T DO THIS:: this.state.persons[0].name = "Meet Mangukia"
    this.setState({
      persons: [
        { name: newName, age: 22},
        { name: "Jeel", age: 18},
        { name: "Darshit", age: 100}
      ]
    })
  }*/

  deletePersonHandler = (personIndex) => {

      // Slicing the array for copying it Otherwise it just referance it.
      // and that lead to update in Original array
      const persons = this.state.persons.slice();
      // Other Method to copy Array in ES6
      // const persons = [...this.state.persons];

      // console.log(personIndex)
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }

  // Use this method Syntax For Event Handler
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {...this.state.persons[personIndex]};
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })

  }
  
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: 'inherit',
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} 
                key={person.id} 
                changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = "red"
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red) 
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold) 
    }


    // If you want to show o/p of below code, put it into the return method just after {persons}
    // <UserInput changed={this.usernameChangedHandler} currentName = {this.state.username} />
    // <UserOutput userName="Mangukia" />
    // <UserOutput userName= { this.state.username } />

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App!!</h1>
        <p className={assignedClasses.join(" ")}>Hii there!!</p>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Perons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
