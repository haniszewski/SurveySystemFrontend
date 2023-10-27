"use client";

import { FormProvider, useForm } from "react-hook-form";

const Form = ({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: (values: unknown) => void;
}) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <input
          type="submit"
          value="Submit"
          disabled={methods.formState.isSubmitting}
        />
      </form>
    </FormProvider>
  );
};

export default Form;
