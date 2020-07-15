import React, { useState } from "react";
import LogIn from "../log-in";
import SignUp from "../sign-up";
import "./app.scss";

const App = () => {
	const [activeForm, setActiveForm] = useState("log-in");

  return (
    <div className="app">
    	{ activeForm === "log-in" && (<LogIn switchView={() => setActiveForm("sign-up")} />) }
      	{ activeForm === "sign-up" && (<SignUp switchView={() => setActiveForm("log-in")} />) }
    </div>
  );
};

export default App;
