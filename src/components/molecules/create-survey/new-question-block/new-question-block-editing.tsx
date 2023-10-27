import TextFormField from "@/components/atoms/form/fields/text-form-field";

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

  return (
    <div className="flex flex-col gap-2">
      <TextFormField name={createName("text")} label="Enter question" />
      <TextFormField
        name={createName("details")}
        label="Enter question details (optional)"
      />
      <TextFormField
        name={createName("label")}
        label="Enter placeholder (optional)"
      />
    </div>
  );
};

export default NewQuestionBlockEditing;
