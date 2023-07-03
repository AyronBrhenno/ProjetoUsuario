import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Informacao from "./paginas/informacacao/Informacao";
import Home from "./paginas/home/Home";
import Registro from "./paginas/registro/Registro";
import Login from "./paginas/login/Login";
import Atividades from "./paginas/atividades/Atividades";
import Sobre from "./paginas/sobre/Sobre";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/ProjetoUsuario/" exact component={Home} />
          <Route path="/info" component={Informacao} />
          <Route path="/registro" component={Registro} />
          <Route path="/login" component={Login} />
          <Route path="/atividades" component={Atividades} />
          <Route path="/sobremim" component={Sobre} />
        </Switch>
      </Router>
    </div>
  );
}
