import SurveyHeader from "@/components/atoms/survey/survey-header";
import NewSurvey from "@/components/organisms/new-survey";

const questionTypes: QuestionType[] = ["text", "text", "text"];

export default async function NewSurveyPage() {
  return (
    <div className="flex min-h-full flex-col items-center bg-sky-50 pt-10">
      <div className="flex w-2/3 flex-col gap-5">
        <SurveyHeader
          title={`New Survey`}
          description="Please fill out the survey"
        />
        <div>
          <NewSurvey questionTypes={questionTypes} />
        </div>
      </div>
    </div>
  );
}
