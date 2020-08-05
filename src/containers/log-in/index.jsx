import React, { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import Text from "../../components/text";
import "./login.scss";

const LogIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { switchView } = props;

  const isButtonDisabled = username.trim() === "" || password.trim() === "";

  const handleSubmit = () => {
    console.log(username, password);
  };

  return (
    <form className="log-in" onSubmit={handleSubmit}>
      <Text className="title" size="head-s">
        Member access
      </Text>
      <Text size="caption">Please sign in to continue.</Text>
      <Input placeholder="user name" value={username} onChange={setUsername} />
      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={setPassword}
      />
      <Button
        className="login-btn"
        onClick={handleSubmit}
        disabled={isButtonDisabled}
      >
        Log In
      </Button>
      <Text size="caption" className="legend">
        Don't have an account yet?&nbsp;
        <a href="#sign-up" onClick={switchView}>
          Sign up.
        </a>
      </Text>
    </form>
  );
};

export default LogIn;
