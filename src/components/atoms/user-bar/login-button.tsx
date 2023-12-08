// "use client";
import { PowerIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();
  return (
    <Link href="/auth/login" className="flex items-center justify-center">
      <PowerIcon className="text-white-600 mr-2 h-6 w-6" />
      <label
        // onClick={() => router.push("auth/login")}
        className="text-white-600 cursor-pointer"
      >
        Zaloguj
      </label>
    </Link>
  );
};

export default LoginButton;
