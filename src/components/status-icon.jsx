import { Icon } from "@chakra-ui/react";

export const StatusIcon = ({ status }) => {
  const getColor = (status) => {
    switch (status) {
      case 1:
        return "red.500";
      case 2:
        return "orange.500";
      case 3:
        return "green.500";
      default:
        return "gray.500";
    }
  };

  return (
    <Icon viewBox="0 0 200 200" color={getColor(status)}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
};
