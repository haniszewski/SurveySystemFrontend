import SubmitButton from "../atoms/form/submit-button";
import NewSurveyForm from "../atoms/new-survey/new-survey-form";
import NewQuestionList from "../molecules/create-survey/new-question-list";
import NewSurveyHeader from "../molecules/create-survey/new-survey-header";

const NewSurvey = () => {
  return (
    <NewSurveyForm>
      <div className="flex flex-col gap-7">
        <NewSurveyHeader />
        <div className="mb-17">
          <NewQuestionList />
        </div>
      </div>
      <div className="mb-10 flex justify-end">
        <SubmitButton text="Zapisz" />
      </div>
    </NewSurveyForm>
  );
};

export default NewSurvey;
