import { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { AddTaskForm } from "./add-task-form";

export const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex alignItems="center" justifyContent="center" direction="column" mt={5}>
      {isOpen && (
        <Box>
          <AddTaskForm />
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
