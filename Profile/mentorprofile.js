import SideBar from "./mentorsidebar";
import Navigation from "../Dashboard/mentorNavigation"
import PersonalDetails from "./mentordetails";
import styles from "./mentorprofile.module.css";
function Mentorprofile() {
  return (
    <>
      <Navigation />
      
      <SideBar />
      <div className={styles.pd}>
        <PersonalDetails />
      </div>
    </>
  );
}

export default Mentorprofile;
