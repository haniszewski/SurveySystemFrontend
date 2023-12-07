"use client";

import { useFormContext } from "react-hook-form";
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

  return (
    <SubmitButton
      text={text}
      className={className}
      isSubmitting={isSubmitting}
    />
  );
};

export default DynamicSubmitButton;
