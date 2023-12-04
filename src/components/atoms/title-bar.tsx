import React from "react";
import Link from "next/link";
import NavTab from "@/components/atoms/user-bar/nav-tab";

const TitleBar = ({ title }: { title: string }) => {
  return (
    <div className="flex h-full items-center justify-between bg-sky-700 p-6">
      <div className="flex flex-shrink-0 items-center text-white">
        <Link href="/">
          <span className="cursor-pointer text-3xl font-semibold tracking-tight">
            {title}
          </span>
        </Link>
      </div>
      <div className="flex flex-shrink-0 items-center text-white">
        <NavTab />
      </div>
    </div>
  );
};

export default TitleBar;
