import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        className="hero"
        style={{
          background:
            "linear-gradient(rgba(10, 38, 31, 0.45), rgba(10, 38, 31, 0.45)), url('/images/images6.jpg') center/cover no-repeat",
        }}
      >
        <div className="hero-content">
          <p className="hero-label">PANGASINAN HERITAGE</p>

          <h1>Discover the Heritage of Pangasinan</h1>

          <p>
            Explore the places, landmarks, culture, and natural
            beauty that make Pangasinan special.
          </p>

          <Link href="/heritage" className="button">
            Explore Heritage →
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="heritage-section">
        <div className="section-heading">
          <p>WELCOME</p>

          <h2>Explore Pangasinan</h2>

          <span>
            Discover the rich heritage, beautiful destinations,
            and cultural landmarks of Pangasinan.
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,.07)",
            }}
          >
            <h3>Natural Beauty</h3>

            <p
              style={{
                color: "#666",
                lineHeight: 1.7,
                marginTop: "12px",
              }}
            >
              Experience the beaches, islands, caves, and
              other natural attractions found across the
              province.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,.07)",
            }}
          >
            <h3>History & Culture</h3>

            <p
              style={{
                color: "#666",
                lineHeight: 1.7,
                marginTop: "12px",
              }}
            >
              Learn about the historical and cultural
              landmarks that represent Pangasinan's heritage.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,.07)",
            }}
          >
            <h3>Discover More</h3>

            <p
              style={{
                color: "#666",
                lineHeight: 1.7,
                marginTop: "12px",
              }}
            >
              Browse our heritage showcase and explore
              individual destinations.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "55px" }}>
          <Link
            href="/heritage"
            className="button dark-button"
          >
            View Heritage Destinations →
          </Link>
        </div>
      </section>
    </main>
  );
}