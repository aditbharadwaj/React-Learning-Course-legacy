import React, { Component , Fragment } from "react";
import PropTypes from 'prop-types';
import Authcontext from '../../../context/auth-context'
//import classes from "./Person.css";
//import Aux from '../../../hoc/Auxiliary'
// Rendering Child Compoenenet and usage of Props for passing data and methods
//fragment is used like auxillary component proavide by react 
class Person extends Component {

  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

  //method 2 to use context in class component hsorter and easier
  static contextType = Authcontext;

  componentDidMount(){
    //using reference method 1 to initate focus on any element old version
    //this.inputElement.focus();
    //method 2 below new version
    this.inputElementRef.current.focus();

    //method 2 for context 

    console.log(this.context.authenticated );
  }
  render() {
    console.log(" Person.js renderd");
    return (
      // <div className="Person" style={style}>
      //<div className={classes.Person}>
      <Fragment>
      { this.context.authenticated  ? <p>Authenticated</p> : <p>Is not authentiated</p>}
     
        <p key="12" onClick={this.props.click}>
          {" "}
          Iam {this.props.name} and iam {this.props.age} years old
        </p>
        <input
          key="13"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
         // ref={(inputEl) =>{this.inputElementRef = inputEl}} //method 1
         ref = {this.inputElementRef}
        />
        </Fragment>
      //</div>
    );
  }
}
//Defining Data types for each prop for the particular component 
Person.propTypes ={
  click :PropTypes.func,
  name:PropTypes.string,
  age:PropTypes.number,
  changed:PropTypes.func
};
export default Person;

//method 1 for context 
/* <Authcontext.Consumer>
      {context => context.authenticated  ? <p>Authenticated</p> : <p>Is not authentiated</p>}
      </Authcontext.Consumer> */


// {this.props.isAuth ? <p>Authenticated</p> : <p>Is not authentiated</p>}
//using radium
/*  const style = {
        '@media (min-width:500px)':{
            width:'450px'
        }
    } */

//using styled components using a new component
//import styled from 'styled-components';
/* const StyledDiv =  styled.div`
width: 60%;
margin: auto;
border: 10px solid #eeee;
box-shadow: 16px;
padding: 16px;
text-align: center;
margin-top: 10px;

@media (min-width:500px) :{
    width:'450px'
}
`; */

/* return inside render can also call array of elements 
and each element need a unique key */
/* 
render() [
    console.log(" Person.js renderd");
    return (
      
        <p key="key1" onClick={this.props.click}>
          {" "}
          Iam {this.props.name} and iam {this.props.age} years old
        </p>,
        <input
          key="key2"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      
    );
    ]
   */
