import React, { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
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
      <h2>Welcome to Avocorp</h2>
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
      <Button onClick={handleSubmit} disabled={isButtonDisabled}>
        Sign Up
      </Button>
      <p>
        I have an account,
        <a href="#log-in" onClick={switchView}>
          log in.
        </a>
      </p>
    </form>
  );
};

export default SignUp;
