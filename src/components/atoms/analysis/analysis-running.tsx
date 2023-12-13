"use client";

import {
  ClockLoader,
  FadeLoader,
  HashLoader,
  MoonLoader,
} from "react-spinners";

const AnalysisRunning = () => {
  const randomSpinners = [
    <ClockLoader key={1} color="#3B82F6" size={100} />,
    <HashLoader key={4} color="#3B82F6" size={100} />,
    <FadeLoader key={2} color="#3B82F6" radius={100} />,
    <MoonLoader key={3} color="#3B82F6" size={100} />,
  ];

  return (
    <div className="flex h-full items-center justify-center bg-sky-100">
      <div className="flex flex-col items-center gap-20">
        <div className="mt-4 text-center text-3xl font-bold text-gray-900">
          Trwa analizowanie danych
        </div>
        {randomSpinners[Math.floor(Math.random() * randomSpinners.length)]}
      </div>
    </div>
  );
};

export default AnalysisRunning;
