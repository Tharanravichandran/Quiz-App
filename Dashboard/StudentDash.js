import { Fragment } from "react";
import Footer from "./Footer";
import styles from "./StudentDash.module.css";
import Navigation from "./Navigation";
import Card from "../UI/Card";
import ContinueList from "./ContinueList";
import Browse from "./Browse";
import SideBar from "../UI/SideBar";
import welcome from "../../images/welcome.jpeg";
import { useNavigate } from "react-router-dom";
import StudLinegraph from "./StudLinegraph";
import Graph from "./Graph";
function StudentDash() {
  let navigate = useNavigate();
  const attributes = [
    {
      name: "Course",
      link: "/coursePage",
    },
    {
      name: "Cart",
      link: "/",
    },
    {
      name: "Profile",
      link: "/StudentProfile",
    },
    {
      name: "About Us",
      link: "/aboutUs",
    },
    {
      name: "Notification",
      link: "/",
    },
  ];
  return (
    <>
      {/* <Navigation></Navigation> */}
      <SideBar attributeList={attributes} />
      <div className={styles.container}>
        <Card className={styles.profilebut}>
          <p onClick={() => navigate("/StudentProfile")}>
            Click to go to profile
          </p>
        </Card>
        <Card className={styles.welcome}>
          <p>Hello, Welcome back!</p>
          <img src={welcome} />
        </Card>

        <div className={styles.graph}>
          <Card className={styles.welcome}>
            <p>Student Progress</p>
            <StudLinegraph/>
          </Card>
          <Card className={styles.welcome}>
            <p>Student Progress</p>
            <Graph/>
          </Card>
        </div>

        {/* <div className={styles.child}>
          <h1>Continue</h1>
          <ContinueList />
        </div> */}
        {/* <div className={styles.browseBox}> */}
        <Browse />
      </div>
      {/* </div> */}
    </>
  );
}

export default StudentDash;
