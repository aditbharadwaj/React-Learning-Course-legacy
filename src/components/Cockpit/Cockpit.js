import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from '../../context/auth-context';
const cockpit = (props) => {
  //using ref inside functional components
  const toggleBtnRef = useRef(null);
  //method 2 for context in functional components
  const authContext = useContext(AuthContext);
  console.log('authContext :', authContext.authenticated);
  useEffect(() => {
    console.log(" Cockpit js useeffect rednering");
    /* setTimeout(() => {
      alert("Saved data to the cloud ");
    }, 1000); */
    toggleBtnRef.current.click();// we call the ref inside use effect 
    return () => {
      console.log("clean up effect");
    };
    //we can pass http request
    //we pass empty array to run it only once
  }, []);

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
      <p className={newClasses.join(" ")}>Iam awesome</p>
      <button 
      className={btnClass} 
      onClick={props.clicked}
      ref={toggleBtnRef} >
        Show Div
      </button>
      <button onClick={authContext.login}>log in</button>
    </div>
  );
};

export default React.memo(cockpit);
// method 1 auth context
/* <AuthContext.Consumer> 
    { context =>  <button onClick={context.login}>log in</button>}
     </AuthContext.Consumer> */