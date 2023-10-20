"use client";

import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface MultiChoiceFormFieldProps extends FormField {
  options: {
    value: string;
    label: string;
  }[];
}

const MultiChoiceFormField = ({ name, options }: MultiChoiceFormFieldProps) => {
  const { register } = useFormContext();
  return (
    <FormGroup>
      {options.map(({ value, label }) => (
        <FormControlLabel
          key={value}
          value={value}
          control={<Checkbox {...register(name)} />}
          label={label}
        />
      ))}
    </FormGroup>
  );
};

export default MultiChoiceFormField;
