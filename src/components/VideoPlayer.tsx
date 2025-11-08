// src/components/VideoPlayer.tsx
"use client";

import React from "react";

type Props = {
  src: string;
  poster?: string;
  title?: string;
};

export default function VideoPlayer({ src, poster, title }: Props) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [hasStarted, setHasStarted] = React.useState(false);

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
      console.warn("Video play failed", err);
    }
  };

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
        <video
          ref={videoRef}
          className="video-element"
          src={src}
          poster={poster}
          controls={hasStarted}
          preload="none"
          playsInline
        />

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

      <div className="mt-4">
        <div className="text-sm text-gray-700 dark:text-gray-300">{title}</div>
        
      </div>
    </div>
  );
}
