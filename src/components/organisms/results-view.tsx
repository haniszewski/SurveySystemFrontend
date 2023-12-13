import QuestionResults from "../molecules/analysis/question-results";

const ResultsView = ({ questions }: { questions: AnalysisData[] }) => {
  return (
    <div className="flex h-full flex-col items-center gap-5 bg-sky-100 p-5">
      <div className="flex w-2/3 flex-col gap-4">
        {questions.length > 0 &&
          questions.map((question) => (
            <QuestionResults key={question.question} analysis={question} />
          ))}
      </div>
    </div>
  );
};

export default ResultsView;
