import ResultsView from "@/components/organisms/results-view";

export default async function Index({
  params,
}: {
  params: { surveyId: string };
}) {
  return <ResultsView />;
}
