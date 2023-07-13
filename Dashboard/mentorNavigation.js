import styles from "./Navigation.module.css";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import notification from "../../images/bell.png";
import user from "../../images/user.png";
import Studentqueries from "./Studentqueries";
function Navigation() {
  let navigate = useNavigate();
  return (
    <>
      <div className={styles.head}>
        <ul>
          <li>
            <img
              src={user}
              alt="pop cat"
              onClick={() => navigate("/Mentorprofile")}
            ></img>
          </li>
          <li>
            <img src={notification} alt="pop cat"></img>
          </li>
          <li onClick={() => navigate("/Studentqueries")}>Student Queries</li>
          <li onClick={() => navigate("/MentorQ")}>Quizzes</li>
          <li onClick={() => navigate("/MentorDash")}>Course Statistics</li>
        </ul>
      </div>
    </>
  );
}
export default Navigation;
