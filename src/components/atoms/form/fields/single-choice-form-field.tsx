"use client";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface SingleInputFormFieldProps extends FormField {
  choices: {
    order: string;
    text: string;
  }[];
}

const SingleChoiceFormField = ({
  name,
  choices,
}: SingleInputFormFieldProps) => {
  const { register } = useFormContext();

  return (
    <RadioGroup>
      {choices.map(({ order, text }) => (
        <FormControlLabel
          key={order}
          value={order}
          control={<Radio {...register(name)} />}
          label={text}
        />
      ))}
    </RadioGroup>
  );
};

export default SingleChoiceFormField;
