import { notFound } from "next/navigation";
import Survey from "@/components/organisms/survey";

export const dynamic = "force-dynamic";

const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000";

export default async function SurveyPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/survey/${params.id}/`);

    if (!res.ok) {
      throw new Error("Survey not found");
    }

    const data = (await res.json()) as Survey;

    return (
      <div className="flex min-h-full flex-col items-center bg-sky-50 p-10">
        <div className="lg:w-2/3">
          <Survey id={params.id} questions={data.questions} name={data.name} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Nie znaleziono ankiety");
    notFound();
  }
}
