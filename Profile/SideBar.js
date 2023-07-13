import "./SideBar.css";
import { useNavigate } from "react-router-dom";
function SideBar() {
  let navigate = useNavigate();
  return (
    <>
      <div class="vertical-nav">
        <ul className="listOptions">
          <li>Personal Details</li>
          <li>Analytics And report</li>
          <li>Courses Enrolled</li>
          <li onClick={() => navigate("/StudentDashboard")}>Home</li>
        </ul>
      </div>
    </>
  );
}
export default SideBar;
