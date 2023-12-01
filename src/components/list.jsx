import { useState } from "react";
import { TableContainer, Table, StackDivider, Tbody } from "@chakra-ui/react";
import { ItemTask } from "./item-task";
import { UseTaskList } from "../api/useTaskList";
import { HeaderList } from "./header-list";
import { Search } from "./search";

export const List = () => {
  const [phrase, setPhrase] = useState("");
  const { tasks } = UseTaskList();
  const handleSearchChange = (searchValue) => {
    setPhrase(searchValue)
    console.log("Nowa wartość wyszukiwania:", searchValue);
  };
  return (
    <>
      <Search onSearchChange={handleSearchChange} />
      <TableContainer
        shadow="md"
        borderWidth="1px"
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
              .filter((task) => task && task.name && task.name.includes(phrase))
              .map((item) => (
                <ItemTask key={item.id} {...item} />
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
