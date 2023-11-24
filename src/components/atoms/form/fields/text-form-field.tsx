"use client";

import TextField, { type TextFieldVariants } from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";

interface TextFieldProps extends FormField {
  variant?: TextFieldVariants;
  type?: "text" | "number";
  defaultValue?: string;
}

const TextFormField = ({
  name,
  label,
  variant = "standard",
  type = "text",
  disabled = false,
  defaultValue,
}: TextFieldProps) => {
  const { register } = useFormContext();
  return (
    <div className="w-full">
      {disabled ? (
        <TextField
          type={type}
          disabled
          label={label}
          variant={variant}
          sx={{ width: "100%" }}
        />
      ) : (
        <TextField
          type={type}
          {...register(name)}
          label={label}
          variant={variant}
          sx={{ width: "100%" }}
          value={defaultValue}
        />
      )}
    </div>
  );
};

export default TextFormField;
