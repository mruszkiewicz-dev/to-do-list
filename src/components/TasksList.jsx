import { useEffect, useState } from "react";
import { TableContainer, Table, StackDivider, Tbody } from "@chakra-ui/react";
import { ItemTask } from "./ItemTask";
import { HeaderList } from "./HeaderList";
import { Search } from "./Search";
import { useApi } from "../api/useApi";

export const TasksList = () => {
  const [phrase, setPhrase] = useState("");
  const [tasks, setTasks] = useState([]);
  
  const { getTasks } = useApi();

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleSearchChange = (searchValue) => {
    setPhrase(searchValue);
  };
  return (
    <>
      {console.log(tasks)}
      <Search onSearchChange={handleSearchChange} />
      <TableContainer
        shadow="md"
        borderWidth="1px"
        p={5}
        borderRadius="lg"
        spacing={22}
        align="stretch"
        divider={<StackDivider borderColor="gray.200" />}
        minW="100%"
      >
        <Table variant="simple">
          <HeaderList />
          <Tbody>
            {tasks
              .filter(
                (task) =>
                  task &&
                  task.name &&
                  task.name.includes(phrase) &&
                  task.status === "To do"
              )
              .map((item) => (
                <ItemTask key={item.id} {...item} />
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer
        shadow="md"
        borderWidth="1px"
        mt={4}
        p={5}
        borderRadius="lg"
        spacing={22}
        align="stretch"
        divider={<StackDivider borderColor="gray.200" />}
      >
        <Table variant="simple">
          <HeaderList />
          <Tbody>
            {tasks
              .filter(
                (task) =>
                  task &&
                  task.name &&
                  task.name.includes(phrase) &&
                  task.status === "Done"
              )
              .map((item) => (
                <ItemTask key={item.id} {...item} />
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
