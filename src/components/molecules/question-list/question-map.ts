import React from "react";
import TextFormField from "@/components/atoms/form/fields/text-form-field";
import SingleChoiceFormField from "@/components/atoms/form/fields/single-choice-form-field";

const questionMap: Record<QuestionType, React.ElementType> = {
  text: TextFormField,
  "single-choice": SingleChoiceFormField,
};

export const createQuestionComponent = (
  type: QuestionType,
  props?: {
    [key: string]: unknown;
  },
) => {
  return React.createElement(questionMap[type], props);
};
