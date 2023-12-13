import ResultsChart from "@/components/atoms/analysis/results-chart";

const QuestionResults = ({ analysis }: { analysis: AnalysisData }) => {
  const {
    question,
    answers: { labels, data },
  } = analysis;

  return (
    <div className="flex w-full flex-col items-center justify-between rounded-md bg-white p-5 shadow">
      <h3 className="mb-5 text-2xl font-bold">{question}</h3>
      <div className="flex h-fit w-full justify-center md:h-52 lg:h-96">
        <ResultsChart labels={labels} data={data} type="bar" />
      </div>
    </div>
  );
};

export default QuestionResults;
