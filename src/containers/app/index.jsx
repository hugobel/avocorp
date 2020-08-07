import React from "react";
import { Switch, Route } from "react-router-dom";
import Access from "../../layouts/access";
import Home from "../../layouts/home";

import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/(log-in|sign-up)">
          <Access />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
