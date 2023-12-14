"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TextFormField from "@/components/atoms/form/fields/text-form-field";
import Form from "@/components/atoms/form/form";
import DynamicSubmitButton from "@/components/atoms/form/dynamic-submit-button";
import { useUser } from "@/hooks/useUser";

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { isAuthenticated } = useUser();

  useEffect(() => {
    if (isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  function onSubmit(formData: unknown) {
    return fetch("/auth/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          setError("");
          router.push("/");
        } else {
          throw new Error("Błędny login lub hasło");
        }
      })
      .catch((err: { message: string }) => {
        setError(err.message);
      });
  }

  return (
    <div className="flex h-full items-center justify-center bg-sky-100">
      <Form onSubmit={onSubmit}>
        <div className="flex w-full max-w-md flex-col gap-2 rounded bg-white p-8 shadow-md">
          <h2 className="mb-8 text-center text-4xl font-extrabold text-blue-500">
            Zaloguj się
          </h2>
          {error && (
            <div className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
              <strong className="font-bold">Błąd!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <TextFormField name="email" label="Email" type="email" />
          <TextFormField name="password" label="Hasło" type="password" />
          <div className="w-full">
            <DynamicSubmitButton className="w-full" text="Zaloguj" />
          </div>
          <div className="mt-4 text-center">
            <Link href="/auth/register">
              <div className="cursor-pointer text-blue-500 hover:underline">
                Załóż konto
              </div>
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
}
