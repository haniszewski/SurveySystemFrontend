"use client";
import { useContext } from "react";

import MySurveyButton from "./my-surveys-button";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import { UserContext } from "@/components/_auth/user-context";

const NavTabs = () => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <div className="flex space-x-5">
      {isAuthenticated ? (
        <>
          <MySurveyButton />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default NavTabs;
