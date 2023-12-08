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

    return (
      <>
        {!searchParams.mode ? (
          <AnalysisSchemaStart />
        ) : (
          <div className="flex h-full justify-center bg-sky-100 pt-5">
            <div className="w-2/3">
              {searchParams.mode === "default" ? (
                <UpdateAnalysis survey={data} mode="default" />
              ) : (
                <UpdateAnalysis survey={data} mode="individual" />
              )}
            </div>
          </div>
        )}
      </>
    );
  } catch (e) {
    console.error(e);
    notFound();
  }
}
