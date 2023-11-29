import { Flex, Heading, Highlight, Box } from "@chakra-ui/react";
import { List } from "./components/list";
import { AddTask } from "./components/add-task";

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
        <AddTask/>
      </Box>
      <Box mt={5}>
        <List />
      </Box>
    </Flex>
  );
}

export default App;
