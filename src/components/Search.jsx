import { Input, Box } from "@chakra-ui/react";

export const Search = ({ onSearchChange }) => {
  const handleChange = (e) => {
    const newSearchValue = e.target.value;
    onSearchChange(newSearchValue);
  };
  return (
    <Box my={4}>
      <Input placeholder="Wyszukaj zadanie" onChange={handleChange} />
    </Box>
  );
};
