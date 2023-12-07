import { notFound } from "next/navigation";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

export default async function Index({
  params,
}: {
  params: {
    surveyId: string;
  };
}) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/survey/${params.surveyId}`);

    if (!res.ok) {
      throw new Error("Survey not found");
    }

    const data = (await res.json()) as Survey;

    return <div>{data.name}</div>;
  } catch (e) {
    console.error(e);
    notFound();
  }
}
