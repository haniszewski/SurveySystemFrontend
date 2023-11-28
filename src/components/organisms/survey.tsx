import SurveyForm from "../atoms/survey/survey-form";
import SurveyHeader from "../atoms/survey/survey-header";
import QuestionList from "../molecules/question-list/question-list";

const Survey = ({
  questions,
  name,
}: {
  questions: Question[];
  name: string;
}) => {
  return (
    <SurveyForm>
      <div className="flex w-2/3 flex-col gap-5">
        <SurveyHeader
          title={`Survey ${name}`}
          description="Please fill out the survey"
        />
        <div>
          <QuestionList questions={questions} />
        </div>
      </div>
    </SurveyForm>
  );
};

export default Survey;
