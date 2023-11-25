"use client";

import { useFormContext } from "react-hook-form";
import { useState } from "react";
import TextFormField from "@/components/atoms/form/fields/text-form-field";
import DeleteButton from "@/components/atoms/new-survey/delete-button";

const NewOptionsList = ({ id }: { id: number }) => {
  const { getValues, register, unregister } = useFormContext();

  const [choices, setChoices] = useState<Record<number, Choice>>(
    (getValues(`${id}.choices`) as Record<number, Choice>) ?? {},
  );

  function createName(order: number) {
    return `${id}.choices.${order}`;
  }

  const addChoice = () => {
    const newId = parseInt(Object.keys(choices).at(-1) ?? "-1") + 1;
    register(`${createName(newId)}`);
    register(`${createName(newId)}.order`, {
      value: Object.keys(choices).length,
    });
    setChoices((choices) => ({
      ...choices,
      [newId]: {
        order: Object.keys(choices).length,
        text: "",
      },
    }));
  };

  const removeChoice = (order: number) => {
    const updatedChoices = { ...choices };
    delete updatedChoices[order];
    unregister(`${createName(order)}`);

    Object.keys(updatedChoices).forEach((key, idx) => {
      const choice = updatedChoices[parseInt(key)];
      choice.order = idx;
    });

    setChoices(updatedChoices);
  };

  return (
    <>
      <ol className="flex flex-col justify-center gap-2">
        {Object.values(choices).map(({ order }) => (
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
