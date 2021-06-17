/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Login from './pages/Login/index';
import Home from './pages/Home/index';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated() ? (
      <Home {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))}
  />
);
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} exact path="/" />
        <PrivateRoute path="/home" />
        <Route path="*" component={() => <h1>Pagina não existe</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
