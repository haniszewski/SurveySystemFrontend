import DynamicSubmitButton from "../atoms/form/dynamic-submit-button";
import SurveyForm from "../atoms/survey/survey-form";
import SurveyHeader from "../atoms/survey/survey-header";
import QuestionList from "../molecules/question-list/question-list";

const Survey = ({
  questions,
  name,
  id,
}: {
  questions: Question[];
  name: string;
  id: string;
}) => {
  return (
    <SurveyForm id={id}>
      <div className="flex w-full flex-col gap-5">
        <SurveyHeader title={`${name}`} description="Proszę wypełnij ankietę" />
        <div>
          <QuestionList questions={questions} />
        </div>
        <div className="flex lg:justify-end">
          <DynamicSubmitButton text="Prześlij" />
        </div>
      </div>
    </SurveyForm>
  );
};

export default Survey;
