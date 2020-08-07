import React from "react";
import classnames from "classnames";
import { Switch, Route, useLocation } from "react-router-dom";
import LogIn from "../../containers/log-in";
import SignUp from "../../containers/sign-up";

import "./access.scss";

const Access = () => {
  const location = useLocation();

  console.info(location);

  const wrapperClasses = classnames("access-layout", {
    "-reverse": location.pathname === "/sign-up",
  });

  return (
    <div className={wrapperClasses}>
      <div className="overlay" />
      <Switch>
        <Route path="/log-in">
          <LogIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
};

export default Access;
