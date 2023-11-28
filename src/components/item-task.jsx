import { Tr, Td, IconButton } from "@chakra-ui/react";
import { CircleIcon } from "@chakra-ui/icons";
import { StatusIcon } from "./status-icon";

export const ItemTask = ({ id, name, date, status, priority }) => {
  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>{date}</Td>
      <Td>{status}</Td>
      <Td>
        <StatusIcon status={priority} />
      </Td>
    </Tr>
  );
};
