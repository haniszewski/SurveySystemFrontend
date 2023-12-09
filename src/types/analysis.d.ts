type AnalysisApiResponse = {
  analysis_result_json: {
    question: Question;
    answers: {
      answer: string;
      result: number;
    }[];
  }[];
};

type AnalysisData = {
  question: string;
  answers: {
    labels: string[];
    data: number[];
  };
}[];
