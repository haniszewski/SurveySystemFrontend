"use client";

import { useState } from "react";
import NewQuestionBlock from "./new-question-block/new-question-block";
import NewQuestionButton from "@/components/atoms/new-survey/new-question-button";
import { QuestionType } from "@/types/questionType";

type QuestionListItem = {
  type: QuestionType;
  order: number;
};

const NewQuestionList = () => {
  const [questions, setQuestions] = useState<Record<number, QuestionListItem>>(
    {},
  );

  function addQuestion(type: QuestionType) {
    setQuestions((prevQuestions) => {
      const newOrder = parseInt(Object.keys(prevQuestions).at(-1) ?? "-1") + 1;
      return {
        ...prevQuestions,
        [newOrder]: {
          type: type,
          order: Object.keys(questions).length,
        },
      };
    });
  }

  function removeQuestion(id: number) {
    setQuestions((prevQuestions) => {
      const updatedQuestions = { ...prevQuestions };
      delete updatedQuestions[id];

      Object.keys(updatedQuestions).forEach((key, idx) => {
        const question = updatedQuestions[parseInt(key)];
        question.order = idx;
      });

      return updatedQuestions;
    });
  }

  return (
    <div className="flex w-full flex-col gap-5">
      {Object.keys(questions).map((questionId) => {
        const question = questions[parseInt(questionId)];
        return (
          <NewQuestionBlock
            deleteHandler={removeQuestion}
            key={questionId}
            id={questionId}
            type={question.type}
          />
        );
      })}
      <hr />
      <NewQuestionButton
        clickHandler={() => addQuestion(QuestionType.SINGLE_CHOICE)}
      />
      <button
        type="button"
        onClick={() => {
          console.log(questions);
        }}
      >
        show
      </button>
    </div>
  );
};

export default NewQuestionList;
