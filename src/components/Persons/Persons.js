import React, { Component } from "react";

import Person from "./person/Person";
class Persons extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log(" Persons js getderrived state");
    return state;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("person js should component update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(" persons js getsnapshot update");
    return { message: "Snapshot!" };
  }
  //most important lifecycle
  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log("Snapshot :", Snapshot);
    console.log(" person js component did update");
  }
  render() {
    console.log(" Persons js rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
