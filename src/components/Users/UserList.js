import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = ({users}) => {
  return (
     <Card className={styles.users}>
     <ul>
       {users.map((user) => (
         <li key={user.id}>
           {user.inputName} - {user.inputAge} лет
         </li>
       ))}
     </ul>
   </Card>
  );
};

export default UserList;
