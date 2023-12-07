"use client";

import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";

const AuthRequiredWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useUser();
  const router = useRouter();

  useLayoutEffect(() => {
    console.log("auth", isAuthenticated);
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  return <>{isAuthenticated && children}</>;
};

export default AuthRequiredWrapper;
