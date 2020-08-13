import React from "react";
import Logo from "../../components/logo";
import Menu from "./menu";
import Avatar from "../../components/avatar";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <sidebar className="sidebar">
      <Logo />
      <Menu />
      <Avatar size="32" username="xxx" />
    </sidebar>
  );
};

export default Sidebar;
