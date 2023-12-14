function mapAnswers(answers: { answer: string; result: number }[]) {
  const labels = answers.map((answer) => answer.answer);
  const data = answers.map((answer) => answer.result);

  return { labels, data };
}

export function collectApiData(data: AnalysisApiResponse): AnalysisData[] {
  const questions = data.analysis_result_json;

  return questions.map((question) => ({
    question: question.question.text,
    type: question.display === "percentage" ? "pie" : "bar",
    answers: mapAnswers(question.answers),
  }));
}
