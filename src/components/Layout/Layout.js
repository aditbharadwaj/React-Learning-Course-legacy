import React from "react";
import classes from "./Layout.css";
import Auxillary from "../../hoc/Auxillary";

const layout = (props) => (
  <Auxillary>
    <div>Toolbar,SideDrawer , Back drop</div>
    <main className={classes.Content}>
    {props.children}
    </main>
  </Auxillary>
);

export default layout;
