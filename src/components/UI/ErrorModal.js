import React, { Fragment } from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import ReactDom from "react-dom";

const Backdrop = ({ onCloseModal }) => {
  return <div onClick={onCloseModal} className={styles.backdrop}></div>;
};

const Modal = ({ title, message, onCloseModal }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onCloseModal}>Close</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onCloseModal }) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onCloseModal={onCloseModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDom.createPortal(
        <Modal title={title} message={message} onCloseModal={onCloseModal} />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default ErrorModal;
