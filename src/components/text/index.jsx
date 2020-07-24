import React from "react";
import classnames from "classnames";
import "./text.scss";

const Text = (props) => {
  const { size, children, className } = props;
  const classes = classnames("text", size, className);

  switch (size) {
    case "head-l":
      return <h1 className={classes}>{children}</h1>;
    case "head-m":
      return <h2 className={classes}>{children}</h2>;
    case "head-s":
      return <h3 className={classes}>{children}</h3>;
    case "head-xs":
      return <h4 className={classes}>{children}</h4>;
    case "controls":
      return <span className={classes}>{children}</span>;
    default:
      return <p className={classes}>{children}</p>;
  }
};

export default Text;
