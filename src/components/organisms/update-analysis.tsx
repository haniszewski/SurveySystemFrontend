import DynamicSubmitButton from "../atoms/form/dynamic-submit-button";
import SurveyHeader from "../atoms/survey/survey-header";
import UpdateAnalysisForm from "../molecules/update-analysis/update-analysis-form";
import UpdateIndividualQuestions from "../molecules/update-analysis/update-individual-questions";

const UpdateAnalysis = ({
  survey,
  mode,
}: {
  survey: Survey;
  mode: "default" | "individual";
}) => {
  return (
    <UpdateAnalysisForm id={survey.id}>
      <div className="flex w-full flex-col gap-2">
        <SurveyHeader
          title={survey.name}
          description={survey.description || ""}
        />
        {mode === "individual" && (
          <UpdateIndividualQuestions questions={survey.questions} />
        )}
        <DynamicSubmitButton className="self-end" />
      </div>
    </UpdateAnalysisForm>
  );
};

export default UpdateAnalysis;
