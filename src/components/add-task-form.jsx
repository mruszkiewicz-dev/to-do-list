import { useReducer } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { ControlInput } from "./control-input";
import { UseTaskList } from "../api/useTaskList";

const NEXT = "NEXT";
const PREV = "PREV";
const UPDATE_DATA = "UPDATE_DATA";
const SEND = "SEND";

const formReducer = (view, action) => {
  switch (action.type) {
    case PREV:
      return {
        ...view,
        step: view.step - 1,
      };
    case NEXT:
      return {
        ...view,
        step: view.step + 1,
      };
    case UPDATE_DATA:
      return {
        ...view,
        data: {
          ...view.data,
          ...action.payload,
        },
      };
    case SEND:
      return {
        data: { ...action.payload },
        step: 1,
      };
    default:
      return view;
  }
};

const stepFields = {
  1: ["name"],
  2: ["date"],
  3: ["status"],
  4: ["priority"],
};

const InputFileds = ({ fields, currentStep, onChange }) => (
  <>
    {fields
      .filter((item) => stepFields[currentStep]?.includes(item.name))
      .map((item) => (
        <ControlInput
          type={item.type}
          key={item.name}
          label={item.label}
          name={item.name}
          value={item.value}
          options={item.options}
          onChange={(value) => onChange({ type: UPDATE_DATA, payload: value })}
        />
      ))}
  </>
);

export const AddTaskForm = ({ setClose }) => {
  const [view, dispatch] = useReducer(formReducer, {
    step: 1,
    data: { status: "To do", priority: "2" },
  });

  const { addUser } = UseTaskList();

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(view.data);
    setClose();
  };

  const fields = [
    {
      name: "name",
      value: view.data.name,
      label: "Nazwa zdania",
      type: "input",
    },
    { name: "date", value: view.data.date, label: "Data", type: "date" },
    {
      name: "status",
      value: view.data.status,
      label: "Status",
      type: "input",
    },
    {
      name: "priority",
      value: view.data.priority,
      label: "Priorytet",
      type: "select",
      options: [
        { value: 1, name: "Wysoki" },
        { value: 2, name: "Średni" },
        { value: 3, name: "Niski" },
      ],
    },
  ];
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Flex alignItems="center" justifyContent="center" direction="column">
          <InputFileds
            fields={fields}
            onChange={dispatch}
            currentStep={view.step}
          />
          <Flex alignItems="center" justifyContent="center" direction="row">
            {view.step > 1 && (
              <Button
                m={2}
                type="button"
                onClick={() => dispatch({ type: PREV })}
              >
                Cofnij
              </Button>
            )}
            {view.step < 4 && (
              <Button
                m={2}
                type="button"
                onClick={() => dispatch({ type: NEXT })}
              >
                Dalej
              </Button>
            )}
            {view.step === 4 && (
              <Button m={2} type="submit">
                Zapisz
              </Button>
            )}
          </Flex>
        </Flex>
      </form>
    </>
  );
};
