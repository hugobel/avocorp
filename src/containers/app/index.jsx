import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { actions } from "../../store/reducers/user";
import Access from "../../layouts/access";
import Home from "../../layouts/home";
import Members from "../members";

import "./app.scss";

const App = (props) => {
  const { setUser } = props;

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");

    if (storedUsername) {
      setUser({ name: storedUsername });
    }
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route path="/(log-in|sign-up)">
          <Access />
        </Route>
        <Route path="*">
          <Home>
            <Members />
          </Home>
        </Route>
      </Switch>
    </div>
  );
};

const actionCreators = {
  setUser: actions.set,
};

export default connect(null, actionCreators)(App);
