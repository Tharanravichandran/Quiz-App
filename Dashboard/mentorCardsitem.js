import styles from "./mentorcard.module.css";
import Pulse from "../UI/Pulse";
import Card from "../UI/Card";
function MentorItem(props) {
  return (
    <Card className={styles.browseItem}>
      <h1>{props.name}</h1>
      <hr />
      <p>{props.desc}</p>
      
    </Card>
  );
}

export default MentorItem;
