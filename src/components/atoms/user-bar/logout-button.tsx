"use client";
import { PowerIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const LogoutButton = () => {
  return (
    <Link href="/auth/logout" className="flex items-center justify-center">
      <PowerIcon className="text-white-600 mr-2 h-6 w-6" />
      <label className="text-white-600">Wyloguj</label>
    </Link>
  );
};

export default LogoutButton;
