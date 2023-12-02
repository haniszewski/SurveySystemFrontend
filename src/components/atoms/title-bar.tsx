import React from "react";

const TitleBar = ({ title }: { title: string }) => {
  return (
    <div className="flex h-full flex-wrap items-center justify-center bg-sky-700 p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <span className="text-3xl font-semibold tracking-tight">{title}</span>
      </div>
    </div>
  );
};

export default TitleBar;
