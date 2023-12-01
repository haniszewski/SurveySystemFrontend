import { collectFormData } from "./helpers";
import { newSurveySchema } from "@/schemas/survey";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

export async function POST(request: Request) {
  try {
    const newSurvey = await collectFormData(request);
    newSurveySchema.parse(newSurvey);

    console.dir(newSurvey, { depth: Infinity });

    const res = await fetch(`${BACKEND_URL}/api/survey/create/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSurvey),
    });

    if (!res.ok) {
      throw new Error(await res.text());
    }

    return new Response(res.body, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    return new Response(String(error), { status: 500 });
  }
}
