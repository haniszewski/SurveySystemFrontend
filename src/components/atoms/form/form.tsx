"use client";

import { FormProvider, useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

const Form = ({
  children,
  onSubmit,
  id,
}: {
  children: React.ReactNode;
  onSubmit: (values: unknown) => void;
  id: string;
  shouldPersist?: boolean;
}) => {
  const methods = useForm();
  useFormPersist(id, {
    watch: methods.watch,
    setValue: methods.setValue,
    storage: window.localStorage,
  });

  return (
    <FormProvider {...methods}>
      <form id={id} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
