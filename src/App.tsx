import { NotFound, PrivateRoute } from './components/Common';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './page/login';
import Home from './page/home';

function App() {
  return (
    <>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
