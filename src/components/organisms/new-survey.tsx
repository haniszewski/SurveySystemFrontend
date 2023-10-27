import NewSurveyForm from "../atoms/new-survey/new-survey-form";
import NewQuestionList from "../molecules/create-survey/new-question-list";

const NewSurvey = ({ questionTypes }: { questionTypes: QuestionType[] }) => {
  return (
    <NewSurveyForm>
      <NewQuestionList questionTypes={questionTypes} />
    </NewSurveyForm>
  );
};

export default NewSurvey;
