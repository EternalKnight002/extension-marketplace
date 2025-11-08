// src/components/HowToDownloadSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import VideoPlayer from "./VideoPlayer";

/**
 * HowToDownloadSection - small presentation tweaks:
 * 1) Poster image is used as a decorative background behind the video container so the thumbnail
 *    is visible even if the <video> element is momentarily black.
 * 2) Removed the "Step-by-step guide available below" line while preserving spacing between
 *    the heading and the numbered list (keeps visual rhythm unchanged).
 */

export default function HowToDownloadSection() {
  const tutorials = [
    {
      id: "chrome",
      title: "How to Install Chrome Extensions",
      video: "/videos/article_highlighter.mp4",
      poster: "/videos/article_highlighter-poster.jpg",
      steps: [
        "Download the CRX file or open the Chrome Web Store page.",
        "Open chrome://extensions in your browser.",
        "Enable Developer Mode in the top-right corner.",
        "Click Load Unpacked and select the extension folder.",
        "Once installed, pin the extension from the toolbar.",
      ],
    },
    {
      id: "vscode",
      title: "How to Install VS Code Extensions",
      video: "/videos/Terminal_history.mp4",
      poster: "/videos/terminal-history-poster.jpg",
      steps: [
        "Open VS Code and go to the Extensions tab (Ctrl + Shift + X).",
        "Search for the extension name or install from a VSIX file.",
        "Click Install and wait for the process to finish.",
        "Reload the editor if prompted.",
        "Open the Command Palette (Ctrl + Shift + P) to confirm it’s active.",
      ],
    },
  ];

  return (
    <section aria-labelledby="howto-heading" className="relative mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 id="howto-heading" className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-gray-100 animated-heading">
            How to Download & Install
          </h2>

          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
            Watch quick tutorials or follow the step-by-step guides below to install the extensions effortlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tutorials.map((t) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="howto-card bg-white dark:bg-[#071025] rounded-2xl p-0 shadow-xl overflow-hidden"
            >
              {/* top: video
                  - Presentational change: we use the poster as a decorative background layer behind the video
                    container (keeps the exact VideoPlayer logic untouched; this is only wrapping/presentation).
              */}
              <div
                className="p-5 bg-gradient-to-r from-indigo-50 to-transparent dark:from-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(99,102,241,0.06), transparent), url(${t.poster})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <VideoPlayer
                  src={t.video}
                  poster={t.poster}
                  title={t.title}
                />
              </div>

              {/* bottom: content area */}
              <div className="p-6 bg-white dark:bg-[#071025] border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {/* Removed the "Step-by-step guide available below" line.
                        To preserve spacing between the heading and the numbered list we keep a small bottom margin on the heading (mb-1).
                    */}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {t.title}
                    </h3>
                    {/* <-- the original paragraph was removed intentionally */}
                  </div>

                  <div aria-hidden />
                </div>

                <ol className="howto-list mt-4 space-y-3">
                  {t.steps.map((s, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="step-num">{i + 1}</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-10 text-center text-gray-500 dark:text-gray-400 text-sm">
          💡 All tutorials are recorded by <b>Aman Kumar</b> — feel free to reuse for documentation.
        </motion.p>
      </div>
    </section>
  );
}
