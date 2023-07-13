import React from 'react';
import styles from "./AdminDash.module.css";
import Graph from "../Dashboard/Graph";
import Card from "../UI/Card";
import SideBar from "../UI/SideBar";
import UsersReach from "./UsersReach";
function Aanalytics() {
  const attributes = [
    {
      name: "Analytics",
      link: "/Aanalytics",
    },
    {
      name: "Edit",
      link: "/Coursedesc",
    },
    {
      name: "Queries",
      link: "/Coursedesc",
    },
    {
      name: "Notifications",
      link: "/Anotitifications",
    },
    {
      name: "Profile",
      link: "/Coursedesc",
    },
  ];

  return (
    <>
      <div className="body">
        <SideBar attributeList={attributes} />
        <div className={styles.graphContainer}>
          <div className={styles.graphWrapper}>
            <UsersReach className={styles.graph} />
          </div>
          <div className={styles.graphWrapper}>
            <Graph className={styles.graph} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Aanalytics;