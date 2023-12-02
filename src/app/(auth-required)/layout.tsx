import UserProvider from "@/components/_auth/user-provider";

export default function LoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserProvider>{children}</UserProvider>;
}
