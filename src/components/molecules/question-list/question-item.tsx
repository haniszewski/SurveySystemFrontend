import { createQuestionComponent } from "./question-map";

const QuestionItem = ({
  question,
}: {
  question: Question;
}) => {
  const { id, text, details, options, type } = question;

  return (
    <div>
      <div>
        <h3>{text}</h3>
        {details && <div>{details}</div>}
      </div>
      <div>
        {createQuestionComponent(type, {
          name: id,
          options: options,
        })}
      </div>
    </div>
  );
};

export default QuestionItem;
