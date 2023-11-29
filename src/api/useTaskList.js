import { useEffect, useState } from "react";

export const UseTaskList = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/data")
      .then((res) => res.json())
      .then((data) => setTask(data))
      .catch((err) => console.error(err));
  }, [task]);

  const addUser = (newUser) => {
    fetch("http://localhost:3004/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newUser,
      }),
    }).then(setTask((prev) => [...prev, newUser]));

    /*     setTask((prev) => [...prev, newUser]);
     */
  };
  return { task, addUser };
};
