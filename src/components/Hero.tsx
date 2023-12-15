"use client";

import React from "react";
import Link from "next/link";
import { useUser } from "@/hooks/useUser";

const Hero = ({ heading, message }: { heading: string; message: string }) => {
  const { isAuthenticated } = useUser();
  return (
    <div className="custom-img flex h-screen items-center justify-center bg-cover bg-fixed bg-center">
      {/* Overlay */}
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[2] bg-black/70" />
      <div className="z-[2] mt-[-10rem] p-5 text-white">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>

        {!isAuthenticated && (
          <Link href="/auth/register" className="border px-8 py-2">
            Zarejestruj się
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
