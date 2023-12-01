import { PowerIcon } from "@heroicons/react/24/outline";

const LogoutButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button type="button" onClick={onClick}>
      <PowerIcon className="h-6 w-6 text-black-600" />
    </button>
  );
};

export default LogoutButton;
