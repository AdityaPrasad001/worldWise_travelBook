import React from "react";
import styles from "./SideBar.module.css";
import Logo from "../logo/Logo";
import AppNav from "../appNav/AppNav";
import { Outlet } from "react-router-dom";

const year = new Date().getFullYear;
const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />

      <AppNav />

      <Outlet />

      <div className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {year} by Worldwise.
        </p>
      </div>
    </div>
  );
};

export default SideBar;
