import QuestionResults from "./question-results";

const ResultsView = ({ questions }: { questions: AnalysisData[] }) => {
  return (
    <div className="flex min-h-full flex-col items-center gap-5 bg-sky-100 p-5">
      <div className="flex flex-col gap-4 lg:w-2/3">
        {questions.length > 0 &&
          questions.map((question) => (
            <QuestionResults key={question.question} analysis={question} />
          ))}
      </div>
    </div>
  );
};

export default ResultsView;
