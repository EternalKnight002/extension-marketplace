// src/components/VideoPlayer.tsx
"use client";

import React from "react";
import { Download } from "lucide-react";

/**
 * VideoPlayer
 * - Responsive 16:9 player with large poster and play-overlay.
 * - Click overlay to play; native controls appear and user can pause.
 *
 * Props:
 * - src: string -> video path under /public/videos/...
 * - poster: string -> poster image path (optional)
 * - title: string -> accessible label
 * - downloadHref: string -> link to raw video file (optional)
 */

type Props = {
  src: string;
  poster?: string;
  title?: string;
  downloadHref?: string;
};

export default function VideoPlayer({ src, poster, title, downloadHref }: Props) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [hasStarted, setHasStarted] = React.useState(false);

  // play/pause toggle from overlay
  const handleOverlayClick = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      if (v.paused) {
        await v.play();
        setIsPlaying(true);
        setHasStarted(true);
      } else {
        v.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      // autoplay or other play errors - ignore silently
      console.warn("Video play failed", err);
    }
  };

  // update state when user uses native controls
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => {
      setIsPlaying(true);
      setHasStarted(true);
    };
    const onPause = () => setIsPlaying(false);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  return (
    <div className="video-frame-wrapper">
      <div className="video-frame">
        {/* video element -- poster will be visible until play */}
        <video
          ref={videoRef}
          className="video-element"
          src={src}
          poster={poster}
          controls={hasStarted} // show native controls only after user started (keeps poster clean)
          preload="none"
          playsInline
        />

        {/* large play overlay (only show when paused / not started) */}
        {!isPlaying && (
          <button
            aria-label={`Play ${title || "video"}`}
            className="video-play-overlay"
            onClick={handleOverlayClick}
          >
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.55)" />
              <path d="M10 8L16 12L10 16V8Z" fill="white" />
            </svg>
          </button>
        )}
      </div>

      {/* small meta row under the player */}
      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="text-sm text-gray-700 dark:text-gray-300">{title}</div>

        {downloadHref ? (
          <a
            href={downloadHref}
            download
            className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 underline"
            aria-label={`Download video ${title}`}
          >
            <Download className="h-4 w-4" />
            Download
          </a>
        ) : null}
      </div>
    </div>
  );
}
