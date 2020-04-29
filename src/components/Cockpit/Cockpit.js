import React, { useEffect } from "react";
import classes from "./Cockpit.css";
const cockpit = (props) => {
  useEffect(() => {
    console.log(" Cockpit js useeffect rednering");
    setTimeout(() => {
      alert('Saved data to the cloud ');
    }, 1000);
    return () => {
      console.log("clean up effect");
    };
    //we can pass http request
    //we pass empty array to run it only once
  },[]);

  //clean up effect
  useEffect(() => {
    console.log(" 2nd use effect");
    return () => {
      console.log(" clean up work in 2nd use effect");
    };
  });

  const newClasses = [];
  let btnClass = "";
  if (props.showPerson) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    newClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    newClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <header className={classes.App_header}>
        <h2 className={classes.App_title}>Hello</h2>
        <h1 className={classes.App_title}>{props.appTitle}</h1>
      </header>
      <p className={newClasses.join(' ')}>Iam awesome</p>
      <button className={btnClass} onClick={props.clicked}>
        Show Div
      </button>
    </div>
  );
};

export default React.memo(cockpit);
