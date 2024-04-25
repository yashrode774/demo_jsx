import { createContext, useState, Component, createElement as h } from 'react';

export const DrupalContext = createContext({});
export const DrupalDispatchContext = createContext({});


// A centralized context wrapping the entire app with separate value and setter
// contexts so components can set context without having to rerender if they
// do not depend on a context value.
class DrupalContextApp extends Component {
  constructor(props) {
    super(props);
    this.children = props.children;
  }


  state = {}
  updateState = (newState) => {
    this.setState(state => ({...state, ...newState}))
  }


  render() {
    return h(
      DrupalContext.Provider, {value: this.state},
      h(DrupalDispatchContext.Provider, {value: this.updateState}, this.children)
    )
  }
}

export default DrupalContextApp;

