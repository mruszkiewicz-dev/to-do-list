export const useApi = () => {

  const getTasks = async () => {
    try {
      const res = await fetch("http://localhost:3004/data");
      const tasks = await res.json();
      return tasks;
    } catch (err) {
      console.error(err);
    }

  };

  const addTask = async (newUser) => {
    try {
      await fetch("http://localhost:3004/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      await fetch(`http://localhost:3004/data/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return { getTasks, updateTaskStatus, addTask };
};
