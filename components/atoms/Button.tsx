import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className="button">
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}