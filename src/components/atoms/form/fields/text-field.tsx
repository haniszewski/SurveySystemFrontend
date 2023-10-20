"use client";

import { useFormContext } from "react-hook-form";

const TextField = ({
  name,
  type = "text",
}: {
  name: string;
  type?: "text" | "number";
}) => {
  const { register } = useFormContext();
  return (
    <div>
      <input type={type} {...register(name)} />
    </div>
  );
};

export default TextField;
