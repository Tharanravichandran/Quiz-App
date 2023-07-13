//import { Fragment } from "react";

import styles from "./AdminDash.module.css";
import NotificationsList from "../appnotifications/appnotif";
//import Navigation from "./mentorNavigation";

import SideBar from "../UI/SideBar";
function Anotifications() {
  
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
      link: "/Anotifications",
    },
    {
      name: "Profile",
      link: "/Coursedesc",
    },
  ];
  return (
    <>
    
      <SideBar attributeList = {attributes} />
      <div className={styles.container}>
      <br></br>
      <div style={{ border: '5px solid black', borderRadius: '20px' }}>
      
  <h2 style={{ color: 'black' }}>Course Name: Internet Of Things</h2>
  <h2 style={{ color: 'black' }}>Mentor Name: Ms Nalina Devi</h2>
</div>

      <div className={styles.star}>
      {/* <div className={styles.browseBox}> */}
      <NotificationsList ></NotificationsList>
        
      
     
      {/* </div> */}
    
      </div>
      </div>
      
    </>
  );
}

export default Anotifications;