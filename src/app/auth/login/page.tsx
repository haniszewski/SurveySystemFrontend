"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TextFormField from "@/components/atoms/form/fields/text-form-field";
import Form from "@/components/atoms/form/form";
import DynamicSubmitButton from "@/components/atoms/form/dynamic-submit-button";

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  function onSubmit(formData: unknown) {
    fetch("/auth/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          console.log("logged in");
          setError("");
          router.push("/user-panel");
        } else {
          throw new Error("Błędny login lub hasło");
        }
      })
      .catch((err: { message: string }) => {
        console.log(err);
        setError(err.message);
      });
  }

  return (
    <div className="flex h-full items-center justify-center bg-sky-100">
      <Form onSubmit={onSubmit}>
        <div className="flex w-full max-w-md flex-col gap-2 rounded bg-white p-8 shadow-md">
          <h2 className="mb-8 text-center text-4xl font-extrabold text-blue-500">
            Login
          </h2>
          {error && (
            <div className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
              <strong className="font-bold">Błąd!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <TextFormField name="email" label="Email" type="email" />
          <TextFormField name="password" label="Password" type="password" />
          <div className="w-full">
            <DynamicSubmitButton className="w-full" text="Zaloguj" />
          </div>
        </div>
      </Form>
    </div>
  );
}
