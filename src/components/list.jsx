import { VStack, StackDivider } from "@chakra-ui/react";
import { ItemTask } from "./item-task";
import { UseTaskList } from "../api/useTaskList";

const HeaderList = () => <p>nagłowek</p>;

export const List = () => {

   const { task } = UseTaskList()

   return (
    <>
    <VStack
      shadow="md"
      borderWidth="1px"
      p={5}
      borderRadius="lg"
      spacing={4}
      align="stretch"
      divider={<StackDivider borderColor="gray.200" />}
    >
      <HeaderList />
      {task.map(item => <ItemTask key={item.id} />)}
      
    </VStack>
    </>
  );
};
