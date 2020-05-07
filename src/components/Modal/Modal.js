import React, { Component } from "react";

import classes from "./Modal.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxillary from "../../hoc/Auxillary";

class Modal extends Component {

    //this could be a functional componnet and can be class 
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentWillUpdate(){

      console.log(' modal component update called' );
  }

  render() {
    return (
      <Auxillary>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Auxillary>
    );
  }
}

export default Modal;
