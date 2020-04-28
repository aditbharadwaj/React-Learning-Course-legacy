import React from "react";
import classes from "./Cockpit.css";
const cockpit = (props) => {
  const newClasses = [];
  let btnClass = "";
  if (props.showPerson) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    newClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    newClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <header className={classes.App_header}>
        <h2 className={classes.App_title}>Hello</h2>
        <h1 className={classes.App_title}>Welcome to React</h1>
      </header>
      <p className={newClasses.join(" ")}>Iam awesome</p>
      <button className={btnClass} onClick={props.clicked}>
        Show Div
      </button>
    </div>
  );
};

export default cockpit;
