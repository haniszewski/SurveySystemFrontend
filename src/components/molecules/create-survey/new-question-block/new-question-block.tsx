"use client";

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import NewQuestionBlockEditing from "./new-question-block-editing";
import NewQuestionBlockSaved from "./new-question-block-saved";
import EditButton from "@/components/atoms/new-survey/edit-button";
import DeleteButton from "@/components/atoms/new-survey/delete-button";
import SaveButton from "@/components/atoms/new-survey/save-button";
import { QuestionType } from "@/types/questionType";

const FieldTypeNameMap = {
  [QuestionType.SINGLE_CHOICE]: "Pole jednokrotnego wyboru",
  [QuestionType.MULTI_CHOICE]: "Pole wielokrotnego wyboru",
  [QuestionType.TEXT]: "Pole tekstowe",
  [QuestionType.NUMBER]: "Pole numeryczne",
};

const NewQuestionBlock = ({
  id,
  type,
  deleteHandler,
}: {
  id: string;
  type: QuestionType;
  deleteHandler: (id: number) => void;
}) => {
  const [isEditing, setIsEditing] = useState(true);
  const { register, unregister, trigger, formState } = useFormContext();
  const { errors } = formState;

  useEffect(() => {
    register(`${id}.type`, { value: type });
  }, []);

  function onDelete() {
    unregister(id);
    deleteHandler(parseInt(id));
  }

  function onSave() {
    trigger(`${id}`)
      .then((result) => {
        if (result) {
          setIsEditing(false);
        }
      })
      .catch(() => {});
  }

  return (
    <div className="new-question-block group flex w-full items-center justify-between rounded-md bg-white p-5 shadow">
      <div className="question w-5/6">
        <div className="mb-2">
          <h2 className="text-lg">
            {/* eslint-disable-next-line */}
            {/* @ts-ignore */}
            <span className="font-bold">{FieldTypeNameMap[type]} </span>
            <span className="text-gray-400">{"(cannot be changed)"}</span>
          </h2>
        </div>
        {isEditing ? (
          <NewQuestionBlockEditing id={id} type={type} />
        ) : (
          <NewQuestionBlockSaved id={id} type={type} />
        )}
      </div>
      <div
        className={`buttons flex w-1/6 justify-end gap-2 ${
          !isEditing && "opacity-0 transition-opacity group-hover:opacity-100"
        }`}
      >
        {!isEditing ? (
          <>
            <EditButton onClick={() => setIsEditing(!isEditing)} />
            <DeleteButton onClick={onDelete} />
          </>
        ) : (
          <SaveButton onClick={onSave} />
        )}
      </div>
    </div>
  );
};

export default NewQuestionBlock;
