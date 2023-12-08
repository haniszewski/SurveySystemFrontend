"use client";
import { TuiDateRangePicker } from "nextjs-tui-range-picker";
//import { DatePicker } from "@mui/lab";
import { TextField, type TextFieldProps } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { SetStateAction, useState } from "react";

interface DateFormFieldProps extends FormField {
  label: string;
  name: string;
}

const DateFormField = ({ name, label }: DateFormFieldProps) => {
  // const { register } = useFormContext();
  const options = {
    language: "en",
    format: "MM-dd YYYY",
  };
  return (
    <div>
      <TuiDateRangePicker
        handleChange={(date: any) => {
          console.log(date);
        }}
        // options={options}
        inputWidth={80}
        containerWidth={200}
        startpickerDate={new Date("2023-01-02")}
        endpickerDate={new Date("2023-01-30")}
      />
    </div>
  );
};

export default DateFormField;
