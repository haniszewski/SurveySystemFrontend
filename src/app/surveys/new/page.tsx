import SurveyHeader from "@/components/atoms/survey/survey-header";
import NewQuestionList from "@/components/molecules/create-survey/new-question-list";

const questionTypes: QuestionType[] = ["text", "text", "single-choice"];

export default async function NewSurveyPage() {
  return (
    <div className="flex min-h-full flex-col items-center bg-sky-50 pt-10">
      <div className="flex w-2/3 flex-col gap-5">
        <SurveyHeader
          title={`New Survey`}
          description="Please fill out the survey"
        />
        <div>
          <NewQuestionList questionTypes={questionTypes} />
        </div>
      </div>
    </div>
  );
}
