type AnalysisApiResponse = {
  analysis_result_json: {
    question: Question;
    display: "count" | "percentage";
    answers: {
      answer: string;
      result: number;
    }[];
  }[];
};

type AnalysisData = {
  question: string;
  type: "bar" | "pie";
  answers: {
    labels: string[];
    data: number[];
  };
};
