import React, { Component } from 'react';
import './App.css';
import Person from './person/Person';


class App extends Component {

  state= {
    persons: [
      {
        id:253 ,name:'adit', age : 28
      },
      {
        id:345 ,name:'manu', age: 27
      },
      {
        id:567 ,name:'rahul', age : 24
      },
    ],
    showPerson: false
  };
  
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
    let persons = null;
    if(this.state.showPerson){
      
      persons = (
        //Iteration of the array with unique index (delete)
        <div>

        {
          this.state.persons.map((person,index) =>{
          return <Person 
          click = {() => this.deletePersonHandler(index)}
          name={person.name}
          age= {person.age}
          key={person.id}
          changed = {(event) => this.nameChangeHandler(event,person.id)}
         />
        })}
      
    </div> 
      );
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
       {persons}
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