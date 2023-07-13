import styles from "./Fill.module.css";
function Fill(props) {
  return (
    <button className={styles.fill} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export default Fill;
