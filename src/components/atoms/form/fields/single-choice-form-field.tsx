"use client";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface SingleInputFormFieldProps extends FormField {
  options: {
    value: string;
    label: string;
  }[];
}

const SingleChoiceFormField = ({
  name,
  options,
}: SingleInputFormFieldProps) => {
  const { register } = useFormContext();

  return (
    <RadioGroup>
      {options.map(({ value, label }) => (
        <FormControlLabel
          key={value}
          value={value}
          control={<Radio {...register(name)} />}
          label={label}
        />
      ))}
    </RadioGroup>
  );
};

export default SingleChoiceFormField;
