import { collectApiData } from "./helpers";

const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000";

export async function GET(
  request: Request,
  { params }: { params: { surveyId: string } },
) {
  try {
    const data = await fetch(
      `${BACKEND_URL}/api/surveys/${params.surveyId}/get-analysis-result/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: request.headers.get("Authorization") || "",
        },
      },
    );

    if (!data.ok) {
      throw new Error(await data.text());
    }

    const apiData = (await data.json()) as AnalysisApiResponse;
    console.log(apiData);
    return new Response(JSON.stringify(collectApiData(apiData)), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(String(err), {
      status: 500,
    });
  }
}
