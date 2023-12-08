import SingleQuestionAnalysisSchema from "./single-question-analysis-schema";

const UpdateIndividualQuestions = ({
  questions,
}: {
  questions: Question[];
}) => {
  return (
    <div className="flex flex-col gap-4">
      {questions.map((question) => (
        <SingleQuestionAnalysisSchema
          key={question.order}
          question={question}
        />
      ))}
    </div>
  );
};

export default UpdateIndividualQuestions;
