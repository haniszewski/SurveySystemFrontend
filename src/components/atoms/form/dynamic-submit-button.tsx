"use client";

import { useFormContext } from "react-hook-form";
import SubmitButton from "@/components/atoms/form/submit-button";
import {useRouter} from "next/navigation"

const DynamicSubmitButton = ({
  className,
  text = "Zapisz",
}: {
  className?: string;
  text?: string;
}) => {
  const router = useRouter()
  const { formState } = useFormContext();
  const { isSubmitting } = formState;

  return (
    <SubmitButton
      text={text}
      className={className}
      isSubmitting={isSubmitting}
      onClick={()=>router.push("/surveys/thanks")}
    />
  );
};

export default DynamicSubmitButton;
