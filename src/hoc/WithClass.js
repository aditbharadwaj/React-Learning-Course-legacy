import React from "react";
//highher order components to use a component to wrap other component and use classes 

const WithCLass = props => (
  <div className={props.classes}>{props.children}</div>
); 

/* const withCLass = props => (
  <div className={props.classes}>{props.children}</div>
); */

export default WithCLass;
