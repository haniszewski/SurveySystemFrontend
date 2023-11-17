"use client";

import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface MultiChoiceFormFieldProps extends FormField {
  choices: {
    order: string;
    text: string;
  }[];
}

const MultiChoiceFormField = ({ name, choices }: MultiChoiceFormFieldProps) => {
  const { register } = useFormContext();
  return (
    <FormGroup>
      {choices.map(({ order, text }) => (
        <FormControlLabel
          key={order}
          value={order}
          control={<Checkbox {...register(name)} />}
          label={text}
        />
      ))}
    </FormGroup>
  );
};

export default MultiChoiceFormField;
