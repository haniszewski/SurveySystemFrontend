"use client";

import { useUser } from "@/hooks/useUser";

const UserHeader = () => {
  const { username } = useUser();
  return (
    <div className="m-5 flex h-20 w-full justify-between rounded-lg bg-white p-4">
      <div className="ml-4 flex items-center">
        <span className="text-lg font-semibold text-gray-800">
          Witaj, {username}!
          <br />
          Oto twoje ankiety:
        </span>
      </div>
    </div>
  );
};

export default UserHeader;
