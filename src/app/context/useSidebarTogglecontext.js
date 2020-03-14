import React, { createContext, useState } from "react";

export const Context = createContext({open:true});

export const Provider = props => {
  // Initial values are obtained from the props
  const {
    open: initialUsers,
    children
  } = props;

  // Use State to keep the values
  const [open, toogle] = useState(initialUsers);

  const tooglesidebar = value => {
    toogle(value);
  };

  // Make the context object:
  const toogleContext = {
    open,
    toogle,
    tooglesidebar
  };

  // pass the value in provider and return
  return <Context.Provider value={toogleContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;


Provider.defaultProps = {
  open: true
};
