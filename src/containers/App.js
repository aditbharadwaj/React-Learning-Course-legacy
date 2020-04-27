import React, { Component } from 'react';
import classes from  './App.css';
import Person from '../components/Persons/person/Person';
import Char from '../components/Char/Char';
import Validation from '../components/Validation/Validation';
import ErrorBoundry from '../components/Errorboundry/ErrorBoundary'
import Persons from '../components/Persons/Persons'

class App extends Component {

  state= {
    persons: [
      {
        id:253 ,name:'adit', age : 28
      },
      {
        id:345 ,name:'manu', age: 27
      }
    ],
    showPerson: false,
    userInput: ''
  };

  //Assignment Practice for user input changes using validation conditions
  inputChangedHandler = ( event ) => {
    this.setState( { userInput: event.target.value } );
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  
  //flexible component with respective input and key update
  nameChangeHandler = (event, id) =>{
   const personIndex = this.state.persons.findIndex(p =>{
     return p.id === id
   });
   const person = {
     ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
     persons[personIndex]= person;
     this.setState( {persons:persons} );
  
  };

  

  togglePersonHandler= () =>{
      const doesShow = this.state.showPerson;
      this.setState({showPerson : !doesShow})
  };

  deletePersonHandler = (personIndex) => {
    const personUpdate = this.state.persons.slice();//make a copy of the array
   // const newPersonUpdate = [...this.state.persons]; //alternative
    personUpdate.splice(personIndex, 1);
    this.setState({persons:personUpdate})
  };
  render() {
    //Assignment Practice
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });
    // passing Css in JSX
   /*  const style ={
      marginTop:'10px',
      backgroundColor: 'white',
      font: 'inherit',
      border :'1px solid blue',
      padding: '8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }; */
    // Rendering Component Conditionally using if else (Second Way)
    let persons = null;
    let btnClass = [classes.button];
    if(this.state.showPerson){
      
      persons = (
        //Iteration of the array with unique index (delete)
        <div>
        <Persons 
        persons ={this.state.persons}
        clicked= {this.deleteCharHandler}
        changed={this.nameChangeHandler}></Persons>
        <hr />
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      
    </div> 
      );
        //passing style dynamically for a particluar style property 
      /* style.backgroundColor ='red';
      style[':hover'] ={
        backgroundColor: 'yellow',
        color:'red'
      } */

      btnClass.push(classes.Red);
    }
   /*  generic way to call dynamic classes from css
    let classes = ['red','bold'].join(' '); */
    //using condition to call the specific Css class 
    const newClasses = [];
    if(this.state.persons.length <=2){
      newClasses.push(classes.red);
    }
    if(this.state.persons.length <=1){
      newClasses.push(classes.bold);
    }
    return (
    
      <div className={classes.App}>
        <header className={classes.App_header}>
          <h2 className= {classes.App_title}>Hello</h2>
          <h1 className={classes.App_title}>Welcome to React</h1>
        </header>
        <p className={newClasses.join(' ')} >Iam awesome</p>
        <button
        className = {btnClass.join(' ')}
        onClick={this.togglePersonHandler}>
        Show Div
        </button>
       {persons}
       
      </div>
      
    );
  }
}

export default App;

// using stlyed component pacakge 
//import styled from 'styled-components';
/* const StyledButton = styled.button`
      margin-top: 10px ;
      background-color:  ${props => props.alt ? 'red' : 'green'} ;
      font:  inherit ;
      border : 1px solid blue ;
      padding:  8px ;
      cursor: pointer ;
       
      &:hover {
        background-color: ${props => props.alt ? 'yellow' : 'purple'} ;
        color: black;
      }

`; */
// inside render
/* <StyledButton alt={this.state.showPerson}
onClick={this.togglePersonHandler}>
Show Div
</StyledButton> */

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

  /* changing name 
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
  }; */