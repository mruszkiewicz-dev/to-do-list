import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export const ControlInput = ({ label, name, value, onChange }) => (
  <FormControl>
    <FormLabel>{label}</FormLabel>
    <Input
      id={name}
      name={name}
      value={value}
      onChange={(e) => onChange({ [name]: e.target.value })}
    />
  </FormControl>
);
