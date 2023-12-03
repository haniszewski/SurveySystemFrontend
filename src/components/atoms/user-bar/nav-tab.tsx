"use client";
import React, { useState } from "react";
import Link from "next/link";

import { Tabs, Tab } from "@mui/material";
import MySurveyButton from "./my-surveys-button";
import LoginButton from "./login-button";

const NavTabs = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="flex space-x-5">
      <MySurveyButton></MySurveyButton>

      {isLoggedIn ? <LogoutButton></LogoutButton> : <LoginButton></LoginButton>}
    </div>
  );
};

export default NavTabs;
