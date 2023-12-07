import { Flex, Heading, Highlight, Box } from "@chakra-ui/react";
import { TasksList } from "./components/TasksList";
import { AddTask } from "./components/AddTask";

function App() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      m={10}
      flexDirection="column"
    >
      <Heading>
        <Highlight
          query="zadań"
          styles={{ px: "3", py: "1", rounded: "full", bg: "blue.300" }}
        >
          Lista zadań
        </Highlight>
      </Heading>
      <Box mt={10}>
        <AddTask />
      </Box>
      <Box mt={5}>
        <TasksList />
      </Box>
    </Flex>
  );
}

export default App;
