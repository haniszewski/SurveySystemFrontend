"use client";

import TextField, { type TextFieldVariants } from "@mui/material/TextField";
import { useEffect } from "react";
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
  required = false,
}: TextFieldProps) => {
  const { register, getFieldState } = useFormContext();
  const { error } = getFieldState(name);

  useEffect(() => {
    console.log(error);
  }, [error]);

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
          {...(required
            ? register(name, { required: "To pole jest wymagane." })
            : register(name))}
          error={!!error}
          helperText={error?.message}
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
