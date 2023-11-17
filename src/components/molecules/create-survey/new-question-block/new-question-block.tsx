"use client";

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import NewQuestionBlockEditing from "./new-question-block-editing";
import NewQuestionBlockSaved from "./new-question-block-saved";
import EditButton from "@/components/atoms/new-survey/edit-button";
import DeleteButton from "@/components/atoms/new-survey/delete-button";
import SaveButton from "@/components/atoms/new-survey/save-button";

const NewQuestionBlock = ({
  id,
  type,
  deleteHandler,
}: {
  id: string;
  type: QuestionType;
  deleteHandler: (id: number) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const { register, setValue, unregister } = useFormContext();

  useEffect(() => {
    register(`${id}.type`);
    setValue(`${id}.type`, type);
  }, []);

  function onDelete() {
    unregister(id);
    deleteHandler(parseInt(id));
  }

  return (
    <div className="new-question-block group flex w-full items-center justify-between rounded-md bg-white p-5 shadow">
      <div className="question w-5/6">
        <div className="mb-2">
          <h2 className="text-lg">
            Field type: <span className="font-bold">{type} </span>
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
          <SaveButton onClick={() => setIsEditing(!isEditing)} />
        )}
      </div>
    </div>
  );
};

export default NewQuestionBlock;
