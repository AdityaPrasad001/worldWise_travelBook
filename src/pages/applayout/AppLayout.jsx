import React from "react";
import styles from "./AppLayout.module.css";
import SideBar from "../../components/sideBar/SideBar";
import Map from "../../components/map/Map";
const AppLayout = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
};

export default AppLayout;
