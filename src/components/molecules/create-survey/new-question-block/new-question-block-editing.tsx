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

  const hasOptions = type === "single-choice" || type === "multi-choice";

  return (
    <div className="flex flex-col gap-2">
      <TextFormField name={createName("text")} label="Question text" />
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
        <TextFormField
          name={createName("options")}
          label="Options (one per line)"
        />
      )}
    </div>
  );
};

export default NewQuestionBlockEditing;
