"use client";

import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import SubmitButton from "@/components/atoms/form/submit-button";

const DynamicSubmitButton = ({
  className,
  text = "Zapisz",
}: {
  className?: string;
  text?: string;
}) => {
  const { formState } = useFormContext();
  const { isSubmitting } = formState;

  useEffect(() => {
    console.log("isSubmitting", isSubmitting);
  }, [isSubmitting]);

  return (
    <SubmitButton
      text={text}
      className={className}
      isSubmitting={isSubmitting}
    />
  );
};

export default DynamicSubmitButton;
