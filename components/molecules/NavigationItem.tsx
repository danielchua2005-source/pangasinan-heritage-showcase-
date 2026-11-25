import Link from "next/link";

type NavigationItemProps = {
  href: string;
  label: string;
};

export function NavigationItem({
  href,
  label,
}: NavigationItemProps) {
  return (
    <Link href={href} className="navigation-item">
      {label}
    </Link>
  );
}