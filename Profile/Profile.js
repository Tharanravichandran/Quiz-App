import SideBar from "./SideBar";

import PersonalDetails from "./PersonalDetails";
import styles from "./Profile.module.css";
function Profile() {
  return (
    <>
      
      <SideBar />
      <div className={styles.pd}>
        <PersonalDetails />
      </div>
    </>
  );
}

export default Profile;
