import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="about-hero">
        <div className="about-content">
          <p className="hero-label">ABOUT THE PROJECT</p>

          <h1>Pangasinan Heritage Digital Showcase</h1>

          <p>
            A digital showcase created to introduce and highlight
            selected heritage destinations of Pangasinan.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <div className="section-heading">
          <p>OUR PURPOSE</p>

          <h2>Discover. Preserve. Appreciate.</h2>

          <span>
            The Pangasinan Heritage Digital Showcase presents
            selected cultural, historical, and natural destinations
            in an accessible digital platform.
          </span>
        </div>

        <div className="about-cards">
          <article>
            <h3>Discover</h3>
            <p>
              Explore notable places and landmarks across
              Pangasinan and learn more about their importance
              and unique characteristics.
            </p>
          </article>

          <article>
            <h3>Preserve</h3>
            <p>
              Presenting heritage digitally can help raise
              awareness and encourage appreciation of the
              province&apos;s valuable heritage.
            </p>
          </article>

          <article>
            <h3>Appreciate</h3>
            <p>
              The showcase encourages visitors and learners
              to appreciate the natural, historical, and
              cultural heritage of Pangasinan.
            </p>
          </article>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section
        className="about-section"
        style={{
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "100px",
        }}
      >
        <h2
          style={{
            color: "#173f35",
            fontSize: "clamp(32px, 5vw, 52px)",
            marginBottom: "18px",
          }}
        >
          Start Exploring
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
            lineHeight: 1.7,
            maxWidth: "650px",
            margin: "0 auto",
          }}
        >
          Discover the heritage destinations featured in
          our digital showcase.
        </p>

        <Link
          href="/heritage"
          className="button dark-button"
        >
          Explore Heritage →
        </Link>
      </section>
    </main>
  );
}
