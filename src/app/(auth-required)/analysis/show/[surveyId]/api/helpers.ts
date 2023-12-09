function mapAnswers(answers: { answer: string; result: number }[]) {
  const labels = answers.map((answer) => answer.answer);
  const data = answers.map((answer) => answer.result);

  return { labels, data };
}

export function collectApiData(data: AnalysisApiResponse) {
  const questions = data.analysis_result_json;

  return questions.map((question) => ({
    question: question.question.text,
    answers: mapAnswers(question.answers),
  }));
}
