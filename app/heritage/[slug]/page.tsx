import Link from "next/link";

const heritageSites = [
  {
    slug: "hundred-islands",
    name: "Hundred Islands National Park",
    location: "Alaminos City, Pangasinan",
    image: "/images/images.jpg",
    category: "Natural Heritage",
    title: "Discover Hundred Islands",
    description:
      "Hundred Islands National Park is one of the most famous natural attractions in Pangasinan. It is known for its beautiful islands, clear waters, limestone formations, and scenic coastal views.",
    highlights: [
      "Located in Alaminos City, Pangasinan",
      "Known for its numerous islands and islets",
      "Popular destination for sightseeing and island activities",
    ],
  },

  {
    slug: "cape-bolinao-lighthouse",
    name: "Cape Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    image: "/images/images1.jpg",
    category: "Historical Heritage",
    title: "Discover Cape Bolinao Lighthouse",
    description:
      "Cape Bolinao Lighthouse is a historic landmark overlooking the western coastline of Pangasinan. It is recognized for its historical value and scenic views of the surrounding area.",
    highlights: [
      "Located in Bolinao, Pangasinan",
      "Historic coastal landmark",
      "Offers scenic views of the coastline",
    ],
  },

  {
    slug: "patar-beach",
    name: "Patar Beach",
    location: "Bolinao, Pangasinan",
    image: "/images/images2.jpg",
    category: "Natural Heritage",
    title: "Discover Patar Beach",
    description:
      "Patar Beach is a popular coastal destination in Bolinao known for its shoreline, rock formations, beautiful scenery, and relaxing sunset views.",
    highlights: [
      "Located in Bolinao, Pangasinan",
      "Known for its beach and rock formations",
      "Popular for scenic sunset views",
    ],
  },

  {
    slug: "enchanted-cave",
    name: "Enchanted Cave",
    location: "Bolinao, Pangasinan",
    image: "/images/images3.jpg",
    category: "Natural Heritage",
    title: "Discover Enchanted Cave",
    description:
      "Enchanted Cave is a natural attraction featuring a freshwater cave pool surrounded by limestone formations. It is one of the destinations that showcases the natural beauty of Bolinao.",
    highlights: [
      "Located in Bolinao, Pangasinan",
      "Features a natural freshwater cave pool",
      "Surrounded by limestone formations",
    ],
  },

  {
    slug: "manaoag-basilica",
    name: "Manaoag Basilica",
    location: "Manaoag, Pangasinan",
    image: "/images/images4.jpg",
    category: "Cultural Heritage",
    title: "Discover Manaoag Basilica",
    description:
      "Manaoag Basilica is one of Pangasinan's most recognized religious and cultural landmarks. It is an important destination for visitors interested in the province's religious heritage.",
    highlights: [
      "Located in Manaoag, Pangasinan",
      "Important religious landmark",
      "Recognized as part of Pangasinan's cultural heritage",
    ],
  },

  {
    slug: "balungao-hot-spring",
    name: "Balungao Hot Spring",
    location: "Balungao, Pangasinan",
    image: "/images/images5.jpg",
    category: "Natural Heritage",
    title: "Discover Balungao Hot Spring",
    description:
      "Balungao Hot Spring is a well-known destination featuring natural hot and cold spring attractions. It showcases another side of Pangasinan's natural environment.",
    highlights: [
      "Located in Balungao, Pangasinan",
      "Known for its natural hot and cold springs",
      "Popular destination for relaxation and recreation",
    ],
  },
];

export default function HeritageDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const site = heritageSites.find(
    (item) => item.slug === params.slug
  );

  if (!site) {
    return (
      <main className="about-section">
        <h1>Heritage not found</h1>

        <Link
          href="/heritage"
          className="button dark-button"
        >
          ← Back to Heritage
        </Link>
      </main>
    );
  }

  return (
    <main>
      {/* HERO */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `linear-gradient(
            rgba(10, 38, 31, 0.78),
            rgba(10, 38, 31, 0.58)
          ), url("${site.image}")`,
        }}
      >
        <div className="about-content">
          <p className="hero-label">
            {site.category.toUpperCase()}
          </p>

          <h1>{site.name}</h1>

          <p>📍 {site.location}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="heritage-detail">
        <div className="heritage-detail-image">
          <img
            src={site.image}
            alt={site.name}
          />
        </div>

        <div className="heritage-detail-content">
          <p className="section-label">
            {site.category.toUpperCase()}
          </p>

          <h2>{site.title}</h2>

          <p className="heritage-detail-description">
            {site.description}
          </p>

          <h3>Highlights</h3>

          <ul>
            {site.highlights.map((highlight) => (
              <li key={highlight}>
                {highlight}
              </li>
            ))}
          </ul>

          <Link
            href="/heritage"
            className="button dark-button"
          >
            ← Back to Heritage
          </Link>
        </div>
      </section>
    </main>
  );
}