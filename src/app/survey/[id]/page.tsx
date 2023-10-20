import QuestionList from "@/components/organisms/question-list";

const questions: Question[] = [
  {
    type: "text",
    text: "What is your name?",
  },
  {
    type: "text",
    text: "What is your email address?",
  },
  {
    type: "text",
    text: "What is your phone number?",
  },
];

export default async function SurveyPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="flex h-full flex-col items-center bg-gray-100 pt-10">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Survey {params.id}
      </h1>
      <div>
        <QuestionList questions={questions} />
      </div>
    </div>
  );
}
