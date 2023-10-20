import QuestionItem from "./question-item";

const QuestionList = ({
  questions,
}: {
  questions: Question[];
}) => {
  return (
    <div className="question-list">
      {questions.map((question, idx) => (
        <QuestionItem key={idx} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;
