"use client";

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import NewQuestionBlockEditing from "./new-question-block-editing";
import NewQuestionBlockSaved from "./new-question-block-saved";
import EditButton from "@/components/atoms/new-survey/edit-button";
import DeleteButton from "@/components/atoms/new-survey/delete-button";
import SaveButton from "@/components/atoms/new-survey/save-button";
import { type QuestionType } from "@/types/questionType";

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
  // needed for formState to update
  // eslint-disable-next-line
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
          <EditButton onClick={() => setIsEditing(!isEditing)} />
        ) : (
          <SaveButton onClick={onSave} />
        )}
        <DeleteButton onClick={onDelete} />
      </div>
    </div>
  );
};

export default NewQuestionBlock;
