import Card from "../UI/Card";
import styles from "./quizlistitem.module.css";
function Stlist(props) {
  return (
    <Card>
      <div className={styles.continueItem}>
        <h2>{props.cname}</h2>     

       
      </div>
    </Card>
  );
}

export default Stlist;
