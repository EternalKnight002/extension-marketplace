// src/components/ExtensionCard.tsx
"use client";

import React from "react";
import { FaGithub, FaDownload } from "react-icons/fa";

/**
 * Redesigned extension card:
 * - Screenshot covers entire card (background-image)
 * - Bottom overlay contains title, shortDesc, animated tags, actions
 * - Accessible: alt image included for screen readers, buttons keyboard-focusable
 *
 * Make sure screenshot paths exist under /public/screenshots/ and match data/extensions.json
 */

type Ext = {
  title: string;
  slug: string;
  shortDesc: string;
  tags?: string[];
  screenshots?: string[]; // example: ['/screenshots/article-highlighter-1.jpg']
  githubUrl?: string;
  downloadUrl?: string;
};

export default function ExtensionCard({ ext }: { ext: Ext }) {
  // Use first screenshot, fallback to placeholder
  const declared = ext.screenshots && ext.screenshots.length > 0 ? ext.screenshots[0] : "/screenshots/placeholder.jpg";
  const [bgSrc, setBgSrc] = React.useState(declared);

  // When bg fails, try common variants then placeholder (defensive)
  const onBgError = () => {
    const fallbackCandidates = (() => {
      const slash = bgSrc.lastIndexOf("/");
      const filename = bgSrc.slice(slash + 1);
      const dir = bgSrc.slice(0, slash + 1);
      const nameNoExt = filename.replace(/\.(jpg|jpeg|png|webp)$/i, "");
      return [
        `${dir}${nameNoExt}.jpg`,
        `${dir}${nameNoExt}.png`,
        `${dir}${nameNoExt}.webp`,
        "/screenshots/placeholder.jpg"
      ];
    })();

    for (const c of fallbackCandidates) {
      if (c !== bgSrc) {
        setBgSrc(c);
        return;
      }
    }
    setBgSrc("/screenshots/placeholder.jpg");
  };

  return (
    <article
      className="extension-card group"
      aria-labelledby={`ext-${ext.slug}-title`}
      role="article"
    >
      {/* Background image element used for cover; we include an img for SR and for onError handling */}
      <img
        src={bgSrc}
        alt={`${ext.title} screenshot`}
        className="extension-card__img"
        onError={onBgError}
        aria-hidden="true" /* decorative visually because title & desc are in overlay */
      />

      {/* overlay gradient (light to transparent) and content anchored at bottom */}
      <div className="extension-card__overlay" />

      <div className="extension-card__content">
        <div className="extension-card__meta">
          <h3 id={`ext-${ext.slug}-title`} className="extension-card__title">
            {ext.title}
          </h3>

          <p className="extension-card__desc">{ext.shortDesc}</p>

          <div className="extension-card__tags" aria-hidden>
            {ext.tags?.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="extension-card__actions">
          {/* Download button (primary) */}
          <a
            href={ext.downloadUrl || "#"}
            className="btn-download"
            aria-label={`Download ${ext.title}`}
            tabIndex={0}
          >
            <FaDownload className="mr-2" />
            Download
          </a>

          {/* GitHub icon-only button */}
          <a
            href={ext.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
            aria-label={`Open ${ext.title} on GitHub`}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </article>
  );
}
