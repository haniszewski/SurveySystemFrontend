"use client";

import { useRouter } from "next/navigation";
import Form from "@/components/atoms/form/form";
import { useUser } from "@/hooks/useUser";

const UpdateAnalysisForm = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const router = useRouter();
  const { token } = useUser();
  function submitHandler(data: unknown) {
    try {
      return fetch(`/analysis/schema/${id}/api`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then(() => router.push(`/user-panel/`))
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
      return;
    }
  }

  return <Form onSubmit={submitHandler}>{children}</Form>;
};

export default UpdateAnalysisForm;
