import Link from "next/link";

type HeritageCardProps = {
  name: string;
  location: string;
  description: string;
  image: string;
  slug: string;
};

export function HeritageCard({
  name,
  location,
  description,
  image,
  slug,
}: HeritageCardProps) {
  return (
    <article className="heritage-card">
      <img
        src={image}
        alt={name}
        className="heritage-card-image"
      />

      <div className="heritage-card-content">
        <span className="heritage-badge">
          PANGASINAN
        </span>

        <h3>{name}</h3>

        <p className="heritage-location">
          📍 {location}
        </p>

        <p className="heritage-description">
          {description}
        </p>

        <Link
          href={`/heritage/${slug}`}
          className="heritage-link"
        >
          Explore →
        </Link>
      </div>
    </article>
  );
}