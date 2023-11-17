type Question = {
  type: number;
  order: number;
  text: string;
  label?: string;
  details?: string;
  required?: boolean;
  choices?: {
    text: string;
    order: number;
  }[];
};
