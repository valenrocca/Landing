import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/InstagramIcon";
import { LogoIcon } from "@/components/LogoIcon";
import { countries } from "@/data/roster";

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
            <a href="#argentina">Argentina</a>
          </li>
          <li>
            <a href="#chile">Chile</a>
          </li>
          <li>
            <a href="#uruguay">Uruguay</a>
          </li>
          <li>
            <a href="#mexico">México</a>
          </li>
          <li>
            <a href="#spain">Spain</a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-bg" aria-hidden />
        <p className="hero-eyebrow">Nuestros Artistas</p>
        <h1>DALE PLAY</h1>
        <p className="hero-sub">Publishing</p>
        <p className="hero-desc">
          El hogar de los productores y compositores más importantes de habla hispana.
        </p>
        <p className="hero-desc hero-regions">
          Argentina · Chile · Uruguay · México · España
        </p>
        <div className="scroll-hint">
          <span>Explorar</span>
          <div className="scroll-line" />
        </div>
      </section>

      {countries.map((country, index) => (
        <Fragment key={country.id}>
          {index > 0 ? <div className="divider" aria-hidden /> : null}
          <section className="section" id={country.id}>
            <div className="section-header reveal">
              <span className="flag">{country.flag}</span>
              <h2 className="section-title">{country.title}</h2>
              <div className="section-line" />
            </div>
            <div className="artist-grid reveal">
              {country.artists.map((artist) => (
                <div key={artist.name} className="artist-card">
                  {artist.image ? (
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="artist-img"
                      sizes="(max-width: 768px) 45vw, 200px"
                    />
                  ) : (
                    <div className="artist-placeholder">{artist.initials}</div>
                  )}
                  <div className="artist-info">
                    <div className="artist-country">{country.cardCountryLabel}</div>
                    <div className="artist-name">{artist.name}</div>
                    <span className="artist-badge">{artist.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Fragment>
      ))}

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
