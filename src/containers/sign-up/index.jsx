import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../store/reducers/user";
import Button from "../../components/button";
import Input from "../../components/input";
import Text from "../../components/text";
import "./signup.scss";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");

  const { user, setUser } = props;

  const isButtonDisabled =
    username.trim() === "" ||
    password.trim() === "" ||
    password !== passwordMatch;

  const hasPasswordError =
    password.trim() !== "" &&
    passwordMatch.trim() !== "" &&
    password !== passwordMatch;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordMatch) return;

    sessionStorage.setItem("username", username);
    setUser({ name: username });
  };

  if (user.name) {
    return <Redirect to="/" />;
  }

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
        <Link to="/log-in">log in.</Link>
      </Text>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const actionCreators = {
  setUser: actions.set,
};

export default connect(mapStateToProps, actionCreators)(SignUp);
