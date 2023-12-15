"use client";

import { useFormContext } from "react-hook-form";
import SubmitButton from "@/components/atoms/form/submit-button";

const DynamicSubmitButton = ({
  className,
  text = "Zapisz",
  isLogin = false,
}: {
  className?: string;
  text?: string;
  isLogin?: boolean;
}) => {
  const { formState } = useFormContext();
  const { isSubmitting } = formState;

  return (
    <SubmitButton
      text={text}
      className={className}
      isSubmitting={isSubmitting}
      isLogin={isLogin}
    />
  );
};

export default DynamicSubmitButton;
