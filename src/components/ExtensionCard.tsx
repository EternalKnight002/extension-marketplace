// ExtensionCard.tsx
"use client";

import React from "react";
import { FaGithub, FaDownload } from "react-icons/fa";

type Ext = {
  title: string;
  slug: string;
  shortDesc?: string;
  screenshots?: string[];
  githubUrl?: string;
  downloadUrl?: string;
};

export default function ExtensionCard({ ext }: { ext: Ext }) {
  const initial = ext.screenshots && ext.screenshots.length > 0 ? ext.screenshots[0] : "/screenshots/placeholder.jpg";
  const [bgSrc, setBgSrc] = React.useState(initial);

  const onBgError = () => setBgSrc("/screenshots/placeholder.jpg");

  return (
    <article className="extension-card" aria-labelledby={`ext-${ext.slug}-title`}>
      <img
        src={bgSrc}
        alt={`${ext.title} screenshot`}
        className="extension-card__img"
        onError={onBgError}
        draggable={false}
      />

      <div className="extension-card__overlay" />

      <div className="extension-card__content">
        <div className="extension-card__meta">
          <h3 id={`ext-${ext.slug}-title`} className="extension-card__title">
            {ext.title}
          </h3>

          {/* hidden by default, revealed on hover */}
          <p
            className="extension-card__desc"
            aria-hidden={ext.shortDesc ? "false" : "true"}
          >
            {ext.shortDesc ?? ""}
          </p>
        </div>

        <div className="extension-card__actions" aria-hidden="false">
          <a
            href={ext.downloadUrl || "#"}
            className="btn-icon"
            aria-label={`Download ${ext.title}`}
            title={`Download ${ext.title}`}
            rel="noopener noreferrer"
          >
            <FaDownload />
            <span className="sr-only">Download {ext.title}</span>
          </a>

          <a
            href={ext.githubUrl || "#"}
            className="btn-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${ext.title} on GitHub`}
            title={`Open ${ext.title} on GitHub`}
          >
            <FaGithub />
            <span className="sr-only">Open {ext.title} on GitHub</span>
          </a>
        </div>
      </div>
    </article>
  );
}
