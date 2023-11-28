"use client";

import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { type SelectChangeEvent } from "@mui/material";
import NewOptionsList from "./new-options-list";
import TextFormField from "@/components/atoms/form/fields/text-form-field";
import FieldTypeSelect from "@/components/atoms/new-survey/field-type-select";
import { QuestionType } from "@/types/questionType";

const NewQuestionBlockEditing = ({
  id,
  type,
}: {
  id: string;
  type: QuestionType;
}) => {
  const { setValue, resetField } = useFormContext();
  const [fieldType, setFieldType] = useState<QuestionType>(type);

  function createName(name: string) {
    return `${id}.${name}`;
  }

  function handleChange(event: SelectChangeEvent) {
    const newType = parseInt(event.target.value);
    resetField(id);
    setFieldType(newType);
    setValue(createName("type"), newType);
  }

  const hasOptions =
    type === QuestionType.SINGLE_CHOICE || type === QuestionType.MULTI_CHOICE;

  return (
    <>
      <div className="mb-2">
        <h2 className="text-lg">
          <FieldTypeSelect id={id} value={fieldType} onChange={handleChange} />
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        <TextFormField
          name={createName("text")}
          label="Treść pytania"
          required
        />
        <TextFormField
          name={createName("details")}
          label="Dodatkowe informacje (opcjonalne)"
        />
        {!hasOptions ? (
          <TextFormField
            name={createName("label")}
            label="Placeholder (opcjonalny)"
          />
        ) : (
          <NewOptionsList id={Number(id)} />
        )}
      </div>
    </>
  );
};

export default NewQuestionBlockEditing;
