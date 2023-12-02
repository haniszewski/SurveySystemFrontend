"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { UserContext } from "./user-context";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [token, setToken] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const token = Cookies.get("token");
    const email = Cookies.get("email");

    if (!token) {
      router.push("/");
    }

    setToken(token || "");
    setEmail(email || "");
  }, []);

  return (
    <UserContext.Provider
      value={{
        token,
        email,
      }}
    >
      {token && children}
    </UserContext.Provider>
  );
};

export default UserProvider;
