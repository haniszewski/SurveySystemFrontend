import { z } from "zod";

export const QuestionAnalysisSchema = z.object({
  order: z.number(),
  type: z.union([z.literal("pie"), z.literal("bar")]),
  display: z.union([z.literal("percentage"), z.literal("count")]),
  show_total: z.boolean(),
});

export const AllQuestionsAnalysisSchema = z.object({
  type: z.union([z.literal("pie"), z.literal("bar")]),
  display: z.union([z.literal("percentage"), z.literal("count")]),
  show_total: z.boolean(),
});

export const AnalysisSchema = z.object({
  all_questions: AllQuestionsAnalysisSchema.nullish(),
  basic: z.array(QuestionAnalysisSchema),
});
