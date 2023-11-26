import { Tr, Td } from "@chakra-ui/react";

export const ItemTask = ({ id, name, date, status, priority }) => (
  <Tr>
    <Td>{id}</Td>
    <Td>{name}</Td>
    <Td>{date}</Td>
    <Td>{status}</Td>
    <Td>{priority}</Td>
  </Tr>
);
