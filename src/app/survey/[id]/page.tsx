import SurveyHeader from "@/components/atoms/survey/survey-header";
import Survey from "@/components/organisms/survey";

const questions: Question[] = [
  {
    id: "1",
    type: "text",
    text: "What is your name?",
  },
  {
    id: "2",
    type: "text",
    text: "What is your email address?",
  },
  {
    id: "3",
    type: "text",
    text: "What is your phone number?",
  },
];

export default async function SurveyPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="flex h-full flex-col items-center bg-sky-50 pt-10">
      <div className="flex w-2/3 flex-col gap-5">
        <SurveyHeader
          title={`Survey ${params.id}`}
          description="Please fill out the survey"
        />
        <div>
          <Survey questions={questions} />
        </div>
      </div>
    </div>
  );
}
