import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";
import { actions } from "../../store/reducers/user";
import Button from "../../components/button";
import Input from "../../components/input";
import Passcode from "../../components/input/passcode";
import Text from "../../components/text";
import "./signup.scss";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [showConfirmationInput, setShowConfirmationInput] = useState(false);

  const { user, setUser } = props;

  const isButtonDisabled =
    username.trim() === "" ||
    password.trim() === "" ||
    password !== passwordMatch;

  const hasPasswordError =
    password.trim() !== "" &&
    passwordMatch.trim() !== "" &&
    password !== passwordMatch;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (password !== passwordMatch) return;

    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email: username,
        },
      });

      setShowConfirmationInput(true);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleSubmitCode = async (event) => {
    event.preventDefault();

    try {
      await Auth.confirmSignUp(username, code);

      sessionStorage.setItem("username", username);
      setUser({ name: username });
    } catch (err) {
      setError(err.message);
    }
  };

  if (user.name) {
    return <Redirect to="/" />;
  }

  return (
    <form
      className="sign-up"
      onSubmit={showConfirmationInput ? handleSubmitCode : handleSubmit}
    >
      <Text className="title" size="head-s">
        Welcome to Avocorp
      </Text>
      <Text size="caption">Please fill the details.</Text>
      {error && <Text size="caption">{error}</Text>}
      {showConfirmationInput ? (
        <Passcode value={code} onChange={setCode} />
      ) : (
        <>
          <Input placeholder="e-mail" value={username} onChange={setUsername} />
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
        </>
      )}
      <Button
        className="signup-btn"
        onClick={showConfirmationInput ? handleSubmitCode : handleSubmit}
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
