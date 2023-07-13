//import { Fragment } from "react";
import Footer from "./Footer";
import styles from "./MentorDash.module.css";
import NotificationsList from "../appnotifications/appnotif";
import Mentorcard from "./mentorCards";
import SideBar from "../UI/SideBar";
import Card from "../UI/Card";
function MentorDash() {
  
     const attributes = [
    {
      name: "Analytics",
      link: "/Manalytics",
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
      link: "/Mnotitifications",
    },
    {
      name: "Profile",
      link: "/Coursedesc",
    },
  ];
  return (
    <>
    <div className="body">
      <SideBar attributeList = {attributes} />
      <div className={styles.container}>
      <br></br>
      <div style={{ border: '5px solid black', borderRadius: '20px' }}>
      <Card>Hello</Card>
  <h2 style={{ color: 'black' }}>Course Name: Internet Of Things</h2>
  <h2 style={{ color: 'black' }}>Mentor Name: Ms Nalina Devi</h2>
</div>

      <div className={styles.star}>
      {/* <div className={styles.browseBox}> */}
      <h1>Course Statistics</h1>
      <Mentorcard/>
      <NotificationsList ></NotificationsList>
        
    
     
      {/* </div> */}
      <Footer></Footer>
      </div>
      </div>
      </div>
    </>
  );
}

export default MentorDash;