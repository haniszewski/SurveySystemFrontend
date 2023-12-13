import ResultsChart from "@/components/atoms/analysis/results-chart";

const QuestionResults = ({ analysis }: { analysis: AnalysisData }) => {
  const {
    question,
    answers: { labels, data },
  } = analysis;

  return (
    <div className="flex h-96 w-full flex-col items-center justify-between rounded-md bg-white p-5 shadow">
      <h3 className="mb-5 text-2xl font-bold">{question}</h3>
      <div className="h-full w-full">
        <ResultsChart labels={labels} data={data} type="bar" />
      </div>
    </div>
  );
};

export default QuestionResults;
