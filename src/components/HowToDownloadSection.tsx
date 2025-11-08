// src/components/HowToDownloadSection.tsx
"use client";

import React from "react";
import VideoPlayer from "./VideoPlayer";

/**
 * HowToDownloadSection
 * Shows two tutorial videos side by side:
 * 1. Chrome extension installation (Article Highlighter)
 * 2. VS Code extension installation (Terminal History)
 *
 * Make sure the following files exist:
 * - /public/videos/article_highlighter.mp4
 * - /public/videos/Terminal_history.mp4
 * Optionally add poster thumbnails:
 * - /public/videos/article_highlighter-poster.jpg
 * - /public/videos/terminal-history-poster.jpg
 */

export default function HowToDownloadSection() {
  return (
    <section
      aria-labelledby="howto-heading"
      className="mt-12 container"
    >
      <h2 id="howto-heading" className="text-2xl font-bold mb-4">
        How to Download & Install
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chrome Extension tutorial */}
        <div>
          <VideoPlayer
            src="/videos/article_highlighter.mp4"
            poster="/videos/article_highlighter-poster.jpg"
            title="How to Install Chrome Extensions"
            downloadHref="/videos/article_highlighter.mp4"
          />
          <ol className="mt-4 ml-5 list-decimal text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>Download the CRX file or open the Chrome Web Store page.</li>
            <li>Open <code>chrome://extensions</code> in your browser.</li>
            <li>Enable <b>Developer Mode</b> in the top-right corner.</li>
            <li>Click <b>Load Unpacked</b> and select the extension folder.</li>
            <li>Once installed, pin the extension from the toolbar.</li>
          </ol>
        </div>

        {/* VS Code Extension tutorial */}
        <div>
          <VideoPlayer
            src="/videos/Terminal_history.mp4"
            poster="/videos/terminal-history-poster.jpg"
            title="How to Install VS Code Extensions"
            downloadHref="/videos/Terminal_history.mp4"
          />
          <ol className="mt-4 ml-5 list-decimal text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>Open VS Code and go to the <b>Extensions</b> tab (Ctrl + Shift + X).</li>
            <li>Search for the extension name or install from a VSIX file.</li>
            <li>Click <b>Install</b> and wait for the process to finish.</li>
            <li>Reload the editor if prompted.</li>
            <li>Open the Command Palette (Ctrl + Shift + P) to confirm it’s active.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
