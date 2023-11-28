import NewSurveyForm from "../atoms/new-survey/new-survey-form";
import SurveyHeader from "../atoms/survey/survey-header";
import NewQuestionList from "../molecules/create-survey/new-question-list";

const NewSurvey = () => {
  return (
    <NewSurveyForm>
      <div className="flex flex-col gap-7">
        <SurveyHeader
          title={`New Survey`}
          description="Please fill out the survey"
        />
        <div className="mb-20">
          <NewQuestionList />
        </div>
      </div>
    </NewSurveyForm>
  );
};

export default NewSurvey;
