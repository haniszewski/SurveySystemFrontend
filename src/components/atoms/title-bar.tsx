"use client";
import React, { useState } from "react";
import Link from "next/link";

import { Tabs, Tab } from "@mui/material";
import MySurveyButton from "./my-surveys-button";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

const NavTabs = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="flex space-x-5">
      {isLoggedIn ? (
        <>
          <MySurveyButton />
          <LogoutButton onClick={handleLogout} />
        </>
      ) : (
        <LoginButton onClick={handleLogin} />
      )}
    </div>
  );
};

export default NavTabs;
