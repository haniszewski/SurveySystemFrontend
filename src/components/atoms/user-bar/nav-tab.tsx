"use client";

import MySurveyButton from "./my-surveys-button";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import { useUser } from "@/hooks/useUser";

const NavTabs = () => {
  const { isAuthenticated } = useUser();

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
