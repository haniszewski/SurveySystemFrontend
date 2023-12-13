const ResultsView = ({ questions }: { questions: AnalysisData }) => {
  return (
    <div className="flex flex-col gap-4">
      {questions.length > 0 &&
        questions.map((question, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bold">{question.question}</h3>
            <div className="flex flex-col gap-2">
              {question.answers.labels.map((label, idx) => (
                <div key={idx}>
                  <p>{label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {question.answers.data.map((value, idx) => (
                <div key={idx}>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ResultsView;
