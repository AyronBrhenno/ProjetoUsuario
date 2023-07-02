import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Informacao from "./paginas/Informacao.js";
import Home from "./paginas/Home.js";
import Registro from "./paginas/Registro.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/info" component={Informacao} />
        <Route path="/registro" component={Registro} />
      </Switch>
    </Router>
  );
}
