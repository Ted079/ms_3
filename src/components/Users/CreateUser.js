import React, { useState, Fragment, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./CreateUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = ({ onCreateUser }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();


  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const createUserHandler = (e) => {
    e.preventDefault();

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "These fields cannot be empty",
      });
      return;
    }

    if (+inputAge < 1) {
      setError({
        title: "Incorrect age",
        message: "Age must be greater than 0",
      });
      return;
    }

    onCreateUser(inputName, inputAge);
    setInputName("");
    setInputAge("");
  };

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setInputAge(e.target.value);
  };

  const closeModalHandler = () => {
    setError();
  }

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onCloseModal={closeModalHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={nameChangeHandler}
            value={inputName}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={inputAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default CreateUser;
