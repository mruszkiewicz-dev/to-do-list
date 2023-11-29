import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

export const ControlInput = ({
  label,
  name,
  value,
  onChange,
  type,
  options,
}) => (
  <FormControl>
    <FormLabel>{label}</FormLabel>
    {type === "select" && (
      <Select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange({ [name]: e.target.value })}
      >
        {options &&
          options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
      </Select>
    )}

    {type !== "select" && (
      <Input
        isReadOnly={name === "status" ? true : false}
        id={name}
        name={name}
        value={value}
        type={type === "date" ? "datetime-local" : ""}
        onChange={(e) => onChange({ [name]: e.target.value })}
      />
    )}
  </FormControl>
);
