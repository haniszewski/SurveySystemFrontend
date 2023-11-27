import NewOptionsList from "./new-options-list";
import TextFormField from "@/components/atoms/form/fields/text-form-field";
import { QuestionType } from "@/types/questionType";

const NewQuestionBlockEditing = ({
  id,
  type,
}: {
  id: string;
  type: QuestionType;
}) => {
  function createName(name: string) {
    return `${id}.${name}`;
  }

  const hasOptions =
    type === QuestionType.SINGLE_CHOICE || type === QuestionType.MULTI_CHOICE;

  return (
    <div className="flex flex-col gap-2">
      <TextFormField name={createName("text")} label="Question text" required />
      <TextFormField
        name={createName("details")}
        label="Question details (optional)"
      />
      {!hasOptions ? (
        <TextFormField
          name={createName("label")}
          label="Placeholder (optional)"
        />
      ) : (
        <NewOptionsList id={Number(id)} />
      )}
    </div>
  );
};

export default NewQuestionBlockEditing;
