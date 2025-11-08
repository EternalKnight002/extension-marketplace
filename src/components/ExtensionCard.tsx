// src/components/ExtensionCard.tsx
"use client";

import React from "react";

type Ext = {
  title: string;
  slug: string;
  shortDesc: string;
  tags?: string[];
  screenshots?: string[]; // one or more relative paths, e.g. "/screenshots/foo-1.jpg"
  githubUrl?: string;
  downloadUrl?: string;
};

export default function ExtensionCard({ ext }: { ext: Ext }) {
  // choose the first declared screenshot or a default path
  const declared = ext.screenshots && ext.screenshots.length > 0 ? ext.screenshots[0] : "/screenshots/placeholder.jpg";

  // local state for the image src (so we can swap onError)
  const [src, setSrc] = React.useState<string>(declared);

  // onError handler: try common alternative file extensions, then fallback
  function handleImgError() {
    // if already at the fallback, don't loop
    if (src.endsWith("/placeholder.jpg") || src.endsWith("/placeholder.png")) {
      return;
    }

    // attempt sequence: current -> .png -> .jpg -> placeholder
    const tryVariants = (base: string) => {
      const url = base;
      const slashIndex = url.lastIndexOf("/");
      const filename = url.slice(slashIndex + 1);
      const dir = url.slice(0, slashIndex + 1);
      const nameNoExt = filename.replace(/\.(jpg|jpeg|png|webp)$/i, "");

      // generate candidates
      return [
        `${dir}${nameNoExt}.png`,
        `${dir}${nameNoExt}.jpg`,
        `${dir}${nameNoExt}.jpeg`,
        `${dir}${nameNoExt}.webp`,
        "/screenshots/placeholder.jpg"
      ];
    };

    const candidates = tryVariants(src);

    // find the first candidate that is different from current src, set it
    for (const c of candidates) {
      if (c !== src) {
        setSrc(c);
        return;
      }
    }

    // final fallback
    setSrc("/screenshots/placeholder.jpg");
  }

  return (
    <article
      className="bg-white dark:bg-[#071026] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
      aria-labelledby={`ext-${ext.slug}-title`}
      role="article"
    >
      <div className="flex items-start gap-4">
        <img
          src={src}
          alt={`${ext.title} screenshot`}
          className="w-28 h-20 object-cover rounded-md shrink-0 bg-gray-100"
          loading="lazy"
          onError={handleImgError}
        />

        <div>
          <h3 id={`ext-${ext.slug}-title`} className="text-lg font-semibold">
            {ext.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{ext.shortDesc}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {ext.tags?.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 mt-auto flex items-center gap-4">
        <a
          href={ext.downloadUrl || "#"}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-400 text-white text-sm shadow-sm"
          aria-label={`Download ${ext.title}`}
        >
          ⬇ Download
        </a>

        <a
          href={ext.githubUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline"
          aria-label={`View ${ext.title} on GitHub`}
        >
          View on GitHub
        </a>
      </div>
    </article>
  );
}
