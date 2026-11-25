"use client";

import { useState } from "react";
import { HeritageCard } from "../molecules/HeritageCard";
import { SearchForm } from "../molecules/SearchForm";

const heritageSites = [
  {
    name: "Hundred Islands National Park",
    location: "Alaminos City, Pangasinan",
    description:
      "A famous natural attraction known for its beautiful islands and coastal waters.",
    image: "/images/images.jpg",
    slug: "hundred-islands",
  },
  {
    name: "Cape Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    description:
      "A historic lighthouse overlooking the western coastline of Pangasinan.",
    image: "/images/images1.jpg",
    slug: "cape-bolinao-lighthouse",
  },
  {
    name: "Patar Beach",
    location: "Bolinao, Pangasinan",
    description:
      "A popular coastal destination known for its beach and rock formations.",
    image: "/images/images2.jpg",
    slug: "patar-beach",
  },
  {
    name: "Enchanted Cave",
    location: "Bolinao, Pangasinan",
    description:
      "A natural attraction featuring a freshwater cave pool surrounded by limestone formations.",
    image: "/images/images3.jpg",
    slug: "enchanted-cave",
  },
  {
    name: "Manaoag Basilica",
    location: "Manaoag, Pangasinan",
    description:
      "One of Pangasinan's recognized religious and cultural landmarks.",
    image: "/images/images4.jpg",
    slug: "manaoag-basilica",
  },
  {
    name: "Balungao Hot Spring",
    location: "Balungao, Pangasinan",
    description:
      "A destination featuring natural hot and cold spring attractions.",
    image: "/images/images5.jpg",
    slug: "balungao-hot-spring",
  },
];

export function HeritageGrid() {
  const [search, setSearch] = useState("");

  const filteredSites = heritageSites.filter((site) => {
    const text =
      `${site.name} ${site.location} ${site.description}`.toLowerCase();

    return text.includes(search.toLowerCase().trim());
  });

  return (
    <section className="heritage-section">
      <div className="section-heading">
        <p>EXPLORE</p>

        <h2>Six Heritage Destinations</h2>

        <span>
          Discover selected cultural, historical, and natural
          destinations across Pangasinan.
        </span>
      </div>

      <SearchForm
        value={search}
        onChange={setSearch}
      />

      <p
        style={{
          marginTop: "18px",
          marginBottom: "25px",
          color: "#666",
        }}
      >
        {search
          ? `${filteredSites.length} result${
              filteredSites.length === 1 ? "" : "s"
            } found`
          : "6 heritage destinations"}
      </p>

      {filteredSites.length > 0 ? (
        <div className="heritage-grid">
          {filteredSites.map((site) => (
            <HeritageCard
              key={site.name}
              name={site.name}
              location={site.location}
              description={site.description}
              image={site.image}
              slug={site.slug}
            />
          ))}
        </div>
      ) : (
        <div
          style={{
            padding: "50px 20px",
            textAlign: "center",
            background: "white",
            borderRadius: "16px",
          }}
        >
          <h3>No heritage destination found</h3>

          <p style={{ marginTop: "10px", color: "#666" }}>
            Try searching for another place.
          </p>
        </div>
      )}
    </section>
  );
}