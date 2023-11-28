const SubmitButton = ({
  text,
  forForm,
}: {
  text: string;
  forForm?: string;
}) => {
  return (
    <button
      form={forForm}
      type="submit"
      className="float-right mt-10 w-32 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
