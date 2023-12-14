import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600">
        Upewnij się że wypełniłeś schemat analizy
      </p>
      <Link
        href="/user-panel"
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Wróć do listy swoich ankiet
      </Link>
    </div>
  );
};

export default NotFound;
