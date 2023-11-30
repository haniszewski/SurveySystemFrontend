import { type z } from "zod";
import {
  formDataSchema,
  type newSurveySchema,
  type questionSchema,
} from "@/schemas/survey";

type NewSurvey = z.infer<typeof newSurveySchema>;
type FormData = z.infer<typeof formDataSchema>;
type Question = z.infer<typeof questionSchema>;

export async function collectFormData(request: Request): Promise<NewSurvey> {
  try {
    const body = (await request.json()) as FormData;
    formDataSchema.parse(body);

    const questions: Question[] = Object.values(body).reduce(
      (acc, question) => [...acc, question],
      [] as Question[],
    );

    const newSurvey: NewSurvey = {
      name: "New Survey",
      start_date: new Date().toISOString(),
      end_date: new Date().toISOString(),
      questions,
    };

    return newSurvey;
  } catch (error: unknown) {
    console.error(error);
    throw new Error(String(error));
  }
}
