"use client";

import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import TextFormField from "@/components/atoms/form/fields/text-form-field";
import DeleteButton from "@/components/atoms/new-survey/delete-button";

const NewOptionsList = ({ id }: { id: number }) => {
  const { getValues, register, unregister } = useFormContext();

  const [choices, setChoices] = useState<Record<number, Choice>>(
    (getValues(`${id}.choices`) as Record<number, Choice>) ?? {
      0: {
        order: 0,
        text: "",
      },
    },
  );

  function createName(order: number) {
    return `${id}.choices.${order}`;
  }

  const addChoice = () => {
    if (Object.keys(choices).length >= 10) return;
    const newId = parseInt(Object.keys(choices).at(-1) ?? "-1") + 1;
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
    if (Object.keys(choices).length <= 1) return;
    setChoices((choices) => {
      const updatedChoices = { ...choices };
      delete updatedChoices[order];
      unregister(`${createName(order)}`);

      Object.keys(updatedChoices).forEach((key, idx) => {
        const choice = updatedChoices[parseInt(key)];
        choice.order = idx;
      });

      return updatedChoices;
    });
  };

  return (
    <div>
      <p className="mt-3 text-lg font-bold">Options:</p>
      <div className="flex flex-col items-center">
        <ol className="flex w-full flex-col justify-center gap-2">
          {Object.keys(choices).map((id, idx) => (
            <li key={id} className="flex items-end justify-between gap-4 pl-4">
              <p className="w-5 text-lg">{idx + 1}.</p>
              <TextFormField
                name={`${createName(parseInt(id))}.text`}
                label={`Option ${idx + 1}`}
                required
              />
              {Object.keys(choices).length > 1 && (
                <DeleteButton onClick={() => removeChoice(parseInt(id))} />
              )}
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={addChoice}
          className="mt-4 flex items-center gap-2"
        >
          <PlusCircleIcon className="w-5" /> Add option
        </button>
      </div>
    </div>
  );
};

export default NewOptionsList;
