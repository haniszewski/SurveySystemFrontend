import { type z } from "zod";
import { newSurveySchema } from "@/schemas/survey";

type NewSurvey = z.infer<typeof newSurveySchema>;
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as NewSurvey;
    newSurveySchema.parse(body);

    console.dir(body, { depth: Infinity });

    const res = await fetch(`${BACKEND_URL}/api/survey/create/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.status !== 201) {
      throw new Error(await res.text());
    }

    return new Response(res.body, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    return new Response(String(error), { status: 500 });
  }
}
