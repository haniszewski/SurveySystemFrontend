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
  const [questions, setQuestions] = useState<QuestionListItem[]>([]);

  function addQuestion(type: QuestionType) {
    setQuestions((questions) => [
      ...questions,
      {
        type: type,
        order: questions.length + 1,
      },
    ]);

    return questions.length + 1;
  }

  function removeQuestion(id: number) {
    setQuestions((questions) =>
      questions
        .filter(({ order }) => order !== id)
        .map((question, idx) => ({ ...question, order: idx + 1 })),
    );
  }

  return (
    <div className="flex w-full flex-col gap-5">
      {questions.map((question, idx) => (
        <NewQuestionBlock
          deleteHandler={removeQuestion}
          key={idx}
          id={`${idx}`}
          type={question.type}
        />
      ))}
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
