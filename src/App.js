import React, { Fragment } from "react";
import "./App.css"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Informacao from "./paginas/Informacao"

export default function App() {
  return (
   <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about"  component={Informacao} />
      <Route path="/contact"  component={Contact} />
    </Switch>
</Router>
  );
}

const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
  );


const Contact = () => (
  <Fragment>
    <h1>Contact</h1>
    <FakeText />
  </Fragment>
  );
  const FakeText = () => (
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    )