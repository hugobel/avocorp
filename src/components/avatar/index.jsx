import React from "react";
import "./avatar.scss";

const Avatar = (props) => {
  const { size, username, onClick } = props;

  return (
    <img
      className="avatar"
      src={`https://api.adorable.io/avatars/${size}/${username}`}
      alt="avatar"
      onClick={onClick}
    />
  );
};

export default Avatar;
