"use client";

import Form from "../form/form";

const NewSurveyForm = ({ children }: { children: React.ReactNode }) => {
  const submitHandler = (data: unknown) => {
    console.log(data);
    fetch("/surveys/api", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <Form id="new-survey-form" onSubmit={submitHandler}>
      {children}
    </Form>
  );
};

export default NewSurveyForm;
