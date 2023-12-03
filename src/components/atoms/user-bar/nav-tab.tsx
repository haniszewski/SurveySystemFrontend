"use client";
import Link from "next/link";
import React from 'react';
import { Tabs, Tab } from '@mui/material';
import MySurveyButton from './my-surveys-button';
import LoginButton from "./login-button";

const NavTabs = () => {

  // TODO: swapowanie loguj wyloguj
  return (
    <div className="flex space-x-5">
      <MySurveyButton></MySurveyButton>
      <LoginButton></LoginButton>
    </div>
  );
};

export default NavTabs;

