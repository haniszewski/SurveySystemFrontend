"use client";

import { useFormContext } from "react-hook-form";
import { useState } from "react";
import TextFormField from "@/components/atoms/form/fields/text-form-field";
import DeleteButton from "@/components/atoms/new-survey/delete-button";

const NewOptionsList = ({ id }: { id: number }) => {
  const { getValues, register, unregister } = useFormContext();

  const [choices, setChoices] = useState<Choice[]>(
    ((getValues(`${id}.choices`) as Choice[]) ?? []).filter(
      (choice) => choice != null,
    ),
  );

  function createName(order: number) {
    return `${id}.choices.${order}`;
  }

  const addChoice = () => {
    console.log(choices);
    register(`${createName(choices.length)}.order`, { value: choices.length });
    setChoices((choices) => [
      ...choices,
      {
        order: choices.length,
        text: "",
      },
    ]);
  };

  const removeChoice = (order: number) => {
    console.log(createName(order));
    setChoices((choices) =>
      choices
        .filter((choice) => choice.order !== order)
        .map((choice, idx) => ({ ...choice, order: idx })),
    );
  };

  return (
    <>
      <ol className="flex flex-col justify-center gap-2">
        {choices.map(({ order }) => (
          <li key={order} className="flex justify-between gap-2">
            <TextFormField
              name={`${createName(order)}.text`}
              label={`Option ${order}`}
            />
            <DeleteButton onClick={() => removeChoice(order)} />
          </li>
        ))}
      </ol>
      <button type="button" onClick={addChoice}>
        Add choice
      </button>
    </>
  );
};

export default NewOptionsList;
