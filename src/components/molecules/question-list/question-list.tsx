import QuestionItem from "./question-item";

const QuestionList = ({ questions }: { questions: QuestionMapType }) => {
  return (
    <div className="flex w-full flex-col gap-5">
      {Object.keys(questions).map((id) => (
        <QuestionItem key={id} id={id} question={questions[id]} />
      ))}
    </div>
  );
};

export default QuestionList;
