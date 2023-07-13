import Card from "../UI/Card";
import styles from "./quizlistitem.module.css";
function Querylistitem(props) {
  return (
    <Card>
      <div className={styles.continueItem}>
        <h2>{props.sid}</h2>
        <h2>{props.query}</h2>

       
      </div>
    </Card>
  );
}

export default Querylistitem;
