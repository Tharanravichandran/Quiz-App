import styles from "./SideBar.module.css";
import popCat from "../../images/pop-cat.jpg";
import { useNavigate } from "react-router-dom";
function SideBar(props) {
  let navigate = useNavigate();
  return (
    <>
      <div className={styles.verticalnav}>
        <ul className={styles.listOptions}>
          <img src={popCat} className={styles.logo} />

          {props.attributeList.map((attribute) => (
            <li onClick={() => navigate(attribute.link)}>{attribute.name}</li>
          ))}
          <li onClick={() => navigate("/StudentDashboard")}>Home</li>
        </ul>
      </div>
    </>
  );
}
export default SideBar;
