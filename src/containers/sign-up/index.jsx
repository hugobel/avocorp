import React, { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import Text from "../../components/text";
import "./signup.scss";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const { switchView } = props;

  const isButtonDisabled =
    username.trim() === "" ||
    password.trim() === "" ||
    password !== passwordMatch;

  const hasPasswordError =
    password.trim() !== "" &&
    passwordMatch.trim() !== "" &&
    password !== passwordMatch;

  const handleSubmit = () => {
    if (password !== passwordMatch) return;
    console.log(username, password);
  };

  return (
    <form className="sign-up" onSubmit={handleSubmit}>
      <Text className="title" size="head-s">
        Welcome to Avocorp
      </Text>
      <Text size="caption">Please fill the details.</Text>
      <Input placeholder="user name" value={username} onChange={setUsername} />
      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={setPassword}
      />
      <Input
        error={hasPasswordError}
        type="password"
        placeholder="repeat password"
        value={passwordMatch}
        onChange={setPasswordMatch}
      />
      <Button
        className="signup-btn"
        onClick={handleSubmit}
        disabled={isButtonDisabled}
      >
        Sign Up
      </Button>
      <Text className="legend" size="caption">
        I have an account,&nbsp;
        <a href="#log-in" onClick={switchView}>
          log in.
        </a>
      </Text>
    </form>
  );
};

export default SignUp;