"use client";

type SearchFormProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchForm({
  value,
  onChange,
}: SearchFormProps) {
  return (
    <form
      className="search-form"
      onSubmit={(event) => event.preventDefault()}
    >
      <span
        aria-hidden="true"
        style={{
          fontSize: "20px",
          flexShrink: 0,
        }}
      >
        🔎
      </span>

      <input
        type="search"
        placeholder="Search heritage..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Search heritage"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: "18px",
          }}
          aria-label="Clear search"
        >
          ×
        </button>
      )}

      <button type="submit">
        Search
      </button>
    </form>
  );
}