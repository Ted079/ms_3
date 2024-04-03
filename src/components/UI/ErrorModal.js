import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, onCloseModal }) => {
  return (
    <div>
      <div onClick={onCloseModal} className={styles.backdrop}></div>
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
    </div>
  );
};

export default ErrorModal;
