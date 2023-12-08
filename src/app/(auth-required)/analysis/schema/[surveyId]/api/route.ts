import { type z } from "zod";
import { AnalysisSchema } from "@/schemas/analysis";

type AnalysisSchemaType = z.infer<typeof AnalysisSchema>;

const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000";

export async function POST(
  request: Request,
  { params }: { params: { surveyId: string } },
) {
  try {
    const data = (await request.json()) as AnalysisSchemaType;
    const parsed = AnalysisSchema.parse(data);

    const payload = {
      analysis_schema: {
        basic: parsed.basic,
      },
    };

    const res = await fetch(
      `${BACKEND_URL}/api/surveys/${params.surveyId}/analysis/`,
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: request.headers.get("Authorization") || "",
        },
      },
    );

    if (!res.ok) {
      throw new Error(await res.text());
    }

    return new Response(res.body, { status: 200 });
  } catch (error: unknown) {
    return new Response(String(error), { status: 500 });
  }
}
