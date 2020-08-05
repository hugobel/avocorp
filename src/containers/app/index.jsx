import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from "../log-in";
import SignUp from "../sign-up";
import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="overlay" />
        <Switch>
          <Route path="/log-in">
            <LogIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="*">Hello World</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
