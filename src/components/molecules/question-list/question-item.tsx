import { createQuestionComponent } from "./question-map";

const QuestionItem = ({
  question,
}: {
  question: Question;
}) => {
  const { text, details, options, type } = question;

  return (
    <div>
      <div>
        <h3>{text}</h3>
        {details && <div>{details}</div>}
      </div>
      <div>
        {createQuestionComponent(type, {
          options: options,
        })}
      </div>
    </div>
  );
};

export default QuestionItem;
