"use client";

import { useState } from "react";
import EditButton from "@/components/atoms/new-survey/edit-button";
import DeleteButton from "@/components/atoms/new-survey/delete-button";

const NewQuestionBlock = ({ id, type }: { id: string; type: QuestionType }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex w-full items-center justify-between rounded-md bg-white p-5 shadow">
      <div className="question w-5/6">
        <div className="mb-2">
          <h3>
            Type: <span className="font-bold">{type} </span>
            <span className="text-gray-400">{"(cannot be changed)"}</span>
          </h3>
        </div>
        {isEditing ? (
          <div className="w-full">Editing</div>
        ) : (
          <div className="w-full">Saved</div>
        )}
      </div>
      <div className="buttons flex w-1/6 justify-end gap-2">
        <EditButton onClick={() => setIsEditing(!isEditing)} />
        <DeleteButton onClick={() => {}} />
      </div>
    </div>
  );
};

export default NewQuestionBlock;
