import { Tr, Td } from "@chakra-ui/react";
import { StatusIcon } from "./status-icon";

export const ItemTask = ({ id, name, date, status, priority }) => {
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{date}</Td>
      <Td>{status}</Td>
      <Td>
        <StatusIcon status={priority} />
      </Td>
    </Tr>
  );
};
