import { notFound } from "next/navigation";
import SurveyHeader from "@/components/atoms/survey/survey-header";
import Survey from "@/components/organisms/survey";

// const questions: QuestionMapType = {
//   text_1: {
//     type: "text",
//     label: "Name",
//     text: "What is your name?",
//   },
//   text_2: {
//     type: "text",
//     details: "We will keep your email confidential.",
//     text: "What is your email address?",
//   },
//   text_3: {
//     type: "text",
//     details: "We will keep your email confidential.",
//     text: "What is your favourite color?",
//   },
//   multi_choice: {
//     type: "multi-choice",
//     text: "Which of the following programming languages do you know?",
//     options: [
//       { value: "javascript", label: "JavaScript" },
//       { value: "python", label: "Python" },
//       { value: "java", label: "Java" },
//       { value: "csharp", label: "C#" },
//     ],
//   },
//   single_choice: {
//     type: "single-choice",
//     text: "Which of the following is your favorite programming language",
//     options: [
//       { value: "javascript", label: "JavaScript" },
//       { value: "python", label: "Python" },
//       { value: "java", label: "Java" },
//       { value: "csharp", label: "C#" },
//       { value: "other", label: "Other" },
//     ],
//   },
// };

export const dynamic = "force-dynamic";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

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
      <div className="flex min-h-full flex-col items-center bg-sky-50 pt-10">
        <div className="flex w-2/3 flex-col gap-5">
          <SurveyHeader
            title={`Survey ${data.name}`}
            description="Please fill out the survey"
          />
          <div>
            <Survey questions={data.questions} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Nie znaleziono ankiety");
    return notFound();
  }
}
