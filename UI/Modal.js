import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
}
function ModalOverLay(props) {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
      <button onClick={props.onSelect}>Ok</button>
    </div>
  );
}

function Modal(props) {
  return (
    <Fragment>
      <Backdrop onClick={props.onClick} />
      <ModalOverLay onSelect={props.onClick}>{props.children}</ModalOverLay>
    </Fragment>
  );
}

export default Modal;
