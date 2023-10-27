const NewQuestionBlock = ({ type }: { type: QuestionType }) => {
  return (
    <div className="w-full rounded-md bg-white p-5 shadow">
      <div className="mb-2">
        <h3>Typ pola: {type}</h3>
      </div>
      <div className="w-full">
        {/* {createQuestionComponent(type, {
          name: id,
          label: label,
          options: options,
        })} */}
      </div>
    </div>
  );
};

export default NewQuestionBlock;
