import Link from "next/link";

const TextButton = ({
  clickHandler,
  children,
  href,
}: {
  clickHandler?: () => void;
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <div className="flex w-full justify-center">
      {!href ? (
        <button
          onClick={clickHandler}
          type="button"
          className="flex h-10 items-center justify-center gap-7 border-none text-blue-500 transition hover:text-blue-600"
        >
          {children}
        </button>
      ) : (
        <Link
          href={href}
          className="flex h-10 items-center justify-center gap-7 border-none text-blue-500 transition hover:text-blue-600"
        >
          {children}
        </Link>
      )}
    </div>
  );
};

export default TextButton;
