"use client";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const MySurveysButton = () => {
  return (
    <Link href="/user-panel" className="flex items-center justify-center">
      <DocumentDuplicateIcon className="text-white-600 mr-2 h-6 w-6" />
      <label className="text-white-600 cursor-pointer">Moje ankiety</label>
    </Link>
  );
};

export default MySurveysButton;
