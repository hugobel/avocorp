import React from "react";

const Avatar = (props) => {
  const { size, username } = props;

  return (
    <img
      className="avatar"
      src={`https://api.adorable.io/avatars/${size}/${username}@adorable.png`}
      alt="avatar"
    />
  );
};

export default Avatar;
