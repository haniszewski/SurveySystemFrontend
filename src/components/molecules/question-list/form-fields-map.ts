import React from "react";
import TextFormField from "@/components/atoms/form/fields/text-form-field";
import SingleChoiceFormField from "@/components/atoms/form/fields/single-choice-form-field";
import MultiChoiceFormField from "@/components/atoms/form/fields/multi-choice-form-field";

const formFieldsMap: Record<QuestionType, React.ElementType> = {
  text: TextFormField,
  "single-choice": SingleChoiceFormField,
  "multi-choice": MultiChoiceFormField,
};

export const createQuestionComponent = (
  type: QuestionType,
  props?: {
    [key: string]: unknown;
  },
) => {
  return React.createElement(formFieldsMap[type], props);
};
