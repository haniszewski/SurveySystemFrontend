import SurveyHeader from "@/components/atoms/survey/survey-header";
import Survey from "@/components/organisms/survey";

const questions: QuestionMapType = {
  alsjdgahk: {
    type: "text",
    label: "Name",
    text: "What is your name?",
  },
  dakhshkdajd: {
    type: "text",
    details: "We will keep your email confidential.",
    text: "What is your email address?",
  },
  asdkasjjl: {
    type: "text",
    details: "We will keep your email confidential.",
    text: "What is your favourite color?",
  },
  kajshdak: {
    type: "multi-choice",
    text: "Which of the following programming languages do you know?",
    options: [
      { value: "javascript", label: "JavaScript" },
      { value: "python", label: "Python" },
      { value: "java", label: "Java" },
      { value: "csharp", label: "C#" },
    ],
  },
  asdlkasdkasd: {
    type: "single-choice",
    text: "Which of the following is your favorite programming language",
    options: [
      { value: "javascript", label: "JavaScript" },
      { value: "python", label: "Python" },
      { value: "java", label: "Java" },
      { value: "csharp", label: "C#" },
      { value: "other", label: "Other" },
    ],
  },
};

export default async function SurveyPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="flex min-h-full flex-col items-center bg-sky-50 pt-10">
      <div className="flex w-2/3 flex-col gap-5">
        <SurveyHeader
          title={`Survey ${params.id}`}
          description="Please fill out the survey"
        />
        <div>
          <Survey questions={questions} />
        </div>
      </div>
    </div>
  );
}
