// ExtensionCard.tsx
"use client";

import React from "react";
import { FaGithub, FaReact } from "react-icons/fa";

type Ext = {
  title: string;
  slug: string;
  shortDesc: string;
  tags?: string[];
  screenshots?: string[];
  githubUrl?: string;
  downloadUrl?: string;
};

export default function ExtensionCard({ ext }: { ext: Ext }) {
  const initial = ext.screenshots && ext.screenshots.length > 0 ? ext.screenshots[0] : "/screenshots/placeholder.jpg";
  const [bgSrc, setBgSrc] = React.useState(initial);

  const onBgError = () => {
    setBgSrc("/screenshots/placeholder.jpg");
  };

  return (
    <article className="extension-card" aria-labelledby={`ext-${ext.slug}-title`}>
      <img
        src={bgSrc}
        alt={`${ext.title} screenshot`}
        className="extension-card__img"
        onError={onBgError}
      />

      <div className="extension-card__overlay" />

      <div className="extension-card__content">
        <div className="extension-card__meta">
          <h3 id={`ext-${ext.slug}-title`} className="extension-card__title">
            {ext.title}
          </h3>

          <p className="extension-card__desc">{ext.shortDesc}</p>

          <div className="extension-card__tags" aria-hidden>
            {ext.tags?.slice(0, 4).map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="extension-card__actions">
          <a
            href={ext.downloadUrl || "#"}
            className="btn-icon"
            title={`Download ${ext.title}`}
            aria-label={`Download ${ext.title}`}
            rel="noopener noreferrer"
          >
            <FaReact />
          </a>

          <a
            href={ext.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            title={`Open ${ext.title} on GitHub`}
            aria-label={`Open ${ext.title} on GitHub`}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </article>
  );
}
