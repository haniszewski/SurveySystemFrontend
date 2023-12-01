"use client";

import Form from "../form/form";

const SurveyForm = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const submitHandler = (data: unknown) => {
    const payload = {
      id: parseInt(id),
      answers: data,
    };

    fetch(`/survey/${id}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return <Form onSubmit={submitHandler}>{children}</Form>;
};

export default SurveyForm;
