import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Informacao from "./paginas/informacacao/Informacao";
import Home from "./paginas/home/Home";
import Registro from "./paginas/registro/Registro";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/ProjetoUsuario/" exact component={Home} />
          <Route path="/info" component={Informacao} />
          <Route path="/registro" component={Registro} />
        </Switch>
      </Router>
    </div>
  );
}
