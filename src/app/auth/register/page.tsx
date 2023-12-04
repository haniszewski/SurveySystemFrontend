"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TextFormField from "@/components/atoms/form/fields/text-form-field";
import Form from "@/components/atoms/form/form";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleRegister = (values: unknown) => {
    const data = values as CreateUser;
    fetch("/auth/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        username: data.email,
        password: data.password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("registered");
          setError("");
          router.push("/auth/login");
        } else {
          throw new Error("Błąd rejestracji");
        }
      })
      .catch((err: { message: string }) => {
        console.log(err);
        setError(err.message);
      });
  };

  return (
    <div className="flex h-full items-center justify-center bg-sky-100">
      <Form onSubmit={handleRegister}>
        <div className="flex w-full max-w-md flex-col gap-2 rounded bg-white p-8 shadow-md">
          <h2 className="mb-8 text-center text-4xl font-extrabold text-blue-500">
            Zarejestruj się
          </h2>
          {error && (
            <div className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
              <strong className="font-bold">Błąd!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <TextFormField name="email" label="Email" type="email" />
          <TextFormField name="password" label="Password" type="password" />
          <TextFormField
            name="repeat"
            label="Repeat password"
            type="password"
          />
          <div className="w-full">
            <Button
              type="submit"
              variant="contained"
              className="w-full bg-blue-500 text-white hover:bg-blue-700"
            >
              Zarejestruj się
            </Button>
          </div>
          <div className="mt-4 text-center">
            <Link href="/auth/login">
              <div className="cursor-pointer text-blue-500 hover:underline">
                Masz już konto? Zaloguj się
              </div>
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
