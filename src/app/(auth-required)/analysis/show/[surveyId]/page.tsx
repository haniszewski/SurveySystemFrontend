import { Suspense } from "react";
import Analysis from "@/components/organisms/analysis";
import AnalysisRunning from "@/components/atoms/analysis/analysis-running";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

export default async function Index({
  params,
}: {
  params: { surveyId: string };
}) {
  return (
    <Suspense fallback={<AnalysisRunning />}>
      <Analysis surveyId={params.surveyId} />
    </Suspense>
  );
}
