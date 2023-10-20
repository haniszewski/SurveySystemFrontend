"use client";

import { FormProvider, useForm } from "react-hook-form";

const SurveyForm = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) =>
          console.log(data),
        )}
      >
        {children}
        <input type="submit" value="Submit" />
      </form>
    </FormProvider>
  );
};

export default SurveyForm;
