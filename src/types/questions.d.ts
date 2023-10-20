type Question = {
  id: string;
  type: QuestionType;
  text: string;
  details?: string;
  options?: string[];
};

type QuestionType =
  | "text"
  | "number"
  | "multi-choice"
  | "single-choice"
  | "date"
  | "date-range";
