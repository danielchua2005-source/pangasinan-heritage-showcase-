import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">
          PANGASINAN HERITAGE
        </p>

        <h1>
          Discover the Heritage of Pangasinan
        </h1>

        <p>
          Explore the places, landmarks, culture,
          and natural beauty that make Pangasinan special.
        </p>

        <Link href="#heritage" className="button">
          Explore Heritage →
        </Link>
      </div>
    </section>
  );
}