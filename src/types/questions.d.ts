type QuestionMapType = Record<string, Question>;

type Question = {
  type: QuestionType;
  text: string;
  label?: string;
  details?: string;
  options?: {
    label: string;
    value: string;
  }[];
};

type QuestionType =
  | "text"
  | "number"
  | "multi-choice"
  | "single-choice"
  | "date"
  | "date-range";
