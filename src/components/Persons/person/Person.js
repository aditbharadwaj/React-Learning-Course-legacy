import React, { Component } from "react";
import classes from "./Person.css";

// Rendering Child Compoenenet and usage of Props for passing data and methods
class Person extends Component {
  render() {
    console.log(" Person.js renderd");
    return (
      // <div className="Person" style={style}>
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          {" "}
          Iam {this.props.name} and iam {this.props.age} years old
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;

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
