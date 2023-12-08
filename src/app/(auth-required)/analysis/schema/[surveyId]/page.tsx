import { notFound } from "next/navigation";
import UpdateAnalysis from "@/components/organisms/update-analysis";
import AnalysisSchemaStart from "@/components/molecules/analysis/analysis-schema-start";

const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000";

export default async function Index({
  params,
  searchParams,
}: {
  params: {
    surveyId: string;
  };
  searchParams: {
    mode: string;
  };
}) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/survey/${params.surveyId}`);

    if (!res.ok) {
      throw new Error("Survey not found");
    }

    const data = (await res.json()) as Survey;

    console.log(searchParams.mode);

    return (
      <>
        {!searchParams.mode ? (
          <AnalysisSchemaStart />
        ) : searchParams.mode === "default" ? (
          "default"
        ) : (
          "individual"
        )}
      </>
    );
  } catch (e) {
    console.error(e);
    notFound();
  }
}
