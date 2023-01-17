import classes from "./Modal.module.css";
import { Fragment } from "react";
import  ReactDOM  from 'react-dom';
const Backdrop = (props) => {
  return <div className={classes.backdrop}/>
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalelement = document.getElementById("overlays");
const Modal = (props) => {
  return <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalelement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalelement)}
    </Fragment>
  
};
export default Modal;
