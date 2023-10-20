import { createQuestionComponent } from "./question-map";

const QuestionItem = ({ question }: { question: Question }) => {
  const { id, text, details, options, type, label } = question;

  return (
    <div className="w-full rounded-md bg-white p-5 shadow">
      <div className="mb-2">
        <h3>{text}</h3>
        {details && <p className="text-sm text-gray-400">{details}</p>}
      </div>
      <div className="w-full">
        {createQuestionComponent(type, {
          name: id,
          label: label,
          options: options,
        })}
      </div>
    </div>
  );
};

export default QuestionItem;
