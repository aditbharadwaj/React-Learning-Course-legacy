import React from 'react';
import './Person.css';
import Radium from 'radium';
// Rendering Child Compoenenet and usage of Props for passing data and methods
const person = (props) => {
    const style = {
        '@media (min-width:500px)':{
            width:'450px'
        }
    }
return (
    <div className="Person" style={style}>
    <p onClick={props.click}> Iam {props.name} and iam {props.age} years old</p>
    <input type="text" onChange={props.changed} value={props.name}/>
     </div>

    )
};

export default Radium(person);