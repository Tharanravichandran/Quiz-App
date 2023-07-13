import Card from "../UI/Card";
import styles from "./quizlistitem.module.css";
function Quizlistitem(props) {
  return (
    <Card>
      <div className={styles.continueItem}>
        <h2>{props.qid}</h2>
        <h2>{props.qname}</h2>

       
      </div>
    </Card>
  );
}

export default Quizlistitem;
