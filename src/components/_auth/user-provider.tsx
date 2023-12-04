"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import Loading from "../atoms/common/loading";
import { UserContext } from "./user-context";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();

  function handleCookies() {
    const token = Cookies.get("token");
    const email = Cookies.get("email");
    const username = Cookies.get("username");

    setToken(token || "");
    setEmail(email || "");
    setUsername(username || "");
    setIsAuthenticated(!!token);
    setLoading(false);
  }

  useEffect(() => {
    handleCookies();
  }, []);

  useEffect(() => {
    handleCookies();
  }, [pathname]);

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        username,
        isAuthenticated,
      }}
    >
      {loading ? <Loading /> : children}
    </UserContext.Provider>
  );
};

export default UserProvider;
