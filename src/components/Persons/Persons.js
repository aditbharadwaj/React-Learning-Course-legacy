import React, { PureComponent } from "react";
//import AuthContext from '../../context/auth-context'
import Person from "./person/Person";
class Persons extends PureComponent {
  //using pure component implements shouldcomponentupdate life cycle it provides props check

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(" persons js getsnapshot update");
    return { message: "Snapshot!" };
  }
  //most important lifecycle
  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log("Snapshot :", Snapshot);
    console.log(" person js component did update");
  }

  componentWillUnmount() {
    // code runs when component is removed
    console.log(" person js component will unmount");
  }
  render() {
    console.log(" Persons js rendering...");
    return (this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
          //isAuth={this.props.isAuthenticated}
        />
      );
    }));
  }
}

export default Persons;

// Component Life Cycles
/* static getDerivedStateFromProps(props, state) {
    console.log(" Persons js getderrived state");
    return state;
  } */

/*   shouldComponentUpdate(nextProps, nextState) {
    console.log("person js should component update");
  //   it helps in saving time and speed of the application 
  // by rendering only what and when it is called, we are comparing pointers
    if (
      nextProps.persons !== this.props.perons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    ) {
      return true;
    } else {

      console.log('Not changed ' );
      return false;
    }
  } */
