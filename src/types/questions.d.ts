type QuestionMapType = Record<string, Question>;

type Question = {
  type: QuestionType;
  order: number;
  text: string;
  label?: string;
  details?: string;
  required?: boolean;
  options?: {
    label: string;
    order: number;
  }[];
};

type QuestionType =
  | "text"
  | "number"
  | "multi-choice"
  | "single-choice"
  | "date"
  | "date-range";
