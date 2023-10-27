import NewQuestionBlock from "./new-question-block/new-question-block";

const NewQuestionList = ({
  questionTypes,
}: {
  questionTypes: QuestionType[];
}) => {
  return (
    <div className="flex w-full flex-col gap-5">
      {questionTypes.map((type, idx) => (
        <NewQuestionBlock key={idx} id={`${idx}`} type={type} />
      ))}
    </div>
  );
};

export default NewQuestionList;
