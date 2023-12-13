"use client";

const SubmitButton = ({
  text,
  forForm,
  onClick,
  isSubmitting = false,
  className = "",
}: {
  text: string;
  forForm?: string;
  onClick?: () => void;
  isSubmitting?: boolean;
  className?: string;
}) => {
  return (
    <button
      form={forForm}
      type="submit"
      onClick={onClick}
      disabled={isSubmitting}
      className={`${className} mt-10 w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-500 disabled:opacity-50 disabled:shadow-none lg:w-32`}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
