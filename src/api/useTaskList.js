import { useEffect, useState } from "react";

export const UseTaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/data")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  }, [tasks]);

  const addUser = (newUser) => {
    fetch("http://localhost:3004/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newUser,
      }),
    }).then(setTasks((prev) => [...prev, newUser]));

    /*     setTask((prev) => [...prev, newUser]);
     */
  };
  return { tasks, addUser };
};
