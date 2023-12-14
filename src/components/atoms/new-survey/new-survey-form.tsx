"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { type z } from "zod";
import Form from "../form/form";
import { useUser } from "@/hooks/useUser";
import { newSurveySchema } from "@/schemas/survey";

type NewSurveySchema = z.infer<typeof newSurveySchema>;

const NewSurveyForm = ({ children }: { children: React.ReactNode }) => {
  const { token } = useUser();
  const router = useRouter();
  const [showQuestionsAlert, setShowQuestionsAlert] = useState(false);
  const [showHeaderAlert, setShowHeaderAlert] = useState(false);

  function handleCloseQuestions(
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) {
    if (reason === "clickaway") {
      return;
    }

    setShowQuestionsAlert(false);
  }

  function handleCloseHeader(
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) {
    if (reason === "clickaway") {
      return;
    }

    setShowHeaderAlert(false);
  }

  const submitHandler = (data: unknown) => {
    try {
      const dataSchema = newSurveySchema.parse(data as NewSurveySchema);

      return fetch("/surveys/api", {
        method: "POST",
        body: JSON.stringify(dataSchema),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => router.push(`/user-panel`))
        .catch((err) => console.log(err));
    } catch (err) {
      const surveyData = data as NewSurveySchema;
      if (
        !surveyData.name ||
        !surveyData.start_date ||
        !surveyData.end_date ||
        surveyData.name === "" ||
        surveyData.start_date === "" ||
        surveyData.end_date === ""
      ) {
        setShowHeaderAlert(true);
        return;
      }
      if (!surveyData.questions || surveyData.questions.length === 0) {
        setShowQuestionsAlert(true);
        return;
      }
    }
  };

  return (
    <>
      <Form id="new-survey-form" onSubmit={submitHandler}>
        {children}
      </Form>
      <Snackbar
        open={showQuestionsAlert}
        autoHideDuration={6000}
        onClose={handleCloseQuestions}
      >
        <Alert
          onClose={handleCloseQuestions}
          severity="error"
          sx={{ width: "100%" }}
        >
          Należy dodać przynajmniej jedno pytanie do ankiety!
        </Alert>
      </Snackbar>
      <Snackbar
        open={showHeaderAlert}
        autoHideDuration={6000}
        onClose={handleCloseHeader}
      >
        <Alert
          onClose={handleCloseHeader}
          severity="error"
          sx={{ width: "100%" }}
        >
          Należy uzupełnić dane nagłówka ankiety!
        </Alert>
      </Snackbar>
    </>
  );
};

export default NewSurveyForm;
