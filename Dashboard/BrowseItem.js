import styles from "./BrowseItem.module.css";
import Pulse from "../UI/Pulse";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";

function BrowseItem(props) {
  let navigate = useNavigate();
  return (
    <Card className={styles.browseItem}>
      <img src={props.image}></img>
      <h1>{props.name}</h1>
      <hr />
      <p>{props.desc}</p>

      <Pulse onClick={() => navigate("/coursePage/" + props.courseId)}>
        Learn More
      </Pulse>
    </Card>
  );
}

export default BrowseItem;
