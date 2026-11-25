export type HeritageSite = {
  id: string;
  name: string;
  location: string;
  category: string;
  image: string;
};

export const heritageSites: HeritageSite[] = [
  {
    id: "hundred-islands",
    name: "Hundred Islands",
    location: "Alaminos, Pangasinan",
    category: "Natural Heritage",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=75",
  },

  {
    id: "bolinao-lighthouse",
    name: "Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    category: "Cultural Landmark",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=75",
  },

  {
    id: "balungao-hot-spring",
    name: "Balungao Hot Spring",
    location: "Balungao, Pangasinan",
    category: "Tourism Destination",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=75",
  },
];