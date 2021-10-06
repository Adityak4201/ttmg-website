import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import PublicRoute from "./utils/PublicRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Login from "./components/Login/Login";
import PrivateRoute from "./utils/PrivateRoute";
import UserEntry from "./components/UserEntry/UserEntry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/profile" component={UserEntry} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
