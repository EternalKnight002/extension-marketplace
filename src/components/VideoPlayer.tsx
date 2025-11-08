// src/components/VideoPlayer.tsx
"use client";

import React from "react";
import { FileDown, Play } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Client-side video wrapper with framer-motion for small entrance animation.
 */

type Props = {
  src: string;
  poster: string;
  title: string;
  downloadHref?: string;
};

export default function VideoPlayer({ src, poster, title, downloadHref }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="card card-shimmer rounded-2xl p-3">
      <div className="relative rounded-md overflow-hidden">
        <video className="w-full rounded-md" controls preload="metadata" poster={poster} aria-label={title}>
          <source src={src} type="video/mp4" />
          Your browser does not support HTML5 video. You can download it below.
        </video>
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <Play className="h-5 w-5" />
          <span className="text-sm font-medium">{title}</span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Step-by-step guide available below</p>
        {downloadHref && (
          <a href={downloadHref} download className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium focus-ring" aria-label={`Download video ${title}`}>
            <FileDown className="h-4 w-4" /> Download
          </a>
        )}
      </div>
    </motion.div>
  );
}
