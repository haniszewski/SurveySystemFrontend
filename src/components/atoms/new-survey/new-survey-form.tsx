"use client";

import { useRouter } from "next/navigation";
import Form from "../form/form";
import { useUser } from "@/hooks/useUser";

const NewSurveyForm = ({ children }: { children: React.ReactNode }) => {
  const { token } = useUser();
  const router = useRouter();

  const submitHandler = (data: unknown) => {
    return fetch("/surveys/api", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => router.push(`/user-panel`))
      .catch((err) => console.log(err));
  };

  return (
    <Form id="new-survey-form" onSubmit={submitHandler}>
      {children}
    </Form>
  );
};

export default NewSurveyForm;
