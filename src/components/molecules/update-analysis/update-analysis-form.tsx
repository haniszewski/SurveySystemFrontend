"use client";

import { type z } from "zod";
import { useRouter } from "next/navigation";
import Form from "@/components/atoms/form/form";
import { AnalysisSchema } from "@/schemas/analysis";
import { useUser } from "@/hooks/useUser";

type AnalysisSchema = z.infer<typeof AnalysisSchema>;

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
    const payload = AnalysisSchema.parse(data as AnalysisSchema);

    return fetch(`/analysis/schema/${id}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then(() => router.push(`/`))
      .catch((err) => {
        console.error(err);
      });
  }

  return <Form onSubmit={submitHandler}>{children}</Form>;
};

export default UpdateAnalysisForm;
