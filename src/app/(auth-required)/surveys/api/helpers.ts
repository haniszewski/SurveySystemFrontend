import { type z } from "zod";
import { type newSurveySchema } from "@/schemas/survey";

type NewSurvey = z.infer<typeof newSurveySchema>;

export async function collectFormData(request: Request): Promise<NewSurvey> {
  try {
    const body = (await request.json()) as NewSurvey;
    const questions = body.questions
      .filter((question) => !!question)
      .map((question) => {
        const choices = question.choices?.filter((choice) => !!choice);
        return {
          ...question,
          choices,
        };
      });

    const newSurvey: NewSurvey = {
      ...body,
      questions,
    };

    return newSurvey;
  } catch (error: unknown) {
    console.error(error);
    throw new Error(String(error));
  }
}
