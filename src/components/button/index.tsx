import React from "react";

type Props = {
	text: string;
};

const Button: React.FC<Props> = (props) => {
	const { text } = props;
	return (
		<button>{text}</button>
	)
};

export default Button;