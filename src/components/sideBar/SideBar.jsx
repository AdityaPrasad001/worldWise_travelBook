import React from "react";
import styles from "./SideBar.module.css";
import Logo from "../logo/Logo";
import AppNav from "../appNav/AppNav";
import { Outlet } from "react-router-dom";
const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
    </div>
  );
};

export default SideBar;
