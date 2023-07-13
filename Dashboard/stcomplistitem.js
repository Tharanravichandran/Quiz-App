import Card from "../UI/Card";
import styles from "./ContinueItem.module.css";
function ContinueItem(props) {
  return (
    <Card>
      <div className={styles.continueItem}>
        <h2>{props.cname}</h2>

        
      </div>
    </Card>
  );
}

export default ContinueItem;
