"use client";

import React from "react";
import { motion } from "framer-motion";
import VideoPlayer from "./VideoPlayer";

/**
 * Enhanced HowToDownloadSection
 * - Better spacing between sections
 * - Soft gradient background with rounded edges
 * - Subtle entrance animation
 * - More aesthetic layout
 */

export default function HowToDownloadSection() {
  return (
    <section
      aria-labelledby="howto-heading"
      className="relative mt-20 py-16 rounded-3xl bg-gradient-to-b from-gray-50 to-white dark:from-[#0c1222] dark:to-[#111a2e] shadow-inner border-t border-gray-200 dark:border-gray-800"
    >
      {/* Divider line above section */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            id="howto-heading"
            className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-gray-100"
          >
            How to Download & Install
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Watch quick tutorials or follow the step-by-step guides below to install
            the extensions effortlessly.
          </p>
        </div>

        {/* Videos section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Chrome Extension tutorial */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#141c30] rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <VideoPlayer
              src="/videos/article_highlighter.mp4"
              poster="/videos/article_highlighter-poster.jpg"
              title="How to Install Chrome Extensions"
              downloadHref="/videos/article_highlighter.mp4"
            />
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
              Step-by-step guide available below
            </p>

            <ol className="mt-4 ml-5 list-decimal text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Download the CRX file or open the Chrome Web Store page.</li>
              <li>Open <code>chrome://extensions</code> in your browser.</li>
              <li>
                Enable <b>Developer Mode</b> in the top-right corner.
              </li>
              <li>
                Click <b>Load Unpacked</b> and select the extension folder.
              </li>
              <li>Once installed, pin the extension from the toolbar.</li>
            </ol>
          </motion.div>

          {/* VS Code Extension tutorial */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#141c30] rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <VideoPlayer
              src="/videos/Terminal_history.mp4"
              poster="/videos/terminal-history-poster.jpg"
              title="How to Install VS Code Extensions"
              downloadHref="/videos/Terminal_history.mp4"
            />
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
              Step-by-step guide available below
            </p>

            <ol className="mt-4 ml-5 list-decimal text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Open VS Code and go to the Extensions tab (Ctrl + Shift + X).</li>
              <li>Search for the extension name or install from a VSIX file.</li>
              <li>Click <b>Install</b> and wait for the process to finish.</li>
              <li>Reload the editor if prompted.</li>
              <li>Open the Command Palette (Ctrl + Shift + P) to confirm it’s active.</li>
            </ol>
          </motion.div>
        </div>

        {/* subtle tagline below */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 text-center text-gray-500 dark:text-gray-400 text-sm"
        >
          💡 All tutorials are recorded by <b>Aman Kumar</b> — feel free to reuse for documentation.
        </motion.p>
      </div>
    </section>
  );
}
