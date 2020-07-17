import React, { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import "./login.scss";

type Props = {
  switchView: () => void;
};

const LogIn: React.FC<Props> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { switchView } = props;

  const isButtonDisabled = username.trim() === "" || password.trim() === "";

  const handleSubmit = () => {
    console.log(username, password);
  };

  return (
    <form className="log-in" onSubmit={handleSubmit}>
      <h2>Member access</h2>
      <Input placeholder="user name" value={username} onChange={setUsername} />
      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={setPassword}
      />
      <Button onClick={handleSubmit} disabled={isButtonDisabled}>
        Log In
      </Button>
      <p>
        Don't have an account yet?{" "}
        <a href="#sign-up" onClick={switchView}>
          Sign up.
        </a>
      </p>
    </form>
  );
};

export default LogIn;
