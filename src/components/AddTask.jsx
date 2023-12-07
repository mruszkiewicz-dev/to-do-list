import { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { AddTaskForm } from "./AddTaskForm";

export const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setClose = () => setIsOpen(false)

  return (
    <Flex alignItems="center" justifyContent="center" direction="column" mt={5}>
      {isOpen && (
        <Box>
          <AddTaskForm setClose={setClose} />
        </Box>
      )}
      <Button
        m={2}
        colorScheme={!isOpen ? "whatsapp" : "red"}
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? "Dodaj zadanie" : "Anuluj"}
      </Button>
    </Flex>
  );
};
