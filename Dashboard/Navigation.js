import styles from "./Navigation.module.css";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import notification from "../../images/bell.png";
import user from "../../images/user.png";
function Navigation() {
  let navigate = useNavigate();
  return (
    <>
      <div className={styles.head}>
        <ul>
          <li>
            <img
              src={user}
              alt="pop cat "
              onClick={() => navigate("/StudentProfile")}
            ></img>
          </li>
          <li>
            <img src={notification} alt="pop cat"></img>
          </li>
          <li>Cart</li>
          <li>About Us</li>
          <li onClick={() => navigate("/coursePage")}>Courses</li>
        </ul>
      </div>
    </>
  );
}
export default Navigation;
