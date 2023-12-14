"use client";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const SingleQuestionAnalysisSchema = ({ question }: { question: Question }) => {
  const { register, setValue, getValues, getFieldState, formState } =
    useFormContext();

  function createName(name: string) {
    return `basic.${question.order}.${name}`;
  }

  useEffect(() => {
    register(createName("order"), { value: question.order });
    register(createName("type"), { value: "pie" });
    register(createName("display"), { required: "To pole jest wymagane" });
    register(createName("show_total"), { value: true });
  }, []);

  useEffect(() => {}, [formState.errors]);

  function handleChange(event: SelectChangeEvent) {
    setValue(createName("display"), event.target.value);
  }

  return (
    <div className="new-question-block group flex w-full items-center justify-between rounded-md bg-white p-5 shadow">
      <div className="question w-5/6">
        <h3 className="mb-3 text-lg font-bold">{question.text}</h3>
        <FormControl
          sx={{ width: "100%" }}
          error={!!getFieldState(createName("display")).error}
        >
          <InputLabel id={`question-${question.order}-display`}>
            {" "}
            Wybierz typ analizy{" "}
          </InputLabel>
          <Select
            labelId={`question-${question.order}-display`}
            id={`question-${question.order}-display`}
            value={getValues(createName("display")) as string}
            onChange={handleChange}
            label="Wybierz typ analizy"
          >
            <MenuItem value="percentage">
              Procentowy rozkład odpowiedzi
            </MenuItem>
            <MenuItem value="count">Liczbowy rozkład odpowiedzi</MenuItem>
          </Select>
          {!!getFieldState(createName("display")).error && (
            <FormHelperText>
              To pole jest wymagane. Wybierz typ analizy.
            </FormHelperText>
          )}
        </FormControl>
      </div>
    </div>
  );
};

export default SingleQuestionAnalysisSchema;
