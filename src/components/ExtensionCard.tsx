// src/components/ExtensionCard.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Github, ImageIcon } from "lucide-react";
import Modal from "./Modal";
import clsx from "clsx";

/**
 * Client-side interactive card (framer-motion, modal).
 */

type Ext = {
  title: string;
  slug: string;
  shortDesc: string;
  tags: string[];
  screenshots: string[];
  githubUrl: string;
  downloadUrl: string;
};

export default function ExtensionCard({ ext }: { ext: Ext }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.28 }}
        className={clsx("card-shimmer card focus-ring p-4 rounded-2xl shadow-card h-full flex flex-col")}
        tabIndex={0}
        role="article"
        aria-labelledby={`ext-${ext.slug}-title`}
      >
        <button onClick={() => setOpen(true)} aria-label={`Open screenshots for ${ext.title}`} className="relative rounded-lg overflow-hidden w-full h-40 mb-3 focus:outline-none">
          <img src={ext.screenshots?.[0] || "/screenshots/placeholder.jpg"} alt={`${ext.title} screenshot`} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute right-2 bottom-2 inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-black/60 px-2 py-1 text-xs">
            <ImageIcon className="h-4 w-4" />
            <span>{ext.screenshots?.length || 1}</span>
          </div>
        </button>

        <h3 id={`ext-${ext.slug}-title`} className="text-lg font-semibold">{ext.title}</h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2 flex-1">{ext.shortDesc}</p>

        <div className="mt-3 flex items-center gap-2 flex-wrap">
          {ext.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white" aria-hidden>
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <a href={ext.downloadUrl} className="inline-flex items-center gap-2 rounded-full px-3 py-2 bg-gradient-to-r from-purple-500 to-cyan-400 text-white text-sm shadow-sm focus-ring" aria-label={`Download ${ext.title}`}>
            <Download className="h-4 w-4" /> Download
          </a>

          <a href={ext.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm underline-offset-2" aria-label={`View ${ext.title} on GitHub`}>
            <Github className="h-4 w-4" /> GitHub
          </a>

          <Link href={`/extensions/${ext.slug}`} className="ml-auto text-sm hover:underline" aria-label={`Open details for ${ext.title}`}>
            Details →
          </Link>
        </div>
      </motion.article>

      <Modal open={open} onOpenChange={setOpen} title={`${ext.title} screenshots`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ext.screenshots.map((s, i) => (
            <img key={s + i} src={s} alt={`${ext.title} screenshot ${i + 1}`} className="w-full h-60 object-cover rounded-md" loading="lazy" />
          ))}
        </div>
      </Modal>
    </>
  );
}
