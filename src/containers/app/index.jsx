import React, { useState } from "react";
import classnames from "classnames";
import LogIn from "../log-in";
import SignUp from "../sign-up";
import "./app.scss";

const App = () => {
  const [activeForm, setActiveForm] = useState("log-in");
  const appClasses = classnames("app", {
    "-reverse": activeForm === "sign-up",
  });

  return (
    <div className={appClasses}>
      <div className="overlay" />
      {activeForm === "log-in" && (
        <LogIn switchView={() => setActiveForm("sign-up")} />
      )}
      {activeForm === "sign-up" && (
        <SignUp switchView={() => setActiveForm("log-in")} />
      )}
    </div>
  );
};

export default App;
