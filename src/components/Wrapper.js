import React, { useState, useEffect } from "react";
import CreateUser from "./Users/CreateUser";
import UserList from "./Users/UserList";
import axios from "axios";

const Wrapper = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.slice(0, 8).map((user) => {
          return {
            inputName: user.name,
            inputAge: Math.floor(Math.random() * 100),
            id: user.id,
          };
        });
        setUserList(users);
      })
      .catch((err) => console.log(err));
  }, []);
  // const users = [
  //   {
  //     inputName: "John",
  //     inputAge: "19",
  //     id: Math.random().toString(),
  //   },
  //   {
  //     inputName: "Leyla",
  //     inputAge: "20",
  //     id: Math.random().toString(),
  //   },
  // ];
  //fakeIp fetch axios

  const createUserHandler = (name, age) => {
    setUserList((prevUser) => {
      return [
        ...prevUser,
        { inputName: name, inputAge: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <CreateUser onCreateUser={createUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default Wrapper;
