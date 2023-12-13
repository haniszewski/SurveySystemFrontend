import { collectFormData } from "./helpers";
import { newSurveySchema } from "@/schemas/survey";

const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000";

export async function POST(request: Request) {
  try {
    const newSurvey = await collectFormData(request);
    newSurveySchema.parse(newSurvey);

    const res = await fetch(`${BACKEND_URL}/api/survey/create/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: request.headers.get("Authorization") || "",
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
