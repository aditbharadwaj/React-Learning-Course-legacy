import React from "react";
//highher order components to use a component to wrap other component and use classes

const withCLass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent appTitle={props.appTitle} />
    </div>
  );
};

export default withCLass;
//1st way to make HOC for className component
/* const withCLass = props => (
  <div className={props.classes}>{props.children}</div>
); */
