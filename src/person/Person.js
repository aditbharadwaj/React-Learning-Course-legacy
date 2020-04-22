import React from 'react';
import './Person.css';

// Rendering Child Compoenenet and usage of Props for passing data and methods
const person = (props) => {
return (
    <div className="Person">
    <p onClick={props.click}> Iam {props.name} and iam {props.age} years old</p>
    <input type="text" onChange={props.changed} value={props.name}/>
     </div>

    )
};

export default person;