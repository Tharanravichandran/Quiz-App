import styles from "./Pulse.module.css";
function Pulse(props) {
  return (
    <button className={styles.pulse} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export default Pulse;
