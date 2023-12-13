const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000";

export async function POST(
  request: Request,
  { params }: { params: { surveyId: string } },
) {
  try {
    const res = await fetch(
      `${BACKEND_URL}/api/surveys/${params.surveyId}/analyze/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: request.headers.get("Authorization") || "",
        },
        body: JSON.stringify({
          survey_id: params.surveyId,
        }),
      },
    );

    if (!res.ok) {
      throw new Error(await res.text());
    }

    return new Response(res.body, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    return new Response(String(error), { status: 500 });
  }
}
