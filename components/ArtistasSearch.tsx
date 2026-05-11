"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { ArtistWithCountry } from "@/data/roster";

function matchesQuery(entry: ArtistWithCountry, raw: string): boolean {
  const q = raw.trim().toLowerCase();
  if (!q) return true;
  const name = entry.name.toLowerCase();
  const country = entry.countryLabel.toLowerCase();
  return name.includes(q) || country.includes(q);
}

export function ArtistasSearch({ artists }: { artists: ArtistWithCountry[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => artists.filter((a) => matchesQuery(a, query)),
    [artists, query],
  );

  return (
    <>
      <div className="roster-search-wrap reveal">
        <label htmlFor="artistas-search" className="visually-hidden">
          Buscar artistas por nombre o país
        </label>
        <input
          id="artistas-search"
          type="search"
          className="roster-search"
          placeholder="Buscar por nombre o país..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          spellCheck={false}
        />
      </div>
      <div className="section-header reveal">
        <h2 className="section-title">Artistas</h2>
        <div className="section-line" />
      </div>
      <div className="artist-grid reveal">
        {filtered.length === 0 ? (
          <p className="roster-empty" role="status">
            {`No se encontraron artistas para "${query.trim()}".`}
          </p>
        ) : (
          filtered.map((entry) => (
            <div key={`${entry.countryLabel}-${entry.name}`} className="artist-card">
              {entry.image ? (
                <Image
                  src={entry.image}
                  alt={entry.name}
                  fill
                  className="artist-img"
                  sizes="(max-width: 768px) 45vw, 200px"
                />
              ) : (
                <div className="artist-placeholder">{entry.initials}</div>
              )}
              <div className="artist-info">
                <div className="artist-country">{entry.countryLabel}</div>
                <div className="artist-name">{entry.name}</div>
                <span className="artist-badge">{entry.role}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
