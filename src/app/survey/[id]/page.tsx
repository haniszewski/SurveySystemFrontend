import Survey from "@/components/organisms/survey";

const questions: Question[] = [
  {
    id: "1",
    type: "text",
    text: "What is your name?",
  },
  {
    id: "2",
    type: "text",
    text: "What is your email address?",
  },
  {
    id: "3",
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
        <Survey questions={questions} />
      </div>
    </div>
  );
}
