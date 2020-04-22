import React, { Component } from 'react';
import './App.css';
import Person from './person/Person';


class App extends Component {

  state= {
    persons: [
      {
        name:'adit', age : 28
      },
      {
        name:'manu', age: 27
      },
      {
        name:'rahul', age : 24
      },
    ],
    showPerson: false
  };
  switchNameHandler = (newName) =>{

    console.log(' wasclicked:');
    this.setState(
      {persons: [
      {
        name:newName, age : 28
      },
      {
        name:'manu', age: 27
      },
      {
        name:'rahul', age : 24
      }
    ]})
  };

  nameChangeHandler = (event) =>{
    this.setState({persons: [
      {
        name:'Adit123', age : 28
      },
      {
        name: event.target.value, age: 27
      },
      {
        name:'rahul', age : 24
      }
    ]})
  };

  togglePersonHandler= () =>{
      const doesShow = this.state.showPerson;
      this.setState({showPerson : !doesShow})
  }
  render() {
    // passing Css in JSX
    const style ={
      marginTop:'10px',
      backgroundColor: 'white',
      font: 'inherit',
      border :'1px solid blue',
      padding: '8px',
      curson:'pointer'
    };
    // Rendering Component Conditionally using if else (Second Way)
    let persons1 = null;
    if(this.state.showPerson){
      persons1 = (
        <div>
        <Person
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}>
       </Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Adiii')}
        change={this.nameChangeHandler}>
        My Hobbies : Racing
        </Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}> 
        </Person>
    </div> 
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <h2 className= "App-title">Hello</h2>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <button 
        style={style}
        onClick={this.togglePersonHandler}>
        Switch Name
        </button>
       {persons1}
      </div>
    );
  }
}

export default App;

// Rendering Component Conditionally (One Way)
/*  {
          this.state.showPerson === true ?
        <div>
            <Person
           name={this.state.persons[0].name} 
           age={this.state.persons[0].age}>
           </Person>
            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Adiii')}
            change={this.nameChangeHandler}>
            My Hobbies : Racing
            </Person>
            <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}> 
            </Person>
        </div> : null
      
      } */


// Passing Data from Parent to Child component ( one way)
/* <button onClick={() => this.switchNameHandler('adi')}>
        Switch Name
        </button> */

// React hooks inital example        
/* import React, { Component,useState} from 'react';
import './App.css';
import Person from './person/Person';

  const  App = props => {
    const [personState, setPersonsState] = useState({
        persons: [
       {
         name:'adit', age : 28
       },
       {
         name:'manu', age: 27
       },
       {
         name:'rahul', age : 24
       }
     ]})
 
    const  switchNameHandler = () =>{
 
       console.log(' wasclicked:');
       setPersonsState({persons: [
         {
           name:'aditya', age : 28
         },
         {
           name:'manu', age: 27
         },
         {
           name:'rahul', age : 24
         }
       ]})
     }
   
     return (
       <div className="App">
         <header className="App-header">
           <h2 className= "App-title">Hello</h2>
           <h1 className="App-title">Welcome to React</h1>
         </header>
         <button onClick={switchNameHandler}>Switch Name</button>
           <Person name={personState.persons[0].name} age={personState.persons[0].age}></Person>
             <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies : Racing</Person>
         <Person name={personState.persons[2].name} age={personState.persons[2].age}> </Person>
       </div>
     );
   
 }
 
 export default App;
  */