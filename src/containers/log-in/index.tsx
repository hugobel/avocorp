import React from "react";
import Button from "../../components/button";
import Input from "../../components/input";

type Props = {
	switchView: () => void;
};

const LogIn: React.FC<Props> = (props) => {
	const { switchView } = props;
	return (
		<form onSubmit={console.log}>
			<h2>Member access</h2>
			<Input placeholder="user name" value="" />
			<Input type="password" placeholder="password" value="" />
			<Button text="Log in" />
			<p>Don't have an account yet? <a onClick={switchView}>Sign up.</a></p>
		</form>
	);
}

export default LogIn;