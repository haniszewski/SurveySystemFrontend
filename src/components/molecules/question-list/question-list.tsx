import QuestionItem from "./question-item";

const QuestionList = ({ questions }: { questions: Question[] }) => {
  return (
    <div className="flex w-full flex-col gap-5">
      {questions.map((question, idx) => (
        <QuestionItem key={idx} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;
