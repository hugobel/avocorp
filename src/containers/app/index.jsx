import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Amplify from "aws-amplify";
import { actions } from "../../store/reducers/user";
import Access from "../../layouts/access";
import Home from "../../layouts/home";
import Members from "../members";

import "./app.scss";

const App = (props) => {
  const { setUser } = props;

  useEffect(() => {
    Amplify.configure({
      Auth: {
        identityPoolId: "us-east-2:6faa239a-b500-4c45-818a-b286b42a1fc0",
        region: "us-east-2",
        userPoolId: "us-east-2_t8bpBGfbi",
        userPoolWebClientId: "5b605noco7klukv53i80ed0dg",
      },
    });
  }, []);

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
        <Route path="/profile">
          <Home>Profile</Home>
        </Route>
        <Route path="/user-transactions">
          <Home>See user transactions</Home>
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
