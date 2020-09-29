import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import "./app.css";

import Register from "./Register/Register";
import Login from "./Login/Login";
import Layout from "./Layout/Layout";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Layout} />
      </Switch>
    </HashRouter>
  );
}

export default App;
