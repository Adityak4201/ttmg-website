import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import PublicRoute from "./utils/PublicRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={Home}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
