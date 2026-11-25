type IconProps = {
  type: "pin" | "arrow" | "search";
};

export function Icon({ type }: IconProps) {
  if (type === "pin") {
    return <span>📍</span>;
  }

  if (type === "arrow") {
    return <span>→</span>;
  }

  return <span>🔍</span>;
}