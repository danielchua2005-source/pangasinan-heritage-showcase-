type TypographyProps = {
  children: React.ReactNode;
  as?: "p" | "h1" | "h2" | "h3" | "span";
  className?: string;
};

export function Typography({
  children,
  as = "p",
  className = "",
}: TypographyProps) {
  const Tag = as;

  return <Tag className={className}>{children}</Tag>;
}