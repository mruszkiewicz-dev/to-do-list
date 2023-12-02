import { useEffect, useState } from "react";

export const UseTaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    fetch("http://localhost:3004/data")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  };

  const addUser = (newUser) => {
    fetch("http://localhost:3004/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newUser,
      }),
    }).then(() => {
      setTasks((prev) => [...prev, newUser]);
    });
  };

  const updateTaskStatus = (taskId, newStatus) => {
    fetch(`http://localhost:3004/data/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: newStatus,
      }),
    }).then(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      );
    });
  };

  useEffect(() => {
    fetchTasks();
  }, [tasks]); 

  return { tasks, addUser, updateTaskStatus };
};
