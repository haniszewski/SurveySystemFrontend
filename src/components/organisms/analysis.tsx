import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import ResultsView from "../molecules/analysis/results-view";
import { collectApiData } from "@/app/(auth-required)/analysis/show/[surveyId]/api/helpers";

const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000";
const FRONTEND_URL = process.env.FRONTEND_URL || "http://127.0.0.1:3000";

export default async function Analysis({ surveyId }: { surveyId: string }) {
  try {
    const firstRes = await fetch(`${FRONTEND_URL}/analysis/run/${surveyId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies().get("token")?.value}`,
      },
      cache: "no-cache",
    });

    if (!firstRes.ok) {
      throw new Error(await firstRes.text());
    }

    const res = await fetch(
      `${BACKEND_URL}/api/surveys/${surveyId}/get-analysis-result/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies().get("token")?.value}`,
        },
        cache: "no-cache",
      },
    );

    if (!res.ok) {
      throw new Error(await res.text());
    }

    const apiData = (await res.json()) as AnalysisApiResponse;
    const processedData = collectApiData(apiData);

    return <ResultsView questions={processedData} />;
  } catch (error) {
    console.error(error);
    notFound();
  }
}
