import React, { Component } from "react";
import classes from "./Layout.css";
import Auxillary from "../../hoc/Auxillary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  //setting staates when it depends on the old state
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Auxillary>
        <Toolbar drawerToggledClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxillary>
    );
  }
}

export default Layout;
