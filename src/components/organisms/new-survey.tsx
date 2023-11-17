import NewSurveyForm from "../atoms/new-survey/new-survey-form";
import NewQuestionList from "../molecules/create-survey/new-question-list";

const NewSurvey = () => {
  return (
    <NewSurveyForm>
      <NewQuestionList />
    </NewSurveyForm>
  );
};

export default NewSurvey;
