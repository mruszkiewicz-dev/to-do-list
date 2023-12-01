import { useState } from "react";
import { Input, Box } from "@chakra-ui/react";
import _debounce from "lodash/debounce";

export const Search = ({ onSearchChange }) => {
  const [serachValue, setSearchValue] = useState("");

  const debouncedSearch = _debounce((value) => {
    onSearchChange(value);
  }, 500);

  const handleChange = (e) => {
    const newSearchValue = e.target.value;
    setSearchValue(newSearchValue);

    debouncedSearch(newSearchValue);
  };
  return (
    <Box my={4}>
      <Input placeholder="Wyszukaj zadanie" onChange={handleChange} />
    </Box>
  );
};
