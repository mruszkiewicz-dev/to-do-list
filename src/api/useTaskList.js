import { useEffect, useState } from "react";

export const UseTaskList = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
   fetch('http://localhost:3004/tasks')
     .then((res) =>  res.json())
     .then((data) => setTask(data))
     .catch((err) => console.error(err));
 }, []);
 

  return {task}
};
