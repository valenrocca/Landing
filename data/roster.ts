/**
 * Artist photos live in `public/assets/`.
 * Name files `{slug}-{n}.{ext}` (e.g. `bizarrap-1.png`) where `n` is the order you assign,
 * and set `image` to `/assets/bizarrap-1.png`.
 */
export type ArtistRole = "Artist" | "Producer";

export type RosterArtist = {
  initials: string;
  name: string;
  role: ArtistRole;
  /** e.g. `/assets/bizarrap-1.png` */
  image?: string;
};

export type CountryRoster = {
  id: string;
  flag: string;
  title: string;
  cardCountryLabel: string;
  artists: RosterArtist[];
};

export type ArtistWithCountry = RosterArtist & { countryLabel: string };

export const countries: CountryRoster[] = [
  {
    id: "argentina",
    flag: "🇦🇷",
    title: "Argentina",
    cardCountryLabel: "Argentina",
    artists: [
      {
        initials: "BZ",
        name: "Bizarrap",
        role: "Producer",
        image: "/assets/bizarrap-1.png",
      },
      {
        initials: "NN",
        name: "Nicki Nicole",
        role: "Artist",
        image: "/assets/nicki-2.jpg",
      },
      {
        initials: "YS",
        name: "Yami Safdie",
        role: "Artist",
        image: "/assets/yami-safdie-3.webp",
      },
      {
        initials: "SA",
        name: "Santi Alvarado",
        role: "Artist",
        image: "/assets/santi-alvarado-4.jpg",
      },
      {
        initials: "SS",
        name: "Six Sex",
        role: "Artist",
        image: "/assets/six-sex-5.jpg",
      },
      {
        initials: "AC",
        name: "Acru",
        role: "Artist",
        image: "/assets/acru-6.webp",
      },
      {
        initials: "DP",
        name: "Doble P",
        role: "Artist",
        image: "/assets/doble-p-7.jpg",
      },
      {
        initials: "TC",
        name: "Taichu",
        role: "Artist",
        image: "/assets/taichu-8.jpg",
      },
      {
        initials: "BM",
        name: "BM",
        role: "Artist",
        image: "/assets/bm-9.jpg",
      },
      {
        initials: "DM",
        name: "Danilo Montana",
        role: "Producer",
        image: "/assets/danilo-montana-10.jpg",
      },
      {
        initials: "RE",
        name: "Rei",
        role: "Artist",
        image: "/assets/rei-11.jpg",
      },
      {
        initials: "AN",
        name: "Ansel",
        role: "Artist",
        image: "/assets/ansel-12.jpg",
      },
      {
        initials: "TX",
        name: "TadeoXQ",
        role: "Artist",
        image: "/assets/tadeoxq-13.png",
      },
      {
        initials: "EZ",
        name: "Ezeq",
        role: "Artist",
        image: "/assets/ezeq-14.jpg",
      },
      {
        initials: "CG",
        name: "Cigaro",
        role: "Artist",
        image: "/assets/cigaro-15.jpg",
      },
      {
        initials: "JC",
        name: "Jacobo",
        role: "Artist",
        image: "/assets/jacobo-16.png",
      },
      {
        initials: "AK",
        name: "Akim 88",
        role: "Artist",
        image: "/assets/akim-88-17.jpg",
      },
      {
        initials: "MS",
        name: "Maria Sol Castaño",
        role: "Artist",
        image: "/assets/maria-sol-castano-18.jpg",
      },
      {
        initials: "AR",
        name: "Agus Ramasso",
        role: "Artist",
        image: "/assets/agus-ramasso-19.jpg",
      },
      {
        initials: "AF",
        name: "Axel Follin",
        role: "Producer",
        image: "/assets/axel-follin-20.jpg",
      },
      {
        initials: "HP",
        name: "Halpe",
        role: "Artist",
        image: "/assets/halpe-21.jpg",
      },
      {
        initials: "ME",
        name: "Meimi",
        role: "Artist",
        image: "/assets/meimi-22.webp",
      },
      {
        initials: "DB",
        name: "Dommobeats",
        role: "Producer",
        image: "/assets/dommobeats-23.jpg",
      },
    ],
  },
  {
    id: "chile",
    flag: "🇨🇱",
    title: "Chile",
    cardCountryLabel: "Chile",
    artists: [
      {
        initials: "VC",
        name: "Vinco",
        role: "Artist",
        image: "/assets/vinco-24.jpg",
      },
      {
        initials: "EB",
        name: "Ego Bloy",
        role: "Artist",
        image: "/assets/ego-bloy-25.jpg",
      },
    ],
  },
  {
    id: "uruguay",
    flag: "🇺🇾",
    title: "Uruguay",
    cardCountryLabel: "Uruguay",
    artists: [
      {
        initials: "BA",
        name: "Balta",
        role: "Artist",
        image: "/assets/balta-26.webp",
      },
      {
        initials: "KN",
        name: "Knak",
        role: "Artist",
        image: "/assets/knak-27.jpeg",
      },
      {
        initials: "ZB",
        name: "Zeballos",
        role: "Artist",
        image: "/assets/zeballos-28.jpeg",
      },
    ],
  },
  {
    id: "spain",
    flag: "🇪🇸",
    title: "España",
    cardCountryLabel: "España",
    artists: [
      {
        initials: "DL",
        name: "Delaossa",
        role: "Artist",
        image: "/assets/delaossa-35.webp",
      },
      {
        initials: "KD",
        name: "Kiddo",
        role: "Artist",
        image: "/assets/kiddo-36.jpg",
      },
      {
        initials: "AB",
        name: "Abhir",
        role: "Artist",
        image: "/assets/abhir-37.webp",
      },
      {
        initials: "BB",
        name: "Barry B",
        role: "Artist",
        image: "/assets/barry-b-38.jpg",
      },
      {
        initials: "TS",
        name: "Tuiste",
        role: "Artist",
        image: "/assets/tuiste-39.jpg",
      },
      {
        initials: "MY",
        name: "Mayo",
        role: "Artist",
        image: "/assets/mayo-40.png",
      },
      {
        initials: "GD",
        name: "Gara Durán",
        role: "Artist",
        image: "/assets/gara-duran-41.jpeg",
      },
    ],
  },
];

/** Single roster list for unified “Artistas” section (order follows `countries`). */
export const artistsFlat: ArtistWithCountry[] = countries.flatMap((country) =>
  country.artists.map((artist) => ({
    ...artist,
    countryLabel: country.cardCountryLabel,
  })),
);
