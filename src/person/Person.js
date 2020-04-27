import React from 'react';
import './Person.css';
import styled from 'styled-components';

//using styled components using a new component
const StyledDiv =  styled.div`
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
`;
// Rendering Child Compoenenet and usage of Props for passing data and methods
const person = (props) => {
    //using radium
   /*  const style = {
        '@media (min-width:500px)':{
            width:'450px'
        }
    } */
    
return (
   // <div className="Person" style={style}>
    <StyledDiv>
    <p onClick={props.click}> Iam {props.name} and iam {props.age} years old</p>
    <input type="text" onChange={props.changed} value={props.name}/>
     
    </StyledDiv>
    )
};

export default person;