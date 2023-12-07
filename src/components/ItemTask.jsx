import { Tr, Td } from "@chakra-ui/react";
import { StatusIcon } from "./StatusIcon";
import { IconButton } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useApi } from "../api/useApi";

export const ItemTask = ({ id, name, date, status, priority }) => {
  const [taskStatus, setTaskStatus] = useState(status);

  const { updateTaskStatus } = useApi();

  const handleClick = () => {
    const newStatus = taskStatus === "Done" ? "To do" : "Done";
    setTaskStatus(newStatus);
    updateTaskStatus(id, newStatus);
  };

  return (
    <Tr>
      <Td>
        <IconButton
          isRound={true}
          variant={taskStatus === "To do" ? "outline" : "solid"}
          colorScheme="teal"
          aria-label="Done"
          fontSize="10px"
          size={8}
          p={2}
          icon={<CheckIcon />}
          onClick={handleClick}
        />
      </Td>
      <Td>{name}</Td>
      <Td>{date ? date.split("T")[0] : "Brak daty"}</Td>
      <Td>{taskStatus}</Td>
      <Td>
        <StatusIcon status={priority} />
      </Td>
    </Tr>
  );
};
