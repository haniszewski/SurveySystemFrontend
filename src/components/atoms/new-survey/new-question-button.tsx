"use client";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import TextButton from "../common/text-button";

// TODO: remove this component

const NewQuestionButton = ({ clickHandler }: { clickHandler: () => void }) => {
  return (
    <TextButton clickHandler={clickHandler}>
      <PlusCircleIcon className="w-7" /> <p className="">Dodaj nowe pytanie</p>
    </TextButton>
  );
};

export default NewQuestionButton;
