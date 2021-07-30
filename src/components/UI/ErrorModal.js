import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
const Backdrop = function (props) {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};
const Modal = function (props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      {Backdrop(props)} 
      {Modal(props)}
    </React.Fragment>,document.getElementById("modal-root")
  );
};

export default ErrorModal;
