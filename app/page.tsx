import Image from "next/image";
import Link from "next/link";
import { ArtistasSearch } from "@/components/ArtistasSearch";
import { InstagramIcon } from "@/components/InstagramIcon";
import { LogoIcon } from "@/components/LogoIcon";
import { artistsFlat } from "@/data/roster";

/** Matches `public/assets/Logo Dale Play Publishing-01.png` (spaces URL-encoded for the browser). */
const headerLogoSrc = "/assets/Logo%20Dale%20Play%20Publishing-01.png";

export default function HomePage() {
  return (
    <>
      <nav>
        <Link href="/" className="logo" aria-label="Dale Play Publishing — inicio">
          <span className="logo-image-wrap">
            <Image
              src={headerLogoSrc}
              alt="Dale Play Publishing"
              fill
              className="logo-image"
              sizes="min(480px, 62vw)"
              priority
            />
          </span>
        </Link>
        <ul>
          <li>
            <a href="#artistas">Artistas</a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-bg" aria-hidden />
        <Link href="/" className="logo hero-logo" aria-label="Dale Play Publishing — inicio">
          <span className="logo-image-wrap">
            <Image
              src={headerLogoSrc}
              alt="Dale Play Publishing"
              fill
              className="logo-image"
              sizes="(max-width: 768px) 98vw, min(99vw, 1440px)"
              priority
            />
          </span>
        </Link>
        <p className="hero-desc">
          El hogar de los autores, compositores y productores de habla hispana más importantes
        </p>
        <p className="hero-desc hero-regions">
          Argentina · Chile · Uruguay · España
        </p>
        <div className="scroll-hint">
          <span>Explorar</span>
          <div className="scroll-line" />
        </div>
      </section>

      <section className="section" id="artistas">
        <ArtistasSearch artists={artistsFlat} />
      </section>

      <footer>
        <div className="footer-logo">
          <LogoIcon gradientIdPrefix="footer-" className="logo-icon" />
          <span className="footer-brand-name">Dale Play Publishing</span>
        </div>
        <span className="footer-copy">
          © {new Date().getFullYear()} Dale Play Publishing. Todos los derechos reservados.
        </span>
        <div className="footer-right">
          <span className="footer-tagline">Where the music begins.</span>
          <a
            href="https://www.instagram.com/daleplaypublishing/?hl=es-la"
            className="footer-instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dale Play Publishing en Instagram"
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>
        </div>
      </footer>
    </>
  );
}
