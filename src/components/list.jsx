import { TableContainer, Table, StackDivider, Tbody } from "@chakra-ui/react";
import { ItemTask } from "./item-task";
import { UseTaskList } from "../api/useTaskList";
import { HeaderList } from "./header-list";

export const List = () => {
  const { task } = UseTaskList();
  return (
    <>
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
            {task.map((item) => (
              <ItemTask key={item.id} {...item} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
