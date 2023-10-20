"use client";

import TextField, { type TextFieldVariants } from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";

interface TextFieldProps extends FormField {
  variant?: TextFieldVariants;
  type?: "text" | "number";
}

const TextFormField = ({
  name,
  label,
  variant = "standard",
  type = "text",
}: TextFieldProps) => {
  const { register } = useFormContext();
  return (
    <div className="w-full">
      <TextField
        type={type}
        {...register(name)}
        label={label}
        variant={variant}
        sx={{ width: "100%" }}
      />
    </div>
  );
};

export default TextFormField;
