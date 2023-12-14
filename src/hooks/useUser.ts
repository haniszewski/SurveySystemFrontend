import { useContext } from "react";
import { UserContext } from "@/components/_auth/user-context";

export function useUser() {
  const user = useContext(UserContext);
  return user;
}
