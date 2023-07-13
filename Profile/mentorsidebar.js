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
          
          <li onClick={() => navigate("/MentorDash")}>Home</li>
        </ul>
      </div>
    </>
  );
}
export default SideBar;
