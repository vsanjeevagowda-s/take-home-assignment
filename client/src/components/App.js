import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import "./app.css";

import Register from "./Register/Register";
import Login from "./Login/Login";
import Layout from "./Layout/Layout";


const PrivateRoute = ({ component: Component, token, ...rest }) => {
  return <Route exact {...rest} render={(props) => {
    if (localStorage.getItem('token')) {
      return <Component {...props} />
    } else {
      return <Redirect to='/' />
    }
  }
  } />
}

const App =() => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Layout} />
      </Switch>
    </HashRouter>
  );
}

export default App;
